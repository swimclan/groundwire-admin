<template>
  <aside class="sidebar-container" v-on:click.stop="doNothing" v-bind:class="{ rh: currentRoute === 'robinhood', open: prefSelected, close: !prefSelected }">
    <div class="close-container">
      <button class="close-button" v-on:click.stop="releasePref"></button>
    </div>
  </aside>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapMutations} from 'vuex';
export default {
  computed: {
    ...mapGetters(['currentRoute', 'activePref', 'prefSelected']),
  },
  methods: {
    ...mapMutations(['releasePref']),
    doNothing: () => null
  }
}
</script>


<style lang="scss" scoped>
  @import '../assets/styles/index';
  .sidebar-container {
    width: 0%;
    height: 100%;
    background-color: $app-main-light;
    opacity: .9;
    position: fixed;
    left: 0;
    transition: width .3s;
    transition-timing-function: ease;
    &.rh {
      background-color: $robinhood-green
    }
    &.open {
      animation-name: drawer;
      animation-duration: .3s;
      width: 33%;
    }
    &.close {
      width: 0%;
    }
    .close-container {
      display: flex;
      justify-content: flex-end;
      .close-button {
        background: none;
        outline: none;
        border: none;
        font-weight: 200;
        font-size: 3em;
        color: $app-white;
        &:before {
          content: "\00D7";
          line-height: 0.8;
          padding: 10px;
          transition: text-shadow 0.7s;
        }
        &:hover {
          text-shadow: 0px 0px 8px $app-white;
        }
      }
    }
  }
  @keyframes drawer {
    0%    {width: 0;}
    50%   {width: 34%;}
    80%   {width: 32%;}
    100%  {width: 33%;}
  }
</style>

