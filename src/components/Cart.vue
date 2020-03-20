<template>
  <div>
    <h1>Din beställning</h1>
    <CartItem v-for="item in cartItems" :key="item.id" v-bind:item="item" :countItem="count(item)" />
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
            // bara använda varje id en gång
            let idMap = [...new Set(this.items.map(item => item.id))]
            // hitta item för alla id
            return idMap.map(id => this.items.find(item => item.id == id))
        }
    },
    methods:{
        count(item){
           return this.items.filter(item2 =>item2.id === item.id).length
        },
        //TODO: add loading spinner while awaiting response from API call
        //TODO: lös duplicated keys error om man går till orderstatus, sen tillbaka till menu och beställer mer
        async postItems(){
            await this.$store.dispatch('postOrderItems')
            this.$router.push('/orderstatus')
        }
    }

}
</script>

<style>
</style>