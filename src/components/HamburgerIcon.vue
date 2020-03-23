<template>
  <section class="burgerWrapper">
    <img id="burger" src="@/assets/graphics/navicon.svg" alt="Hamburgermenu" @click="showMenu" />
    <hamburger-menu />
  </section>
</template>

<script>
import HamburgerMenu from './Hamburger.vue'
export default {
  name: "HamburgerIcon",
  components: {
    'hamburger-menu': HamburgerMenu
  },
  methods: {
    showMenu() {
      this.$store.commit('changeMenu')
    }
  }
}
</script>

<style lang="scss">
.burgerWrapper {
  z-index: 9999;
  display: flex;
  background: white;
  border-radius: 100%;
  height: 2rem;
  width: 2rem;
  padding: 1rem;
  position: fixed;
  img {
    width: 100%;
  }
}
</style>