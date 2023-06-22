<template>
  <div>
    <div class="hero">
      <div class="hero__title">Hello World</div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
    </div>
    <v-container class="cont1 d-flex justify-center">
      <v-flex class="wrapper" xs10 sm8 md6 lg5>
        <form>
          <v-row class="cont2 d-flex flex-column">
            <v-toolbar color="transparent"
              ><v-toolbar-title class="custom-color"
                >Login</v-toolbar-title
              ></v-toolbar
            >
            <v-col
              ><v-text-field
                type="email"
                name="email"
                v-model="email"
                label="Email"
                placeholder="filanfisteku@gmail.com"
                dark
              ></v-text-field
            ></v-col>
            <v-col
              ><v-text-field
                type="password"
                name="password"
                v-model="password"
                label="Password"
                dark
              ></v-text-field
            ></v-col>
            <span
              class="error"
              v-html="error"
              v-if="!$store.state.isUserLoggedIn"
            ></span>
            <v-col class="d-flex"
              ><v-btn style="background-color: #ffcd18;" @click="login" tile
                >login</v-btn
              ></v-col
            >
          </v-row>
        </form>
      </v-flex>
    </v-container>
  </div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        if (response.data.user.role === 'admin') {
          this.$router.push({ name: 'dashboard' })
        } else {
          this.$router.push({ name: 'home' })
        }
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: white;
}

.image-Backgraund {
  position: relative;
  min-height: 100%;
  min-width: 1024px;
  position: fixed;
}

.cont1 {
  position: absolute;
  top: 25%;
  right: 0;
  left: 0;
}

.cont2 {
  background-color: rgb(3, 18, 33, 0.5);
  padding: 2rem;
  border-radius: 2%;
}

.custom-color {
  color: hsla(0, 0%, 100%);
}

@import url("https://fonts.googleapis.com/css?family=Montserrat:700");
.hero {
  background-color: #0040c1;
  position: relative;
  height: 100vh;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;
}

.hero__title {
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  z-index: 1;
}

.cube {
  position: absolute;
  top: 80vh;
  left: 45vw;
  width: 10px;
  height: 10px;
  border: solid 1px #003298;
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  -webkit-animation: cube 12s ease-in forwards infinite;
  animation: cube 12s ease-in forwards infinite;
}
.cube:nth-child(2n) {
  border-color: #0051f4;
}
.cube:nth-child(2) {
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
  left: 25vw;
  top: 40vh;
}
.cube:nth-child(3) {
  -webkit-animation-delay: 4s;
  animation-delay: 4s;
  left: 75vw;
  top: 50vh;
}
.cube:nth-child(4) {
  -webkit-animation-delay: 6s;
  animation-delay: 6s;
  left: 90vw;
  top: 10vh;
}
.cube:nth-child(5) {
  -webkit-animation-delay: 8s;
  animation-delay: 8s;
  left: 10vw;
  top: 85vh;
}
.cube:nth-child(6) {
  -webkit-animation-delay: 10s;
  animation-delay: 10s;
  left: 50vw;
  top: 10vh;
}

@-webkit-keyframes cube {
  from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
}

@keyframes cube {
  from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
}
</style>
