<template>
  <div id="wrapper" v-if="showMenu">
    <section id="nav">
      <div id="imgWrapper" @click="closeMenu">
        <img src="@/assets/graphics/close.svg" alt="Close" />
      </div>
      <router-link to="/Menu" tag="h1">Meny</router-link>
      <br />
      <router-link to="/about" tag="h1">Vårt kaffe</router-link>
      <br />
      <router-link to="/OrderStatus" tag="h1">Order status</router-link>
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
<style scoped>
#wrapper {
  position: fixed;
  left: 0;
  translate: transform-X(0);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.959);
}
#nav {
  position: absolute;
  top: 40%;
  left: 40%;
  translate: transform-X(-40%);
  /*translate: transform-Y(-40%); */
}
#imgWrapper {
  display: flex;
  background-color: white;
  border-radius: 100%;
  height: 40px;
  width: 40px;
}
img {
  align-self: center;
  height: 20px;
  width: 20px;
}
h1 {
  color: white;
  text-decoration: none;
  font-size: 2rem;
}
</style>