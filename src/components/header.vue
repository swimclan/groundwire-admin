<template>
    <header class="header-container">
        <h3>{{ title }}</h3>
        <nav id="main-nav">
            <router-link to="login" class="nav-link">Login</router-link>
            <router-link to="bind" class="nav-link">Bind</router-link>
            <router-link to="dashboard" class="nav-link">Dashboard</router-link>
        </nav>
    </header>
</template>

<script>
    import config from 'config';
    export default {
        data: () => {
            return {title: config.get('app.name')}
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/styles/component.scss';
    header.header-container {
        width: 100%;
        height: 60px;
        background-color: $app-light;
        text-align: center;
        @include shadow();
        nav#main-nav {
            display: flex;
            justify-content: flex-end;
            .nav-link {
                font-weight: bold;
                width: 8%;
                text-align: center;
            }
        }
    }
</style>