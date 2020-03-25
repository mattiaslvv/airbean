<template>
  <section class="orderPage">
    <h4>Ordernummer #{{orderInfo.orderNr}}</h4>
    <img src="@/assets/graphics/drone.svg" alt="Airbean Drone" />
    <h1>Din beställning är på väg</h1>
    <h3>{{orderInfo.eta}} minuter</h3>
    <a href="/menu"><button class="cool">OK, cool</button></a>
  </section>
</template>
<script>
export default {
  //TODO: add loading spinner while awaiting response from API call.
  //TODO: add v-if incase orderInfo is empty while visiting this page.
  name: "orderStatus",
  computed: {
    orderInfo() {
      return this.$store.state.orderInfo;
    }
  }
};
</script>
<style lang="scss" scoped>
.orderPage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 100vh;
  background-color: rgb(221, 86, 74);
  h1 {
    color: white;
    font-size: 3rem;
    text-align: center;
    letter-spacing: 0.1rem;
  }
  h3,
  h4 {
    margin: 40px;
    color: white;
  }
  .cool {
    width: 200px;
    background-color: white;
    color: black;
    border-radius: 30px;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    cursor: pointer;
    text-align: center;

    outline: none;
  }
}
</style>