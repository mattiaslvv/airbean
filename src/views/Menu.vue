<template>
  <section class="menu">
    <header>
      <nav class="burger">
        <hamburger-icon />
        <cart-icon />
      </nav>
    </header>

    <h1>Meny</h1>
    <div class="menuItems">
      <MenuItem v-for="item in menuItems" v-bind:key="item.id" v-bind:item="item" />
    </div>
    <footer />
  </section>
</template>
<script>
import MenuItem from "../components/MenuItem";
import CartIcon from "../components/CartIcon";
import HamburgerIcon from "../components/HamburgerIcon";
export default {
  components: {
    MenuItem,
    "cart-icon": CartIcon,
    "hamburger-icon": HamburgerIcon
  },
  computed: {
    menuItems() {
      return this.$store.state.menuItems;
    },
    cartItems() {
      return this.$store.state.cart;
    }
  },
  created() {
    {
      this.$store.dispatch("fetchMenuItems");
    }
  }
};
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 3rem;
}
.menu {
  position: relative;
}
</style>