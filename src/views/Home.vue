<template>
  <div class="home">
<<<<<<< HEAD
    <img class="landing" src="./../assets/graphics/airbean-landing.svg" alt="logoshit">
=======
    <img src="./../assets/graphics/airbean-landing.svg" alt="logoshit" @click="goToMenu" />
>>>>>>> 69efff89cf93ca2894ccf9df8cbbb5923066ae5a
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  methods: {
    goToMenu() {
      this.$router.push('/menu')
    }
  }
}
</script>
<style lang="scss">
@import "./../assets/scss/main";

.home {
  height: 100vh;
<<<<<<< HEAD
  background-color:$green;
  background-image: url('./../assets/graphics/intro-graphic-left.svg'),url('./../assets/graphics/intro-graphic-right.svg') !important;
  background-position: top left, top right !important;
  background-size:50%,50% !important;
  background-repeat: no-repeat,no-repeat !important;
=======
  background-color: $green;
  background-image: url("./../assets/graphics/intro-graphic-left.svg"),
    url("./../assets/graphics/intro-graphic-right.svg");
  background-position: top left, top right;
  background-size: 100%, 100%;
  background-repeat: no-repeat;
>>>>>>> 69efff89cf93ca2894ccf9df8cbbb5923066ae5a
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
