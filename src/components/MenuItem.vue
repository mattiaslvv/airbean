<template>
  <div>
    <h2>{{item.title}}</h2>
    <h2>{{item.price}}</h2>
    <h5>{{item.desc}}</h5>
  </div>
</template>
<script>
export default {
    props:{
        item:Object
    }
}
</script>
<style>
</style>
