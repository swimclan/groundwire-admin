<template>
  <div class="preference-form-container">
    <section class="preference-form-heading-container">
      <h1 class="preference-form-heading">Stop Loss Strategy</h1>
    </section>
    <section class="preference-form-description-container">
      <p class="preference-form-description">
        {{ description }}
      </p>
    </section>
    <section class="preference-form-controls-container">
      <control-toggle
        v-model="strategy"
        :options="strategies"
        @input="onInput"
      />
    </section>
    <section class="preference-form-save-container">
      <control-button
        :options="{id: 0, title: saveButton, name: 'save'}"
        :callback="savePrefs"
      />
    </section>
  </div>
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
  created() {
    this.strategy = this.preferences.strategy
  },
  data() {
    return {
      description: config.get('app.pages.dashboard.prefs.strategy.description'),
      strategy: null,
      saveButton: config.get('app.ui.button.save.title')
    }
  },
  methods: {
    ...mapMutations(['setPrefProp']),
    ...mapActions(['savePreferences']),
    onInput() {
      this.setPrefProp({prop: 'strategy', val: this.strategy});
    },
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
    @include pref-form();
    section {
      width: 100%;
      .preference-form-description {
        @include pref-form-description();
      }
      &.preference-form-save-container {
        button {
          @include preference-save-button();
        }
        padding-top: 15px;
        display: flex;
      }
    }
  }
</style>


