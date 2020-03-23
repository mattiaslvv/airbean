<template>
  <div class="home">
    <img class="landing" src="./../assets/graphics/airbean-landing.svg" alt="logoshit">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style lang="scss">
@import './../assets/scss/main';

.home{
  height: 100vh;
  background-color:$green;
  background-image: url('./../assets/graphics/intro-graphic-left.svg'),url('./../assets/graphics/intro-graphic-right.svg') !important;
  background-position: top left, top right !important;
  background-size:50%,50% !important;
  background-repeat: no-repeat,no-repeat !important;
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>
