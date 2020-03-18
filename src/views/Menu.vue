<template>
  <section>
    <ul>
      <li v-for="item in menuItems" v-bind:key="item.id">{{item}}</li>
    </ul>
  </section>
</template>
<script>
export default {    
  computed: {
      menuItems() {
      return this.$store.state.menuItems
      }
    },
    created() { {
      this.$store.dispatch('fetchMenuItems')
    }
    }
}
</script>