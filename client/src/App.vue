<template>
  <div id="app">
    <v-app>
      <Header />
      <v-main>
        <router-view />
      </v-main>
      <Footer v-if="showFooter" />
    </v-app>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed: {
    showFooter () {
      const currentRouteName = this.$route.name
      return currentRouteName !== 'login' && currentRouteName !== 'register'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap');
html, body {
  font-family: 'Montserrat', sans-serif;
}

#app {
  font-family: 'Montserrat', sans-serif;
}
</style>
