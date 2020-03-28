<template>
  <div id="wrapper" v-if="showMenu">
    <section id="nav">
      <nav class="burgerWrapper">
        <img @click="closeMenu" src="@/assets/graphics/close.svg" alt="Close" />
      </nav>
      <h1 class="router btn" @click="goTo('/menu')">Meny</h1>
      <br />
      <div class="line"></div>
      <h1 class="router btn" @click="goTo('/about')">Vårt kaffe</h1>
      <br />
      <div class="line"></div>
      <h1 class="router btn" @click="goTo('/orderstatus')">Order status</h1>
      <br />
      <div class="line"></div>
      <h1 class="router btn" @click="goTo('/profile/' + userID)">Min Profil</h1>
    </section>
  </div>
</template>

<script>
export default {
  name: "HamburgerMenu",
  methods: {
    closeMenu() {
      this.$store.commit("changeMenu");
    }
  },
  computed: {
    showMenu() {
      return this.$store.state.showMenu;
    },
    userID(){
      console.log(this.$store.getters.checkUserID)
      if (this.$store.getters.checkUserID == null) {
        return "login"
      } else {
      return this.$store.getters.checkUserID
      }
    }
  },
  methods: {
    closeMenu() {
      this.$store.commit("changeMenu");
    },
    goTo(path) {
      this.$router
        .push(path)
        .then(this.closeMenu())
        .catch(err => {});
    }
  }
};
</script>
<style lang="scss" scoped>
#wrapper {
  width: 100%;
}
.burgerWrapper {
  z-index: 9999;
  display: flex;
  background: white;
  border-radius: 100%;
  height: 2rem;
  width: 2rem;
  padding: 1rem;
  margin: 1rem 0 5rem 0;
  position: absolute;
  top: 0;
  left: 5%;
  cursor: pointer;
  img {
    width: 100%;
  }
  &:hover {
    -webkit-animation: wiggle 1.5s linear infinite;
    animation: wiggle 1.5s linear infinite;
  }
}
#nav {
  margin: auto;
  position: fixed;
  width: 500px;
  height: 100vh;
  background: #331a00;
  top: 0;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .router {
    color: white;
    text-decoration: none;
    font-size: 3rem;
    margin: 3rem;
    cursor: pointer;
  }

  .line {
    width: 100px;
    border-bottom: 2px solid white;
    margin: auto;
  }
}

.btn:hover {
  -webkit-animation: wiggle 1.5s linear infinite;
  animation: wiggle 1.5s linear infinite;
}

@-webkit-keyframes wiggle {
  0% {
    -webkit-transform: rotateZ(0);
    transform: rotateZ(0);
  }
  10% {
    -webkit-transform: rotateZ(-15deg);
    transform: rotateZ(-15deg);
  }
  20% {
    -webkit-transition: rotateZ(10deg);
    transition: rotateZ(10deg);
  }
  25% {
    -webkit-transition: rotateZ(-10deg);
    transition: rotateZ(-10deg);
  }
  30% {
    -webkit-transition: rotateZ(6deg);
    transition: rotateZ(6deg);
  }
  35% {
    -webkit-transform: rotateZ(-4deg);
    transform: rotateZ(-4deg);
  }
  40% {
    transform: rotateZ(7deg);
  }
  50% {
    transform: rotateZ(-6deg);
  }
  60% {
    transform: rotateZ(10deg);
  }
  70% {
    transform: rotateZ(-14deg);
  }
  80% {
    transform: rotateZ(3deg);
  }
  90% {
    transform: rotateZ(-7deg);
  }
  100% {
    -webkit-transition: rotateZ(0);
    transition: rotateZ(0);
  }
}
</style>