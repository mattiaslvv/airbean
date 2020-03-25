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
  cursor: pointer;
  img {
    width: 100%;
  }
  &:hover{
      -webkit-animation:wiggle 1.5s linear infinite;
  animation:wiggle 1.5s linear infinite;
  }
}

//animation

@-webkit-keyframes wiggle {
  0% {
    -webkit-transform:rotateZ(0);
    transform:rotateZ(0);
  }
  10% {
    -webkit-transform:rotateZ(-15deg);
    transform:rotateZ(-15deg);
  }
  20% {
    -webkit-transition:rotateZ(10deg);
    transition:rotateZ(10deg);
  }
  25% {
    -webkit-transition:rotateZ(-10deg);
    transition:rotateZ(-10deg);
  }
  30% {
    -webkit-transition:rotateZ(6deg);
    transition:rotateZ(6deg);
  }
  35% {
    -webkit-transform:rotateZ(-4deg);
    transform:rotateZ(-4deg);
  }
  40% {
    transform:rotateZ(7deg);
  }
  50% {
    transform:rotateZ(-6deg);
  }
  60% {
    transform:rotateZ(10deg);
  }
  70% {
    transform:rotateZ(-14deg);
  }
  80% {
    transform:rotateZ(3deg);
  }
  90% {
    transform:rotateZ(-7deg);
  }
  100% {
    -webkit-transition:rotateZ(0);
    transition:rotateZ(0);
  }}
</style>