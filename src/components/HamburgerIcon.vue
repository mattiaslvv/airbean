<template>
  <section id="burgerWrapper">
    <img id="burger" src="@/assets/graphics/navicon.svg" alt="Hamburgermenu" />
  </section>
</template>

<script>
export default {
  name: "HamburgerIcon"
}
</script>

<style scoped>
#burgerWrapper {
  display: flex;
  background-color: white;
  border-radius: 100%;
  height: 40px;
  width: 40px;
}
#burger {
  align-self: center;
}
</style>