<template>
  <div id="app">
    <nav>
      <hamburger-icon />
    </nav>
    <router-view />
  </div>
</template>
<script>
import HamburgerIcon from './components/HamburgerIcon.vue'
export default {
  name:"App",
  components: {
  'hamburger-icon': HamburgerIcon
  }
}
</script>
<style>
@import "./assets/scss/main.scss";
nav {
  height: 8rem;
}
</style>
