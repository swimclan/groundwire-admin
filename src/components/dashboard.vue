<template>
  <div class='dashboard-container'>
    <h3 class="dash-title">{{title}}</h3>
    <ul class="preferences-list">
      <li><PrefC :active="true" /></li>
      <li><PrefStop /></li>
    </ul>
  </div>
</template>


<script>
  import config from 'config';
  import {mapGetters, mapMutations} from 'vuex';
  import PrefC from './pref_c';
  import PrefStop from './pref_stop';
  export default {
    computed:  {
      ...mapGetters(['activePref'])
    },
    data() {
      return {
        title: config.get('app.pages.dashboard.title')
      }
    },
    methods: {
      ...mapMutations(['setActivePref'])
    },
    components: {PrefC, PrefStop}
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/index';
  .dashboard-container {
    width: 100%;
    max-width: $screen-lg;
    margin: 0 auto;
    height: 100%;
    .dash-title {
      text-align: center;
    }
    .preferences-list {
      padding: 0;
      margin: 0;
      width: 100%;
      list-style: none;
      display: flex;
      justify-content: space-around;
      flex-flow: row wrap;
    }
  }

</style>
