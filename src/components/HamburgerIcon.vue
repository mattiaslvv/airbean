<template>
  <div>
    <section class="burgerWrapper">
      <img id="burger" src="@/assets/graphics/navicon.svg" alt="Hamburgermenu" @click="showMenu" />
    </section>
    <hamburger-menu />
  </div>
</template>

<script>
import HamburgerMenu from "./Hamburger.vue";
export default {
  name: "HamburgerIcon",
  components: {
    "hamburger-menu": HamburgerMenu
  },
  methods: {
    showMenu() {
      this.$store.commit("changeMenu");
    }
  }
};
</script>

<style lang="scss" scoped>
.burgerWrapper {
  z-index: 9999;
  display: flex;
  background: white;
  border-radius: 100%;
  margin: 1rem;
  height: 2rem;
  width: 2rem;
  padding: 1rem;
  margin-bottom: 5rem;
  position: absolute;
  img {
    width: 100%;
  }
}
</style>