<template>
  <div class='dashboard-container'>
    <router-view></router-view>
    <h3 class="dash-title">{{title}}</h3>
    <ul class="preferences-list">
      <li v-for="pref in prefs" v-bind:data="pref" v-bind:key="pref.name">
        <preference
          v-bind:name="pref.name"
          v-bind:icon="pref.icon"
          v-bind:title="pref.title"
          v-bind:active="activePref === pref.name"
          v-on:click.native.stop="linkPref(pref.name)"
        />
      </li>
    </ul>
  </div>
</template>


<script>
  import config from 'config';
  import {mapGetters, mapMutations} from 'vuex';
  import Preference from './preference';
  export default {
    computed:  {
      ...mapGetters(['activePref'])
    },
    data() {
      return {
        title: config.get('app.pages.dashboard.title'),
        prefs: config.get('app.pages.dashboard.prefs')
      }
    },
    methods: {
      ...mapMutations(['toggleActivePref']),
      linkPref(name) {
        this.toggleActivePref(name);
        if (this.activePref) {
          this.$router.push({name: 'preference', params: {id: name}});
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
