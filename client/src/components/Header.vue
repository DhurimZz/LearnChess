<template>
  <v-app-bar class="navbarApp" style=" background-color: rgb(3, 18, 33, 0.8);" fixed>
    <v-container class="d-flex">
    <v-toolbar-title><font-awesome-icon icon="fa-solid fa-chess-rook" class="home-icon" /><router-link class="home"
        tag="span" :to="{
          name: 'home'
        }">
        LearnChess
      </router-link>
      <font-awesome-icon icon="fa-solid fa-chess-rook" class="home-icon" /> </v-toolbar-title>
    <v-btn class="text-only " variant="text" style="margin-left: 2rem;">
      Home
    </v-btn>
    <v-btn class="text-only " variant="text">
      Services
    </v-btn>
    <v-btn class="text-only " variant="text">
      About Us
    </v-btn>
    <v-btn class="text-only " variant="text">
      Contact Us
    </v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn class="text-only " v-if="!$store.state.isUserLoggedIn" :to="{
        name: 'login'
      }" variant="text">
        Login
      </v-btn>

      <v-btn class="text-only" v-if="!$store.state.isUserLoggedIn" :to="{
        name: 'register'
      }">
        Sign Up
      </v-btn>

      <v-btn class="text-only" v-if="$store.state.isUserLoggedIn" @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-container>
  </v-app-bar>
</template>
<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbarApp {
  color: white;
  height: auto !important;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  /* padding-left: 3rem;
  padding-right: 3rem; */

}

.home {
  cursor: pointer;
  font-size: 1.5rem;
}

.home-icon {
  font-size: 1.5rem;
  color: #ffcd18;
}

.text-only {
  background-color: transparent !important;
  color: white;
  border: none !important;
  box-shadow: none !important;
  text-align: center;
  padding: 0;
}

.text-only:hover {
  color: #ffcd18;
}

</style>
