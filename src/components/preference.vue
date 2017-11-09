<template>
  <div class="preference-container dash-box" v-bind:class="{active: active}">
    <div class="icon-container">
      <i class="icon" :data-icon="icon"></i>
    </div>
    <div class="title-container">
      <span class="preference-title">{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['active', 'name', 'title', 'icon']
}
</script>

<style lang="scss">
  @import '../assets/styles/index';
  .preference-container {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @include box($width: $pref-width);
    margin: 30px;
    border-bottom: 5px solid $app-white;
    .icon-container {
      flex: 1;
      text-align: center;
      font-size: 8em;
      color: $app-main;
      .icon {
        &::before {
          font-family: FontAwesome;
          content: attr(data-icon);
          font-style: normal;
          font-weight: 100;
          text-shadow: 2px 2px 9px $app-gray;
        }
      }
    }
    .title-container {
      flex: 0;
      font-weight: 100;
    }
    &.active {
      border-bottom: 5px solid $app-main-light;
    }
  }
</style>


