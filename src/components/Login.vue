<template>
  <section id="login" v-if="!checkEmail">
    <label for="name">Name:</label>
    <input name="name" type="text" v-model="fullName" />
    <label for="email">E-mail:</label>
    <input name="email" type="text" v-model="userEmail" />
    <input type="checkbox" id="gdpr" name="gdpr" value="true" v-model="gdprAccepted" />
    <button @click="register"></button>
  </section>
</template>
<script>
export default {
  data () {
    return {
      fullName: "",
      userEmail: "",
      gdprAccepted: false
    }
  },
  computed: {
    userID() {
    return this.$store.state.userID
    },
    checkEmail() {
      return this.$store.getters.getUserEmail
    }
  },
  methods: {
    async register() {      
      const data = {
        username: this.fullName,
        email: this.userEmail
      }
      if (this.userID == 'login') {
      await this.$store.dispatch('getNewUserID', data)
      this.$router.push('/profile/' + this.userID)
      } else if(this.userID != 'login') {
      await this.$store.dispatch('updateUserInfo', data)
      }
    }
  }
}
</script>
<style lang="sass" scoped>
</style>