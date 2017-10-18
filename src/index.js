import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import config from 'config';
import App from 'components/app';

Vue.use(VueRouter);
Vue.use(Vuex);

const app = new Vue({
    components: { App }
}).$mount('#app')
