<template>
  <div id="app">
    <v-app>
      <Header v-if="showHeader"/>
      <v-main>
        <router-view style="height: 100%;"/>
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
      return currentRouteName !== 'login' && currentRouteName !== 'register' && currentRouteName !== 'dashboard' && currentRouteName !== 'articles' && currentRouteName !== 'article-create' && currentRouteName !== 'article-edit' && currentRouteName !== 'contactus'
    },
    showHeader () {
      const currentRouteName = this.$route.name
      return currentRouteName !== 'dashboard' && currentRouteName !== 'articles' && currentRouteName !== 'article-create' && currentRouteName !== 'article-edit' && currentRouteName !== 'contactus'
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
@media only screen and (max-width: 600px) {

  html {
  font-size: 0.7rem;
}
}

@media only screen and (min-width: 600px) and (max-width: 960px) {

html {
font-size: 1.2rem;
}
}
</style>
