<template>
  <div class="content-container">
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {mapMutations} from 'vuex';
  export default {
    computed: {
      ...mapGetters(['currentRoute'])
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/index';
  .content-container {
    width: 80%;
    height: $content-height-lg;
    float: right;
    display: flex;
    align-items: center;
  }
</style>