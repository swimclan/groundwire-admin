import Vue from 'vue';
import config from 'services/config';

new Vue({
    el: '#app',
    data: {
        appName: config.get('app.name')
    },
    created() {
        console.log(config.get('app.name'));
    }
});
