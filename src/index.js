import Vue from 'vue';
import './initialize';
import config from 'config';
import {store} from './state/store';
import App from 'components/app';

const app = new Vue({
  store,
  components: { App }
}).$mount('#app')
