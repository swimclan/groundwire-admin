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
      <div class="pref-control inline">
        <p class="pref-control-label">Status:</p>
        <div class="pref-control-input" :data-connected="connected ?  icons.connected : icons.disconnected" >
          {{ connected ?  labels.connected : labels.disconnected }}
        </div>
      </div>
    </section>
    <section class="preference-form-buttons">
      <div class="preference-form-connect-container">
        <control-button
          :options="{id: 0, title: connected ? labels.disconnect : labels.connect, name: 'connectionChange'}"
          :callback="handleConnectionChange"
        />
      </div>
    </section>
  </div>
  </transition>
</template>

<script>
import ControlButton from 'components/controls/button';
import config from 'config';
import {mapGetters, mapActions} from 'vuex';
export default {
  components: {ControlButton},
  computed: {
    ...mapGetters(['connected'])
  },
  data() {
    return {
      heading: config.get('app.pages.dashboard.prefs.account.title'),
      description: config.get('app.pages.dashboard.prefs.account.description'),
      labels: {
        connected: config.get('app.ui.labels.connected'),
        disconnected: config.get('app.ui.labels.disconnected'),
        connect: config.get('app.ui.labels.connect'),
        disconnect: config.get('app.ui.labels.disconnect')
      },
      icons: {
        connected: config.get('app.ui.icons.connected'),
        disconnected: config.get('app.ui.icons.disconnected')
      }
    }
  },
  created() {
    this.$parent.$on('animationcomplete', (e) => {
      this.$emit('animationcomplete', e);
    });
  },
  methods: {
    ...mapActions(['disconnect']),
    handleConnectionChange() {
      let nextStep = {
        true: () => this.disconnect(),
        false: () => this.$router.push({name: 'robinhood'})
      }
      return nextStep[this.connected].apply(this);
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
      &.preference-form-controls-container {
        .pref-control {
          padding: 0.7em 0;
          .pref-control-label, .pref-control-input {
            margin: 0;
            @include basetext($enlarge: 0.3em);
          }
          &.inline {
            display: flex;
            justify-content: center;
            margin-bottom: 10px;
            .pref-control-label {
              margin-right: 10px;
            }
          }
          .pref-control-input::after {
            font-family: FontAwesome;
            content: attr(data-connected);
          }
        }
      }
      &.preference-form-buttons {
        display: flex;
        justify-content: space-between; 
        .preference-form-connect-container {
          width: 100%;
          button {
            @include preference-button();
          }
        }     
      }
    }
  }
  @include fades();
</style>


