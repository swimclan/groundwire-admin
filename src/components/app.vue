<template>
  <div class="app-container">
    <header-component />
    <content-component />
  </div>
</template>

<script>
  import {router} from '../router';
  import HeaderComponent from './header';
  import SidebarComponent from './sidebar';
  import ContentComponent from './content';
  import {check} from 'services/authentication';
  import {mapMutations, mapGetters} from 'vuex';
  export default {
		created() {
      router.onReady(() => {
        this.setRoute(router.currentRoute.name);
        this.authState(() => {
          if (!this.authenticated && !this.connected) {
            return router.push('/login');
          }
        });
      });
      router.beforeEach((to, from, next) => {
        if (to.name === 'dashboard') {
          this.authState(() => {
            if (!this.authenticated) {
              return next('/login');
            }
            this.releasePref();
            return next();
          });
        } else if (from.path.search(/\/preference\//) !== -1 && to.path.search(/\/preference\//) !== -1) {
          this.toggleActivePref(to.name);
          return next();
        } else {
          return next();
        }
      });
    },
    computed: {
      ...mapGetters(['authenticated', 'connected'])
    },
    methods: {
      ...mapMutations(
        [
          'setAuth',
          'setConnected',
          'setUser',
          'setRoute',
          'toggleActivePref',
          'releasePref'
      ]),
      authState(cb) {
        check((err, res) => {
          this.setAuth(res.authorized);
          this.setConnected(res.connected);
          this.setUser(res.user);
          cb();
        });
      }
    },
    router,
    components: { HeaderComponent, SidebarComponent, ContentComponent }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/index';

</style>


