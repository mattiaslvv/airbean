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
  cursor: pointer;
  position: absolute;
  img {
    width: 100%;
  }

  &:hover{
  -webkit-animation:wiggle 1.5s linear infinite;
  animation:wiggle 1.5s linear infinite;
  }
}
@-webkit-keyframes wiggle {
  0% {
    -webkit-transform:rotateZ(0);
    transform:rotateZ(0);
  }
  10% {
    -webkit-transform:rotateZ(-15deg);
    transform:rotateZ(-15deg);
  }
  20% {
    -webkit-transition:rotateZ(10deg);
    transition:rotateZ(10deg);
  }
  25% {
    -webkit-transition:rotateZ(-10deg);
    transition:rotateZ(-10deg);
  }
  30% {
    -webkit-transition:rotateZ(6deg);
    transition:rotateZ(6deg);
  }
  35% {
    -webkit-transform:rotateZ(-4deg);
    transform:rotateZ(-4deg);
  }
  40% {
    transform:rotateZ(7deg);
  }
  50% {
    transform:rotateZ(-6deg);
  }
  60% {
    transform:rotateZ(10deg);
  }
  70% {
    transform:rotateZ(-14deg);
  }
  80% {
    transform:rotateZ(3deg);
  }
  90% {
    transform:rotateZ(-7deg);
  }
  100% {
    -webkit-transition:rotateZ(0);
    transition:rotateZ(0);
  }
}
</style>