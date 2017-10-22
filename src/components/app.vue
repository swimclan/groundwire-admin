<template>
  <div class="app-container">
    <SidebarComponent />
    <HeaderComponent />
    <ContentComponent />
  </div>
</template>

<script>
  import {router} from '../router';
  import HeaderComponent from './header';
  import SidebarComponent from './sidebar';
  import ContentComponent from './content';
  
  export default {
    router,
    components: { HeaderComponent, SidebarComponent, ContentComponent }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/index';

</style>


