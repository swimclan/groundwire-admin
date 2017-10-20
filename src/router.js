import Vue from 'vue';
import Login from 'components/login';
import Logout from 'components/logout';
import Robinhood from 'components/robinhood';
import Dashboard from 'components/dashboard';
import VueRouter from 'vue-router';

const routes = [
    { path: '*', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/robinhood', component: Robinhood },
    { path: '/dashboard', component: Dashboard },
    { path: '/logout', component: Logout }
];

export default new VueRouter({
    routes
});
