<template>
  <section id="burgerWrapper">
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

<style scoped>
#burgerWrapper {
  display: flex;
  background-color: white;
  border-radius: 100%;
  height: 40px;
  width: 40px;
}
#burger {
  align-self: center;
}
</style>