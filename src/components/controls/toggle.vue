<template>
  <div class="control-toggle-container">
    <control-button
      v-for="opt in opts"
      :class="{active: isActive(opt.id)}"
      :options="opt"
      :callback="setToggle"
      v-bind:data="opt"
      v-bind:key="opt.id"
    />
  </div>
</template>

<script>
import ControlButton from 'components/controls/button';
export default {
  components: {ControlButton},
  props: ['options'],
  model: {
    prop: 'out',
    event: 'input'
  },
  data() {
    return {
      opts: this.options,
      active: null
    }
  },
  methods: {
    setToggle: function(e) {
      this.active = e.target.value;
      this.$emit('input', e.target.value);
    },
    isActive(val) {
      return this.active == val;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/index';
  .control-toggle-container {
    @include flex-row-stack();
    @include center($space: 10px, $width: 100%);
    .active {
      background: $app-white;
      color: $app-main;
      &:hover {
        background: $app-white;
      }
    }
  }
</style>

