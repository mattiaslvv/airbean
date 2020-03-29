<template>
  <section>
    <header>
      <nav class="burger">
        <transition name="fade" mode="out-in">
          <hamburger-icon />
        </transition>
      </nav>
    </header>
    <login />
    <article v-if="userEmail !== false">
      {{userName}} {{userEmail}}
      <ul>
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
<style lang="sass" scoped>
</style>