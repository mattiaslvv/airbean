<template>
    <section class="profile">
        <header>
            <nav class="burger">
            <transition name="fade" mode="out-in">
            <hamburger-icon />
            </transition>
            </nav>
        </header>
        <div class="poop">
    <login/>
    </div>
    <article v-if="userEmail !== false">
        <img class="user" src="@/assets/graphics/user.svg" alt="user">
        <h2>{{userName}}</h2> 
        <p>{{userEmail}}</p>
        <ul>
            <h2>Order History</h2>
            <li v-for="order in orderHistory" :key="order.orderNumber" class="order">
                <div>
                <h4>{{order.orderNumber}}</h4>
                <span>total ordersumma</span>
                </div>
                <div>
                <h4>{{writeDate(order.timeStamp)}}</h4>
                <span class="value">{{order.totalValue}} kr</span>
                </div>
            </li>
        </ul>
        <div class="total">
            <h1>Totalt spenderat</h1><h1>{{orderHistorySpent}} kr</h1>
        </div>
    </article>
</section>
</template>
<script>
import Login from "../components/Login.vue"
import HamburgerIcon from "../components/HamburgerIcon";
import { mapGetters } from "vuex";
export default {
name: "Profile",
components: {
    'login': Login,
    'hamburger-icon': HamburgerIcon
},
computed: {
    orderHistory() {
    return this.$store.state.orderHistory
    },
...mapGetters(["orderHistorySpent"]),
    userName() {
    return this.$store.getters.getUserName
    },
    userEmail() {
    return this.$store.getters.getUserEmail
    }
},
methods: {
    writeDate(d) {
    return new Date(d).toLocaleDateString().split("-").join("/");
    }
},
data () {
    return {
    userID: this.$route.params.uuid
    }
},
beforeMount() {
    if (this.userEmail == false) {
    return false
    } else {
    this.$store.dispatch('getOrderHistory', this.userID)
    }
    }
}
</script>
<style lang="scss">
.profile article{
    padding: 2rem;
}
.profile{
    background: #331a00;
    height: 100vh;
    article{
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    }
    .user{
    width: 8rem;
    height: 8rem;
    background: white;
    border-radius: 999rem;
    padding: 1rem;
    position:static;
    }
    .total {
    display: flex;
    width: 90%;
    justify-content: space-between;
    border-top: 1px solid white;
    h1{
        color:white;
    }
}
.poop{
    display: flex;
    align-items: center;
    justify-content: center;
}
    h2{
    margin: 1rem 0 0 0;
    color: white;
    }
    p{
    color: rgba($color: #ffffff, $alpha: 0.6);
    }
}
ul{
    width: 90%;
    list-style: none;
    padding: 0;
    margin: 0;
    .order{
        display: flex;
        justify-content:space-between;
        border-bottom:1px solid rgb(168, 168, 168);
    span{
        color:rgb(168, 168, 168);
    }
    .value{
        display: flex;
        justify-content: flex-end;
    }
    h4{
        color:rgb(214, 214, 214);
        margin:1rem 0 0 0;
    }
    }
}

</style>