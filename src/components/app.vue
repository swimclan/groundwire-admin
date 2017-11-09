<template>
  <div class="app-container" v-on:click="releasePref">
    <sidebar-component />
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
  import {strategies} from 'services/preferences';
  import {mapMutations} from 'vuex';
  import {mapGetters} from 'vuex';
  export default {
		created() {
      router.onReady(() => {
        this.setRoute(router.currentRoute.name);
        this.authState(() => null);
        this.strategyState(() => null);
      });
      router.beforeEach((to, from, next) => {
        if (to.name === 'dashboard') {
          this.authState(() => {
            if (!this.authenticated && !this.connected) {
              return next('/login');
            }
            if (this.authenticated && !this.connected) {
              return next('/robinhood');
            }
            return this.strategyState(() => next());
          });
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
          'releasePref',
          'setStrategies'
        ]),
      authState(cb) {
        check((err, res) => {
          this.setAuth(res.authorized);
          this.setConnected(res.connected);
          this.setUser(res.user);
          cb();
        });
      },
      strategyState(cb) {
        strategies((err, res) => {
          if (!err) {
            this.setStrategies(res);
          }
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


