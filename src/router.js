import Vue from 'vue';
import Login from 'components/login';
import Logout from 'components/logout';
import Robinhood from 'components/robinhood';
import Dashboard from 'components/dashboard';
import Sidebar from 'components/sidebar';
import VueRouter from 'vue-router';

const routes = [
  { name: 'root', path: '*', redirect: '/login' },
  { name: 'login', path: '/login', component: Login },
  { name: 'robinhood', path: '/robinhood', component: Robinhood },
  { 
    name: 'dashboard',
    path: '/dashboard',
    component: Dashboard,
    children: [
      {name: 'preference', path: '/dashboard/preference/:id', component: Sidebar}
    ]
  },
  { name: 'logout', path: '/logout', component: Logout }
];

const router = new VueRouter({
  routes
});


export {router};

