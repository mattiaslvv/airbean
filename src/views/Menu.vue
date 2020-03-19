<template>
  <section>
    <ul>
      <li v-for="item in menuItems" v-bind:key="item.id" @click="addToCart(item.id)"><MenuItem v-bind:item ="item"/></li>
    </ul>
    <h1>Cart</h1>
    
     <Cart v-bind:items="cartItems"/>

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
        this.$store.commit('addToCart', id)
      }
    }
}
</script>