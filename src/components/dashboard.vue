<template>
  <div class='dashboard-container'>
    <router-view></router-view>
    <h3 class="dash-title">{{title}}</h3>
    <ul class="preferences-list">
      <li v-for="prefkey in prefkeys" v-bind:data="prefkey" v-bind:key="prefs[prefkey].name">
        <preference
          v-bind:name="prefs[prefkey].name"
          v-bind:icon="prefs[prefkey].icon"
          v-bind:title="prefs[prefkey].title"
          v-bind:description="prefs[prefkey].description"
          v-bind:active="activePref === prefs[prefkey].name"
          v-on:click.native.stop="linkPref(prefs[prefkey].name)"
        />
      </li>
    </ul>
  </div>
</template>


<script>
  import config from 'config';
  import {mapGetters, mapMutations, mapActions} from 'vuex';
  import Preference from './preference';
  export default {
    created() {
      this.setStrategies();
      this.setPreferences();
    },
    computed:  {
      ...mapGetters(['activePref']),
    },
    data() {
      return {
        title: config.get('app.pages.dashboard.title'),
        prefs: config.get('app.pages.dashboard.prefs'),
        prefkeys: Object.keys(config.get('app.pages.dashboard.prefs'))
      }
    },
    methods: {
      ...mapMutations(['toggleActivePref']),
      ...mapActions(['setStrategies', 'setPreferences']),
      linkPref(name) {
        this.toggleActivePref(name);
        if (this.activePref) {
          let targetPrefRoute = this.activePref;
          this.$router.replace({name: targetPrefRoute});
        } else {
          this.$router.push({name: 'dashboard'});
        }
      }
    },
    components: {Preference}
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
      font-size: 2em;
      color: $app-dark;
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
