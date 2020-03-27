<template>
  <section id="login" v-if="userID == ''">
    <label for="name">Name:</label>
    <input name="name" type="text" v-model="fullName" />
    <label for="email">E-mail:</label>
    <input name="email" type="email" v-model="email" />
    <input type="checkbox" id="gdpr" name="gdpr" value="true" v-model="gdprAccepted" />
    <button @click="register"></button>
  </section>
</template>
<script>
export default {
  data () {
    return {
      fullName: "",
      email: "",
      gdprAccepted: false
    }
  },
  computed: {
    userID() {
    return this.$store.getters.checkUserID
    }
  },
  methods: {
    register() {
      this.$store.state
    }
  }
}
</script>
<style lang="sass" scoped>
</style>