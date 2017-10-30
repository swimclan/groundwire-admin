<template>
  <nav id="side-nav">
    <router-link to="login" class="nav-link" v-show="!authenticated">Log In</router-link>
    <span class="nav-icon authenticated" v-show="authenticated"></span>
    <span class="nav-icon connected" v-show="connected && authenticated"></span>
    <a class="nav-link user-email" v-show="authenticated">{{user}}</a>
    <router-link to="logout" class="nav-link" v-show="authenticated">Log Out</router-link>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapMutations} from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'authenticated',
      'connected',
      'user'
    ])
  },
  methods: {
    ...mapMutations(['setRoute'])
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/index';
#side-nav {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .nav-icon {
    font-family: FontAwesome;
    margin-right: 5px;
    &.authenticated::before {
      content: "\f2be";
      color: $app-main;
      font-size: 1.25em;
    }
    &.connected {
      border: 2px solid $robinhood-green;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      background-image: url('../assets/images/rh-logo.png');
      background-size: 24px 24px;
      background-repeat: no-repeat;
      background-position: center; 
    }
  }
}
</style>


