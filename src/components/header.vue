<template>
  <header class="header-container">
    <div class="ghost-bar"></div>
    <Navbar />
    <Authbar />
  </header>
</template>

<script>
  import config from 'config';
  import Authbar from './authbar';
  import Navbar from './navbar';
  export default {
    data: () => {
      return {
        title: config.get('app.name')
      }
    },
    components: {Authbar, Navbar}
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/index';
  header.header-container {
    float: right;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: $header-height-lg;
    background-color: $app-white;
    text-align: center;
    .ghost-bar {
      flex: 1;
    }
  }
</style>