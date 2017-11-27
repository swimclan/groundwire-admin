<template>
  <transition name="fade">
  <div class="preference-form-container">
    <section class="preference-form-heading-container">
      <h1 class="preference-form-heading">{{ heading }}</h1>
    </section>  
    <section class="preference-form-description-container">
    <p class="preference-form-description">{{ description }}</p>
    </section>
    <section class="preference-form-controls-container">
      <div class="pref-control">
        <p class="pref-control-label">Initial Stop Loss (%)</p>
        <div class="pref-control-input">
          <control-slider :range="[0, 0.1]" :places="1" v-model="preferences.stopMargin" :postunit="'%'" :factor="100" />
        </div>
      </div>
      <div class="pref-control">
        <p class="pref-control-label">Minimum Stop Loss (%)</p>
        <div class="pref-control-input">
          <control-slider :range="[0, 0.1]" :places="1" v-model="preferences.minStop" :postunit="'%'" :factor="100" />
        </div>
      </div>
      <div class="pref-control">
        <p class="pref-control-label">Maximum Bid/Ask Spread (%)</p>
        <div class="pref-control-input">
          <control-slider :range="[0, 1]" :places="1" v-model="preferences.maxSpread" :postunit="'%'" :factor="100" />
        </div>
      </div>
      <div class="pref-control inline">
        <p class="pref-control-label">ProfitLock&trade; Enabled</p>
        <div class="pref-control-input">
          <control-switch v-model="preferences.profitLockEnabled" :labels="{on: 'on', off: 'off'}" />
        </div>
      </div>
      <transition name="fade">
      <div v-show="preferences.profitLockEnabled" class="pref-control">
        <p class="pref-control-label">ProfitLock&trade; Margin (%)</p>
        <div class="pref-control-input">
          <control-slider :range="[0, 0.05]" :places="2" v-model="preferences.profitLock" :postunit="'%'" :factor="100" />
        </div>
      </div>
      </transition>
    </section>
    <section class="preference-form-buttons">
      <div class="preference-form-save-container">
        <control-button
          :options="{id: 0, title: saveButton, name: 'save'}"
          :callback="savePrefs"
        />
      </div>
      <div class="preference-form-reset-container">
        <control-button
          :options="{id: 0, title: resetButton, name: 'reset'}"
          :callback="resetPrefs"
        />
      </div>
    </section>
  </div>
  </transition> 
</template>

<script>
import config from 'config';
import ControlSlider from 'components/controls/slider';
import ControlSwitch from 'components/controls/switch';
import ControlButton from 'components/controls/button';
import {mapActions, mapMutations, mapGetters} from 'vuex';
export default {
  components: {ControlSlider, ControlSwitch, ControlButton},
  computed: {
    ...mapGetters(['preferences']),
  },
  data() {
    return {
      description: config.get('app.pages.dashboard.prefs.risk.description'),
      strategy: null,
      saveButton: config.get('app.ui.button.save.title'),
      resetButton: config.get('app.ui.button.reset.title'),
      heading: config.get('app.pages.dashboard.prefs.risk.title')
    }
  },
  methods: {
    ...mapActions(['setPreferences', 'savePreferences']),
    savePrefs() {
      this.savePreferences((prefs) => {
        this.$router.push({name: 'dashboard'});
      });
    },
    resetPrefs() {
      this.setPreferences((prefs) => this.$nextTick(() => this.$emit('reset', prefs)));
    }
  },
  created() {
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
      &.preference-form-buttons {
        display: flex;
        justify-content: space-between;
        .preference-form-save-container, .preference-form-reset-container {
          button {
            @include preference-button();
          }
          flex: 1;
        }
      }
    }
  }
  @include fades();
</style>

