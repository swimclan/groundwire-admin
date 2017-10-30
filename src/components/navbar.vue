<template>
  <nav id="main-nav">
    <router-link to="dashboard" class="nav-link">Dashboard</router-link>
    <router-link to="robinhood" class="nav-link">Robinhood</router-link>
  </nav>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
  methods: {
    ...mapMutations(['setRoute'])
  }
}
</script>


<style lang="scss" scoped>
  #main-nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
</style>

