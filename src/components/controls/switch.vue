<template>
  <span class="control-switch-container">
    <div class="switch-label" id="off" :data-label="labels.off" v-on:click="setSwitch(false)"></div>
    <div class="switch-backing" v-on:click="setSwitch()">
      <i class="fa fa-bars switch-grip" :class="{on: p, disabled: !active}"></i>
    </div>
    <div class="switch-label" id="on" :data-label="labels.on" v-on:click="setSwitch(true)"></div>
  </span>
</template>

<script>
import {isUndefined} from 'lodash';
export default {
  props: ['labels', 'value', 'disabled'],
  model: {
    prop: 'value',
    event: 'input'
  },
  created() {
    this.$parent.$on('reset', () => this.p = this.value);
  },
  data() {
    return {
      p: this.value,
      active: this.disabled ? !this.disabled : true
    }
  },
  methods: {
    setSwitch(val) {
      if (this.active) {
        this.p = !isUndefined(val) ? val : !this.p;
        this.$emit('input', this.p);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/index';
  .control-switch-container {
    @include flex-row-stack();
    padding: 5px;
    .switch-label {
      @include basetext($reduce: 0.4em);
      &#off::before {
        content: attr(data-label);
        margin: 10px;
      }
      &#on::after {
        content: attr(data-label);
        margin: 10px;
      }
    }
    .switch-backing {
      width: 60px;
      height: 30px;
      background: $app-light-gray-opaque;
      border-radius: 4px;
      border: 2px solid $app-white;
      .switch-grip {
        position: relative;
        transform: rotate(90deg);
        font-size: 1.9em;
        transition:right .2s ease-out;
        right: 0;
        color: $app-white;
        &.on {
          right: -34px;
        }
        &.disabled {
          color: $app-ultra-light-gray-opaque;
        }
      }

    }
  }
</style>
