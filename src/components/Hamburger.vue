<template>
  <div id="wrapper" v-if="showMenu">
          <nav class="burgerWrapper">
        <img @click="closeMenu" src="@/assets/graphics/close.svg" alt="Close" />
        </nav>
    <section id="nav">
      <router-link class="router" to="/Menu" tag="h1">Meny</router-link>
      <br />
      <router-link class="router" to="/about" tag="h1">Vårt kaffe</router-link>
      <br />
      <router-link class="router" to="/OrderStatus" tag="h1">Order status</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "HamburgerMenu",
  methods: {
    closeMenu() {
      this.$store.commit('changeMenu')
    }
  },
  computed: {
    showMenu() {
      return this.$store.state.showMenu
    }
  },
  methods: {
    closeMenu() {
      this.$store.commit('changeMenu')
    }
  },
  beforeDestroy(){
    this.$store.commit('changeMenu')
  }
}
</script>
<style lang="scss">
.burgerWrapper {
  display: flex;
  background: white;
  border-radius: 100%;
  height: 2rem;
  width: 2rem;
  padding: 1rem;
  position: fixed;
  img{
    width: 100%;
  }
#nav{
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #331a00;
  top: 0;
  z-index: 1;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .router{
    color: white;
    text-decoration: none;
    font-size: 3rem;
    margin: 3rem;
  }
}

}
</style>