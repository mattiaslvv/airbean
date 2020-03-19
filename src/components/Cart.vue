<template>
  <div>
      <h1>Din beställning</h1>
      <CartItem v-for="item in cartItems" :key="item.id" v-bind:item="item" :countItem="count(item)"/>
      <h2>Total</h2>
      <span>{{totalPrice}}</span>
      <span>inkl moms + drönarleverans</span>
      <button>Take my money!</button>
  </div>
</template>

<script>
import CartItem from "./CartItem"
import { mapGetters } from 'vuex'
export default {
    components:{
        CartItem,
    },
    props:{
        items:Array
    },
    computed:{
        ...mapGetters(['totalPrice']),
        cartItems() {
            // bara visa varje item en gång
            return [...new Set(this.items)];
        }

    },
    methods:{
        count(item){
           return this.items.filter(item2 =>item2.id === item.id).length
        }
    }

}
</script>

<style>

</style>