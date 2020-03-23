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
@import url('./../assets/scss/colors.scss');

.home {
  height: 100vh;
  background-color: #339966;
  background-image: url("./../assets/graphics/intro-graphic-left.svg"),
    url("./../assets/graphics/intro-graphic-right.svg");
  background-position: top left, top right;
  background-size: 50%, 50%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
