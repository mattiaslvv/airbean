<template>
  <div id="app">
    <HamburgerIcon/>
    <router-view />
  </div>
</template>
<script>
import HamburgerIcon from './components/HamburgerIcon.vue'
export default {
  name:"App",
  components: {
HamburgerIcon
  },
}
</script>

<style>
@import './assets/scss/main.scss';
</style>
