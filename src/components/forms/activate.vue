<template>
  <transition name="fade">
  <div class="preference-form-container">
    <section class="preference-form-heading-container">
      <h1 class="preference-form-heading">{{ heading }}</h1>
    </section>
    <section class="preference-form-description-container">
      <p class="preference-form-description">
        {{ description }}
      </p>
    </section>
    <section class="preference-form-controls-container">
      <div class="pref-control inline">
        <p class="pref-control-label">Activate Trading Algorithm</p>
        <div class="pref-control-input">
          <control-switch v-model="preferences.active" :disabled="!connected" :labels="{on: 'on', off: 'off'}" @input="savePrefs" />
        </div>
      </div>
    </section>
    <section class="preference-form-message" v-show="connected && preferences.active && switched">{{ messages.activated }}</section>
    <section class="preference-form-message" v-show="connected && !preferences.active && switched">{{ messages.deactivated }}</section>
    <section class="preference-form-message" v-show="!connected && !switched">{{ messages.notconnected }}</section>
  </div>
  </transition>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex';
import config from 'config';
import ControlSwitch from 'components/controls/switch';
export default {
  components: {ControlSwitch},
  computed: {
    ...mapGetters(['preferences', 'connected']),
  },
  data() {
    return {
      description: config.get('app.pages.dashboard.prefs.activate.description'),
      heading: config.get('app.pages.dashboard.prefs.activate.title'),
      messages: {
        activated: config.get('messages.flash.activation.activated'),
        deactivated: config.get('messages.flash.activation.deactivated'),
        notconnected: config.get('messages.flash.activation.notconnected'),
      },
      switched: false
    }
  },
  methods: {
    ...mapMutations(['setPrefProp']),
    ...mapActions(['savePreferences']),
    savePrefs() {
      this.savePreferences((prefs) => {
        this.switched = true;
      });
    }
  },
  created() {
    if (!this.connected) {
      this.setPrefProp({prop: 'active', val: false})
    }
    this.$parent.$on('animationcomplete', (e) => {
      this.$emit('animationcomplete', e);
    });
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/index';
  .preference-form-container {
    &.fade-enter-active {
      animation-name: fades;
      animation-duration: 0.5s;
    }
    @include pref-form();
    section {
      @include preference-section();
      .preference-form-description {
        @include pref-form-description();
      }
      &.preference-form-heading-container {
        @include pref-form-heading();
      }
      &.preference-form-controls-container {
        .pref-control {
          padding: 0.7em 0;
          &.fade-enter-active {
            animation-name: fades;
            animation-duration: 0.3s;
          }
          &.fade-leave-active {
            animation-name: fades;
            animation-duration: 0.2s;
            animation-direction: reverse;
          }
          .pref-control-label {
            margin: 0;
            @include basetext($reduce: 0.6em);
          }
        }
        .pref-control.inline {
          @include flex-row-stack();
          margin-bottom: 10px;
        }
      }
      &.preference-form-message {
        @include basetext($enlarge: 0.3em);
        text-align: center;
      }
    }
  }
  @include fades();
</style>
