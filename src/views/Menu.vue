<template>
  <section class="menu">
    <nav class="burger">
      <hamburger-icon />
      <cart-icon />
    </nav>
    <MenuItem
      v-for="item in menuItems"
      v-bind:key="item.id"
      @click.native="addToCart(item.id)"
      v-bind:item="item"
    />
  </section>
</template>
<script>
import MenuItem from "../components/MenuItem"
import CartIcon from "../components/CartIcon"
import HamburgerIcon from '../components/HamburgerIcon'
export default { 
  components:{
    MenuItem,
    'cart-icon': CartIcon,
    'hamburger-icon': HamburgerIcon
  } ,  
  computed: {
      menuItems() {
      return this.$store.state.menuItems
      },
      cartItems() {
      return this.$store.state.cart
      }
    },
    created() { {
      this.$store.dispatch('fetchMenuItems')
      }
    },
    methods: {
      addToCart(id) {
        this.$store.dispatch('addThisToCart', id)
      }
    }
}
</script>
<style lang="scss">
h1 {
  margin: 1rem;
}
</style>