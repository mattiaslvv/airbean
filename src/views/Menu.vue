<template>
  <section>
    <ul>
      <li v-for="item in menuItems" v-bind:key="item.id" @click="addToCart(item.id)">{{item}}</li>
    </ul>
    <h1>Cart</h1>
    <ul>
      <li v-for="item in cartItems" v-bind:key="item.id">{{item}}</li>
    </ul>
  </section>
</template>
<script>
export default {    
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