<template>
  <nav id="side-nav">
    <router-link to="login" class="nav-link"  v-show="!authenticated"v-on:click.native="setRoute('login')">Log In</router-link>
    <router-link to="logout" class="nav-link" v-show="authenticated" v-on:click.native="setRoute('logout')">Log Out</router-link>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapMutations} from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'authenticated'
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
}
</style>


