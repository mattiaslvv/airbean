<template>
  <div class="overBground" v-if="showCart">
    <div class="cartBground">
      <h1 class="cart">Din beställning</h1>
      <div v-if="loading" id="loader">
        <img src="../assets/graphics/loader.png" />
      </div>
      <div class="list" v-else>
        <CartItem
          v-for="item in cartItems"
          :key="item.id"
          v-bind:item="item"
          :countItem="count(item)"
        />
      </div>
      <div class="payment">
        <div class="price">
          <h2 class="total">Total</h2>
          <h2>{{totalPrice}} kr</h2>
        </div>
        <span>inkl moms + drönarleverans</span>
        <button class="pay" @click="postItems">Take my money!</button>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem";
import { mapGetters } from "vuex";
export default {
  components: {
    CartItem
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapGetters(["totalPrice"]),
    items() {
      return this.$store.state.cart;
    },
    cartItems() {
      // bara använda varje id en gång
      let idMap = [...new Set(this.items.map(item => item.id))];
      // hitta item för alla id
      return idMap.map(id => this.items.find(item => item.id == id));
    },
    showCart() {
      return this.$store.state.showCart;
    }
  },
  methods: {
    count(item) {
      return this.items.filter(item2 => item2.id === item.id).length;
    },
    async postItems() {
      this.loading = true;
      await this.$store.dispatch("postOrderItems");
      this.$router.push("/orderstatus");
      this.loading = false;
    }
  }
};
</script>

<style>
@import "./../assets/scss/main.scss";
h1 {
  text-align: center;
  font-size: 2rem;
}
.cart {
  padding: 1rem;
  top: 4rem;
  right: 0;
  margin: 1rem;
  background-color: white;
  border-radius: 0.3rem;
  text-align: center;
}
.cartBground {
  position: relative;
  top: 100px;
  background-color: white;
  height: 950px;
  color: black;

  width: 450px;
}

#loader {
  width: 100%;
  display: flex;
  justify-content: center;
}
#loader img {
  width: 30%;
  background-color: pink;
}
.overBground {
  background-color: rgba(34, 34, 34, 0.7);
  width: 100%;
  height: 1070px;
  display: flex;
  justify-content: center;
}
.list {
  display: flex;
  flex-direction: column;
  margin: 0 0 40px 20px;
}
.price {
  display: flex;
  justify-content: space-between;
}

.payment {
  margin: 0 20px 20px 20px;
}
.pay {
  width: 300px;
  background-color: rgb(14, 3, 3);
  color: white;
  border-radius: 30px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  margin: 30px 0 0 55px;
  outline: none;
}
</style>