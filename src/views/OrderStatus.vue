<template>
  <section>
    <h4>Ordernummer #{{orderInfo.orderNr}}</h4>
    <img src="@/assets/graphics/drone.svg" alt="Airbean Drone" />
    <h1>Din beställning är påväg</h1>
    <h3>{{orderInfo.eta}} minuter</h3>
    <button>OK, cool</button>
  </section>
</template>
<script>
export default {
  //TODO: add loading spinner while awaiting response from API call.
  //TODO: add v-if incase orderInfo is empty while visiting this page.
  name: "orderStatus",
  computed: {
    orderInfo() {
      return this.$store.state.orderInfo
    }
  }
}
</script>
<style lang="sass" scoped>
</style>