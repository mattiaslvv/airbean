<template>
  <div>
    <h2>{{item.title}}</h2>
    <h6>{{item.price}}</h6>
    <img src="@/assets/graphics/arrow-up.svg" alt="Arrow up" @click="addToCart(item.id)" />
    <h6>{{countItem}}</h6>
    <img src="@/assets/graphics/arrow-down.svg" alt="Arrow down" @click="removeFromCart(item.id)" />
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