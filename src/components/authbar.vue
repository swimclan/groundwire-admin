<template>
  <nav class="side-nav">
      <router-link to="login" class="nav-link"  v-show="authenticated === false">Log In</router-link>
      <router-link to="logout" class="nav-link" v-show="authenticated === true" v-on:click="authenticated = false">Log Out</router-link>
  </nav>
</template>

<script>
export default {
  props: ['authenticated']
}
</script>

