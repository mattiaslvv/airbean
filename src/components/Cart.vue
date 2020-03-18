<template>
  <div>
      <h1>Din beställning</h1>
      <CartItem v-for="item in items" :key="item.id" v-bind:item="item" />
      <button>Take my money!</button>
  </div>
</template>

<script>
import CartItem from "./CartItem"
export default {
    components:{
        CartItem,
    },
    props:{
        items:Array
    }

}
</script>

<style>

</style>