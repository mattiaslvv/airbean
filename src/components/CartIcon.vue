<template>
  <div>
    <section class="cartWrapper">
      <img id="cartIcon" src="@/assets/graphics/bag.svg" alt="Bag/Cart" @click="showCart" />
      <section class="lengthWrapper">
        <span>{{cart.length}}</span>
      </section>
    </section>

    <Cart />
  </div>
</template>

<script>
import Cart from "../components/Cart";
export default {
  name: "CartIcon",
  components: {
    Cart
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  methods: {
    showCart() {
      this.$store.commit("changeCart");
    }
  }
};
</script>
<style lang="scss" scoped>
.lengthWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(236, 114, 70);
  border-radius: 100%;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  right: 0;
}
.lengthWrapper span {
  font-size: 20px;
}
.cartWrapper {
  z-index: 999;
  display: flex;
  background: rgb(22, 22, 22);
  border-radius: 100%;
  margin: 1rem;
  height: 2rem;
  width: 2rem;
  padding: 1rem;
  margin-bottom: 5rem;
  position: absolute;
  right: 0;
  img {
    width: 100%;
  }
}
</style>