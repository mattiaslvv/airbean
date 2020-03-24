<template>
  <section class="menuItem">
    <aside class="add" @click="addItem">
      <img src="./../assets/graphics/add.svg" alt />
    </aside>
    <div>
      <h2>{{item.title}}</h2>
      <p>{{item.desc}}</p>
    </div>
    <div>
      <h2>{{item.price}}Kr</h2>
    </div>
  </section>
</template>
<script>
export default {
  name: "MenuItem",
  props: {
    item: Object
  },
  methods: {
    addItem() {
      this.$store.dispatch("addThisToCart", this.item.id);
    }
  }
};
</script>
<style lang="scss" scoped>
.menuItem {
  display: grid;
  grid-template-columns: 70px 1fr 90px;
  margin: 40px 0 0 25px;
}

.add {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.add img {
  max-width: 70%;
}

p {
  margin: 0;
}
h2 {
  margin-top: 0;
}
</style>
