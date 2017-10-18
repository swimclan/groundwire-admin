<template>
    <header class="header-container">
        <h3>{{ title }}</h3>
        <nav id="main-nav">
            <router-link to="login" class="nav-link"  v-show="authenticated === false">Log In</router-link>
            <!--<router-link to="bind" class="nav-link">Bind</router-link>-->
            <router-link to="dashboard" class="nav-link">Dashboard</router-link>
            <router-link to="logout" class="nav-link" v-show="authenticated === true" v-on:click="authenticated = false">Log Out</router-link>
        </nav>
    </header>
</template>

<script>
    import config from 'config';
    export default {
        data: () => {
            return {
                title: config.get('app.name'),
                authenticated: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/styles/component.scss';
    header.header-container {
        width: 100%;
        height: auto;
        background-color: $app-light;
        text-align: center;
        @include shadow();
        nav#main-nav {
            display: flex;
            padding: 12px 0;
            justify-content: center;
            .nav-link {
                font-weight: 200;
                width: 100px;
                text-decoration: none;
            }
        }
    }
</style>