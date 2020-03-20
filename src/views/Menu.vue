<template>
  <section>
    <MenuItem
      v-for="item in menuItems"
      v-bind:key="item.id"
      @click.native="addToCart(item.id)"
      v-bind:item="item"
    />
    <h1>Cart</h1>
    <Cart />
  </section>
</template>
<script>
import MenuItem from "../components/MenuItem"
import Cart from "../components/Cart"
export default { 
  components:{
    MenuItem,
    Cart
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