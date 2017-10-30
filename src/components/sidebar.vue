<template>
  <aside class="sidebar-container" v-bind:class="{ rh: currentRoute === 'robinhood' }"></aside>
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
  @import '../assets/styles/index';
  .sidebar-container {
    float: left;
    width: 0%;
    height: 100%;
    background-color: $app-main;
    &.rh {
      background-color: $robinhood-green
    }
  }
</style>

