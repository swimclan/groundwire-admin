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
      <control-toggle
        v-model="preferences.strategy"
        :options="strategies"
      />
    </section>
    <section class="preference-form-buttons">
      <control-button
        :options="{id: 0, title: saveButton, name: 'save'}"
        :callback="savePrefs"
      />
    </section>
  </div>
  </transition>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex';
import config from 'config';
import ControlToggle from 'components/controls/toggle';
import ControlButton from 'components/controls/button';
export default {
  components: {ControlToggle, ControlButton},
  computed: {
    ...mapGetters(['strategies', 'preferences']),
  },
  data() {
    return {
      description: config.get('app.pages.dashboard.prefs.strategy.description'),
      strategy: null,
      saveButton: config.get('app.ui.button.save.title'),
      heading: config.get('app.pages.dashboard.prefs.strategy.title')
    }
  },
  methods: {
    ...mapActions(['savePreferences']),
    savePrefs() {
      this.savePreferences((prefs) => {
        this.$router.push({name: 'dashboard'});
      });
    }
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
      &.preference-form-buttons {
        display: flex;
        justify-content: center;
        button {
          @include preference-button();
        }
      }
    }
  }
  @include fades();
</style>


