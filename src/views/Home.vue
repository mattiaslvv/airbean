<template>
  <div class="home">
    <img src="./../assets/graphics/airbean-landing.svg" alt="logoshit" @click="goToMenu" />
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
  background-color: $green;
  background-image: url("./../assets/graphics/intro-graphic-left.svg"),
    url("./../assets/graphics/intro-graphic-right.svg");
  background-position: top left, top right;
  background-size: 100%, 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
