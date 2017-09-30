import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from 'components/login';
import Bind from 'components/bind';
import Dashboard from 'components/dashboard';

Vue.use(VueRouter);

const routes = [
    { path: '*', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/bind', component: Bind },
    { path: '/dashboard', component: Dashboard }
];

export default new VueRouter({
    routes
});
