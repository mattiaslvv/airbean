<template>
  <div>
  <h2>{{item.title}}</h2>
  <h6>{{item.price}}</h6>
  <h6>{{countItem}}</h6>
  </div>
</template>

<script>
export default {
    props:{
        item:Object,
        countItem:Number
    }

}
</script>

<style>

</style>