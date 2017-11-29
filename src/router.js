import Vue from 'vue';
import Login from 'components/login';
import Logout from 'components/logout';
import Robinhood from 'components/robinhood';
import Dashboard from 'components/dashboard';
import Sidebar from 'components/sidebar';
import VueRouter from 'vue-router';
import config from 'config';
import forms from 'components/forms';

const dashboardChildren = [
  {
    name: 'preference',
    path: '/dashboard/preference',
    component: Sidebar,
    children: [
      {
        name: 'account',
        path: '/dashboard/preference/account',
        component: forms.AccountForm
      }, {
        name: 'activate',
        path: '/dashboard/preference/activate',
        component: forms.ActivateForm
      }, {
        name: 'chase',
        path: '/dashboard/preference/chase',
        component: forms.ChaseForm
      }, {
        name: 'risk',
        path: '/dashboard/preference/risk',
        component: forms.RiskForm
      },
      {
        name: 'screener',
        path: '/dashboard/preference/screener',
        component: forms.ScreenerForm
      },
      {
        name: 'strategy',
        path: '/dashboard/preference/strategy',
        component: forms.StrategyForm
      }
    ]
  }
];

const routes = [
  { name: 'root', path: '*', redirect: '/dashboard' },
  { name: 'login', path: '/login', component: Login },
  { name: 'robinhood', path: '/robinhood', component: Robinhood },
  { 
    name: 'dashboard',
    path: '/dashboard',
    component: Dashboard,
    children: dashboardChildren
  },
  { name: 'logout', path: '/logout', component: Logout }
];

const router = new VueRouter({
  routes
});


export {router};

