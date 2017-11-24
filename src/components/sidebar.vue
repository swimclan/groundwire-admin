  <template>
  <transition name="slide-fade">
    <aside class="sidebar-container">
      <div class="close-container" v-on:click="releasePref">
        <router-link :to="{name: 'dashboard'}" class="close-button" tag="div"></router-link>
      </div>
      <div class="preference-form-container">
        <router-view></router-view>
      </div>
    </aside>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapMutations} from 'vuex';
import forms from 'components/forms';
export default {
  computed: {
    ...mapGetters(['currentRoute', 'activePref', 'prefSelected']),
  },
  methods: {
    ...mapMutations(['releasePref'])
  }
}
</script>


<style lang="scss" scoped>
  @import '../assets/styles/index';
  .sidebar-container {
    height: 100%;
    background-color: $app-main;
    opacity: .9;
    width: $sidebar-width-lg;
    position: fixed;
    left: 0;
    overflow: hidden;
    &.rh {
      background-color: $robinhood-green
    }
    &.slide-fade-enter-active {
      animation-name: drawer;
      animation-duration: .2s;
    }
    &.close {
      width: 0%;
    }
    .close-container {
      display: flex;
      justify-content: flex-end;
      .close-button {
        text-decoration: none;
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
    50%   {width: $sidebar-width-lg + 1%;}
    80%   {width: $sidebar-width-lg - 0.5%;}
    100%  {width: $sidebar-width-lg;}
  }
</style>

