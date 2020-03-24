<template>
  <div id="wrapper" v-if="showMenu">
    <section id="nav">
      <nav class="burgerWrapper">
        <img @click="closeMenu" src="@/assets/graphics/close.svg" alt="Close" />
      </nav>
      <h1 class="router" @click="goTo('/Menu')">Meny</h1>
      <br />
      <div class="line"></div>
      <h1 class="router" @click="goTo('/about')">Vårt kaffe</h1>
      <br />
      <div class="line"></div>
      <h1 class="router" @click="goTo('/OrderStatus')">Order status</h1>
    </section>
  </div>
</template>

<script>
export default {
  name: "HamburgerMenu",
  methods: {
    closeMenu() {
      this.$store.commit("changeMenu");
    }
  },
  computed: {
    showMenu() {
      return this.$store.state.showMenu;
    }
  },
  methods: {
    closeMenu() {
      this.$store.commit("changeMenu");
    },
    goTo(path) {
      this.$router
        .push(path)
        .then(this.closeMenu())
        .catch(err => {});
    }
  }
};
</script>
<style lang="scss" scoped>
#wrapper {
  width: 100%;
}
.burgerWrapper {
  z-index: 9999;
  display: flex;
  background: white;
  border-radius: 100%;
  height: 2rem;
  width: 2rem;
  padding: 1rem;
  margin: 1rem 0 5rem 0;
  position: absolute;
  top: 0;
  left: 5%;
  img {
    width: 100%;
  }
}
#nav {
  margin: auto;
  position: fixed;
  width: 500px;
  height: 100vh;
  background: #331a00;
  top: 0;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .router {
    color: white;
    text-decoration: none;
    font-size: 3rem;
    margin: 3rem;
    cursor: pointer;
  }

  .line {
    width: 100px;
    border-bottom: 2px solid white;
    margin: auto;
  }
}
</style>