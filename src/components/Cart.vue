<template>
  <div>
    <h1>Din beställning</h1>
    <CartItem
      v-for="item in cartItems"
      :key="item.id"
      v-bind:item="item"
      :countItem="count(item)"
      @click.native="removeFromCart(item.id)"
    />
    <h2>Total</h2>
    <span>{{totalPrice}}</span>
    <span>inkl moms + drönarleverans</span>
    <button @click="postItems">Take my money!</button>
  </div>
</template>

<script>
import CartItem from "./CartItem"
import { mapGetters } from 'vuex'
export default {
    components:{
        CartItem,
    },
    computed:{
        ...mapGetters(['totalPrice']),
        items() {
            return this.$store.state.cart
        },
        cartItems() {
            // bara visa varje item en gång
            return [...new Set(this.items)];
        }
    },
    methods:{
        count(item){
           return this.items.filter(item2 =>item2.id === item.id).length
        },
        //TODO: add loading spinner while awaiting response from API call
        async postItems(){
            await this.$store.dispatch('postOrderItems')
            this.$router.push('/orderstatus')
        },
        removeFromCart(id) {
            this.$store.dispatch('removeThisFromCart', id)
        }
    }

}
</script>

<style>
</style>