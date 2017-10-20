<template>
    <header class="header-container">
        <nav id="main-nav">
            <router-link to="dashboard" class="nav-link">Dashboard</router-link>
            <router-link to="robinhood" class="nav-link">Robinhood</router-link>
        </nav>
        <Authbar v-bind:authenticated="authenticated" />
    </header>
</template>

<script>
    import config from 'config';
    import Authbar from './authbar';
    export default {
        data: () => {
            return {
                title: config.get('app.name'),
                authenticated: false
            }
        },
        components: {Authbar}
    }
</script>

<style lang="scss" scoped>
    @import '../assets/styles/index';
    header.header-container {
        width: 100%;
        height: auto;
        background-color: $app-white;
        text-align: center;
        nav#main-nav {
            display: flex;
            justify-content: center;
            .nav-link {
                font-weight: 200;
                width: 100px;
                text-decoration: none;
            }
        }
    }
</style>