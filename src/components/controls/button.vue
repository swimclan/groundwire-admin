<template>
  <button class="control-toggle-button" @click.prevent="toggleActive" :value="options.id">
    {{options.title}}      
  </button>
</template>

<script>
export default {
  props: ['options', 'callback'],
  methods: {
    toggleActive(e) {
      this.callback(e);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/index';
  .control-toggle-button {
    flex: 1;
    @include control-toggle();
  }
</style>


