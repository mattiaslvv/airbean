<template>
  <div>
    <h2>{{item.title}}</h2>
    <h6>{{item.price}}</h6>
    <button @click="addToCart(item.id)">^</button>
    <h6>{{countItem}}</h6>
    <button id="remove" @click="removeFromCart(item.id)">^</button>
  </div>
</template>

<script>
export default {
    props:{
        item:Object,
        countItem:Number
    },
    methods: {
      addToCart(id) {
        this.$store.dispatch('addThisToCart', id)
      },
      removeFromCart(id) {
        this.$store.dispatch('removeThisFromCart', id)
      }
    }

}
</script>

<style>
#remove {
  transform: rotate(-180deg);
}
</style>