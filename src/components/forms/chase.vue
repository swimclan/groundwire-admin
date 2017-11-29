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
      <control-slider :range="[0, 5]" :places="1" v-model="preferences.c" />
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
import {mapGetters, mapActions} from 'vuex';
import config from 'config';
import ControlSlider from 'components/controls/slider';
import ControlButton from 'components/controls/button';
export default {
  components: {ControlSlider, ControlButton},
  computed: {
    ...mapGetters(['preferences']),
  },
  data() {
    return {
      description: config.get('app.pages.dashboard.prefs.chase.description'),
      saveButton: config.get('app.ui.button.save.title'),
      heading: config.get('app.pages.dashboard.prefs.chase.title')
    }
  },
  methods: {
    ...mapActions(['savePreferences']),
    savePrefs() {
      this.savePreferences((prefs) => {
        this.$router.push({name: 'dashboard'});
      });
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
