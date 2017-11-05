<template>
  <nav id="side-nav">
    <router-link to="login" class="nav-link" v-show="!authenticated">Log In</router-link>
    <span class="nav-icon authenticated" v-show="authenticated"></span>
    <a class="nav-link user-email" v-show="authenticated">{{username}}</a>
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
      'username'
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
      position: relative;
      bottom: 2px;
      color: $app-main;
      font-size: 1.25em;
    }
  }
}
</style>


