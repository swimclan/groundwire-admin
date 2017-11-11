<template>
  <div class="control-text-input-container">
  <label v-bind:for="id" v-if="elabel">
    {{label}}
  </label>
  <input
    v-bind:id="id"
    type="text"
    class="control-text-input"
    v-bind:value="value"
    v-on:input="updateValue($event.target.value)"
    v-bind:disabled="d" />
  </div>
</template>


<script>
export default {
  props: ['value', 'disabled', 'eid', 'elabel'],
  data() {
    return {
      d: this.disabled,
      id: this.eid,
      label: this.elabel
    }
  },
  methods: {
    updateValue: function(value) {
      this.$emit('input', value);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/index';
  .control-text-input-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include control-input-text($width: 100%, $background: $app-light-gray-opaque);
    label {
      @include control-text-label();
      padding-right: 12px;
      flex: 2;
    }
    .control-text-input {
      flex: 5;
    }
  }
</style>


