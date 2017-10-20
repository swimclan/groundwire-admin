<template>
    <div class="app-container">
        <HeaderComponent />
        <SidebarComponent />
        <router-view></router-view>
    </div>
</template>

<script>
    import router from '../router';
    import HeaderComponent from './header';
    import SidebarComponent from './sidebar';

    export default {
        router,
        components: { HeaderComponent, SidebarComponent }
    }

</script>

