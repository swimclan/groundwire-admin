<template>
    <header class="header-container">
        <h3>{{ title }}</h3>
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
    }
</style>