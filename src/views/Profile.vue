<template>
  <section class="profile">
    <header>
      <nav class="burger">
        <transition name="fade" mode="out-in">
          <hamburger-icon />
        </transition>
      </nav>
    </header>
    <login />
    <article v-if="userEmail !== false">
      <img class="user" src="@/assets/graphics/user.svg" alt="user">
      <h2>{{userName}}</h2> 
      <p>{{userEmail}}</p>
      <ul>
        <h2>Order History</h2>
        <li v-for="order in orderHistory" :key="order.orderNumber">
          Ordernummer: {{order.orderNumber}}
          <br />
          Kostnad: {{order.totalValue}}:-
          <br />
          Datum: {{writeDate(order.timeStamp)}}
        </li>
        <h1>Totalt spenderat: {{orderHistorySpent}}:-</h1>
      </ul>
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
  height: 100vh;
}
.profile{
  background: #331a00;
  height: 100vh;
  article{
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .user{
    width: 8rem;
    height: 8rem;
    background: white;
    border-radius: 999rem;
    padding: 1rem;
    position:static;
  }
  h2{
    margin: 1rem 0 0 0;
    text-align: center;
    color: white;
  }
  p{
    color: rgba($color: #ffffff, $alpha: 0.6);
  }
}
ul{
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0;
  margin: 0;
}
</style>