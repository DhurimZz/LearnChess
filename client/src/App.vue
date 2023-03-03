<template>
  <div id="app">
    <v-app>
      <Header />
      <v-main>
        <router-view />
      </v-main>
      <!-- <Footer v-if="showFooter" /> -->
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
