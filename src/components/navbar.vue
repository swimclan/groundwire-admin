<template>
  <nav id="main-nav">
    <router-link :to="{name: 'dashboard'}" class="nav-link">Dashboard</router-link>
    <router-link :to="{name: 'robinhood'}" class="nav-link">Robinhood</router-link>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters(['currentRoute'])
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

