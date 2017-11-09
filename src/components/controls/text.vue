<template>
  <input type="text" class="control-text-input" v-model="model" v-bind:disabled="d" />
</template>

<script>
export default {
  props: ['model', 'disabled'],
  data() {
    return {
      m: this.model,
      d: this.disabled
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/index';
  .control-text-input {
    @include control-input-text($background: $app-light-gray-opaque);
  }
</style>


