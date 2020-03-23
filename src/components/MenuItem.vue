<template>
<section class="menu">
  <aside class="add">
    <button>
      <img src="./../assets/graphics/add.svg" alt="">
    </button>
  </aside>
  <div>
    <h2>{{item.title}}</h2>
    <h2>{{item.price}}</h2>
    <p>{{item.desc}}</p>
  </div>
  </section>
</template>
<script>
export default {
  name:"MenuItem",
    props:{
        item:Object
    },
    methods:{
      addItem(){
        this.$store.dispatch('addItem', this.item)
      }
    }
}
</script>
<style lang="scss">
menu{
  display: grid;
  grid-template-columns: 40px 1fr 90px;
  grid-template-rows: 1.5rem 1.5rem;
  margin: 1rem;

}
</style>
