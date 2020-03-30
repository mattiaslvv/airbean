<template>
  <section id="login" v-if="!checkEmail">
    <div id="header">
      <img class="logo" src="@/assets/graphics/airbean-landing.svg" alt="logoshit" />
      <h1>Välkommen till AirBean Familjen!</h1>
      <br />
      <h4>Genom att skapa ett konto nedan kan du spara och se din orderhistorik</h4>
    </div>
    <label for="name">Name:</label>
    <input name="name" type="text" v-model="fullName" />
    <label for="email">E-mail:</label>
    <input name="email" type="text" v-model="userEmail" />
    <label class="switch">
      <input
        class="check"
        type="checkbox"
        id="gdpr"
        name="gdpr"
        value="true"
        v-model="gdprAccepted"
      />
      <span class="slider"></span>
      <p class="ok">GDPR OK!</p>
    </label>
    <section class="buttons">
      <button @click="register" class="blob-btn" :disabled="!gdprAccepted">
        Brew me a cup!
        <span class="blob-btn__inner">
          <span class="blob-btn__blobs">
            <span class="blob-btn__blob"></span>
            <span class="blob-btn__blob"></span>
            <span class="blob-btn__blob"></span>
            <span class="blob-btn__blob"></span>
          </span>
        </span>
      </button>
    </section>
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
      this.$router.go()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
#login {
  height: 80vh;
  width: 65vh;
  box-sizing: border-box;
  background: #ff9999;
  box-shadow:0px 0px 20px 20px rgba($color: #000000, $alpha: 0.5);
  display: flex;
  flex-direction: column;
  position: absolute;
  padding-right: 2rem;
  padding-left: 2rem;
  bottom: 3vh;
  #header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .logo {
      margin-bottom: 2rem;
      height: 100px;
    }
    h1 {
      text-align: center;
      color: #331a00;
    }
  }
  label {
    margin-top: 1rem;
    display: flex;
    align-items: center;
  }
  input {
    border: 1px solid black;
    padding: 1rem;
    border-radius: 5%;
    background: none;
    transition: all 0.5 ease;
    margin: 0, 2rem;
    font-size: 1.5rem;
  }
}
//animation slider
/* The switch - the box around the slider */
.ok {
  margin-left: 4.5rem;
  text-align: center;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #339966;
}

input:focus + .slider {
  box-shadow: 0 0 1px rgb(143, 156, 167);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider {
  border-radius: 34px;
}

.slider:before {
  border-radius: 50%;
}

//animation blobbutton

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
$openSans: "Open Sans", Helvetica, Arial, sans-serif;
body {
  background: #333;
  font-family: $openSans;
}

.buttons {
  margin-top: 50px;
  text-align: center;
  border-radius: 30px;
}

$cyan: #331a00;
$dark: #ffffff;
$borderW: 2px;

.blob-btn {
  $numOfBlobs: 4;
  z-index: 1;
  position: relative;
  padding: 20px 46px;
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  color: $cyan;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  outline: none;
  border: none;
  transition: color 0.5s;
  cursor: pointer;
  border-radius: 30px;

  &:before {
    content: "";
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: $borderW solid $cyan;
    border-radius: 30px;
  }

  &:after {
    content: "";
    z-index: -2;
    position: absolute;
    left: $borderW * 1.5;
    top: $borderW * 1.5;
    width: 100%;
    height: 100%;

    transition: all 0.3s 0.2s;
    border-radius: 30px;
  }

  &:hover {
    color: $dark;
    border-radius: 30px;

    &:after {
      transition: all 0.3s;
      left: 0;
      top: 0;
      border-radius: 30px;
    }
  }

  &__inner {
    z-index: -1;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background: #ffffff;
  }

  // additional container created, because in FF blobs are breaking overflow:hidden of element with svg gooey filter
  &__blobs {
    position: relative;
    display: block;
    height: 100%;
    filter: url("#goo");
  }

  &__blob {
    position: absolute;
    top: $borderW;
    width: 120% / $numOfBlobs;
    height: 100%;
    background: $cyan;
    border-radius: 100%;
    transform: translate3d(0, 150%, 0) scale(1.7);
    transition: transform 0.45s;

    @supports (filter: url("#goo")) {
      transform: translate3d(0, 150%, 0) scale(1.4);
    }

    @for $i from 1 through $numOfBlobs {
      &:nth-child(#{$i}) {
        left: ($i - 1) * (120% / $numOfBlobs);
        transition-delay: ($i - 1) * 0.08s;
      }
    }

    .blob-btn:hover & {
      transform: translateZ(0) scale(1.7);

      @supports (filter: url("#goo")) {
        transform: translateZ(0) scale(1.4);
      }
    }
  }
}
</style>