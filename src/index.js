import Vue from 'vue';
import config from 'config';
import App from 'components/app';

new Vue({
    el: '#app',
    data: {
        appName: config.get('app.name'),
        appAuthor: config.get('app.author')
    },
    components: { App }
});
