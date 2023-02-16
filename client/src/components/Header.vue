<template>
  <v-app-bar elevation="4" class="navbarApp" fixed>
    <v-toolbar-title><font-awesome-icon icon="fa-solid fa-chess-rook" /><router-link class="home" tag="span" :to="{
      name: 'HelloWorld'
    }">
        LearnChess
      </router-link>
      <font-awesome-icon icon="fa-solid fa-chess-rook" /> </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn class="text-only " v-if="!$store.state.isUserLoggedIn" :to="{
        name: 'login'
      }" variant="text" >
        Login
      </v-btn>

      <v-btn class="text-only" v-if="!$store.state.isUserLoggedIn" :to="{
        name: 'register'
      }">
        Sign Up
      </v-btn>

      <v-btn class="text-only"  v-if="$store.state.isUserLoggedIn"  @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
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
  background-image: linear-gradient(to right, #000000, #3d3b3a, #7a7673, #bab8b1, #fcfff6);
  color:white;

}
.home {
  cursor: pointer;
}
.text-only {
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
  text-align: center;
  padding: 0;
}
</style>
