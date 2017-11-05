<template>
  <div class="preference-container dash-box" v-bind:class="{active: active}">
    <div class="icon-container">
      <i class="icon"></i>
    </div>
    <div class="title-container">
      <span class="preference-title">{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['active'],
  data() {
    return {
      title: 'Generic Preference Title',
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/styles/index';
  .preference-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @include box($width: $pref-width);
    .icon-container {
      flex: 1;
      text-align: center;
      font-size: 8em;
      color: $app-main;
    }
    .title-container {
      flex: 0;
      font-weight: 100;
    }
  }
</style>


