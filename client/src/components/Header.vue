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
      <v-toolbar-items class="hidden-sm-and-down ml-4">
        <v-btn class="text-only" variant="text" v-for="item in items" :key="item.id" :to="item.path">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn class="text-only " v-if="!$store.state.isUserLoggedIn" @click="redirect" variant="text">
          Login
        </v-btn>

        <v-btn class="text-only " v-if="!$store.state.isUserLoggedIn" :to="{
          name: 'register'
        }">
          Sign Up
        </v-btn>

        <v-btn class="text-only " v-if="$store.state.isUserLoggedIn" @click="logout">
          Log Out
        </v-btn>
      </v-toolbar-items>
      <v-menu  transition="slide-x-transition" bottom right :offset-y="offset" class="hidden-md-and-up" color="dark">
        <template v-slot:activator="{ on, props }" class="hidden-md-and-up">
          <v-app-bar-nav-icon color="white" v-bind="props" v-on="on" class="hidden-md-and-up">
          </v-app-bar-nav-icon>
        </template>
        <v-list style=" background-color: rgb(3, 18, 33, 0.8);">
          <v-list-item v-for="item in items" :key="item.id">
            <v-btn class="text-only" variant="text">{{ item.title }}</v-btn>
          </v-list-item>
          <hr>
          <v-list-item>
            <v-btn class="text-only " v-if="!$store.state.isUserLoggedIn" :to="{
          name: 'login'
        }" variant="text">
          Login
        </v-btn>
        <div style="color: white;">/</div>
        <v-btn class="text-only " v-if="!$store.state.isUserLoggedIn" :to="{
          name: 'register'
        }">
          Sign Up
        </v-btn>

        <v-btn class="text-only " v-if="$store.state.isUserLoggedIn" @click="logout">
          Log Out
        </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    items: [
    { id: 1, title: 'Articles', path: '/articlePage' },
    { id: 2, title: 'About Us', path: '/aboutus' },
    { id: 3, title: 'Contact Us', path: '/contactus' }
    ]
  }),
  
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    },
    redirect () {
      window.location.href = 'https://localhost:44374/Identity/Account/Login'
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
