<template>
    <div class="app-container">
        <HeaderComponent />
        <router-view></router-view>
    </div>
</template>

<script>
    import router from '../router';
    import HeaderComponent from './header';

    export default {
        router,
        components: { HeaderComponent }
    }

</script>

