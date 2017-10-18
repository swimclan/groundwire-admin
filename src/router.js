import Vue from 'vue';
import Login from 'components/login';
import Logout from 'components/logout';
import Bind from 'components/bind';
import Dashboard from 'components/dashboard';
import VueRouter from 'vue-router';

const routes = [
    { path: '*', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/bind', component: Bind },
    { path: '/dashboard', component: Dashboard },
    { path: '/logout', component: Logout }
];

export default new VueRouter({
    routes
});
