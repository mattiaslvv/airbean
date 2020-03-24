<template>
  <div class="cartListItem">
    <div>
      <h2>{{item.title}}</h2>
      <h6 class="price">{{item.price}}kr</h6>
    </div>
    <div class="listIcon">
      <img src="@/assets/graphics/arrow-up.svg" alt="Arrow up" @click="addToCart(item.id)" />
      <h6 class="count">{{countItem}}</h6>
      <img src="@/assets/graphics/arrow-down.svg" alt="Arrow down" @click="removeFromCart(item.id)" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    countItem: Number
  },
  methods: {
    addToCart(id) {
      this.$store.dispatch("addThisToCart", id);
    },
    removeFromCart(id) {
      this.$store.dispatch("removeThisFromCart", id);
    }
  }
};
</script>

<style scoped>
.cartListItem {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
#remove {
  transform: rotate(-180deg);
}
.listIcon {
  margin: 10px 20px 10px 0;
}
.count {
  margin: 0;
  text-align: center;
}
.price {
  margin: 0;
}
</style>