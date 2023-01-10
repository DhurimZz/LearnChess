<template>
  <v-app-bar elevation="4" class="navbarApp" fixed>
    <v-icon></v-icon>
    <v-toolbar-title>LearnChess</v-toolbar-title>
  </v-app-bar>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbarApp{
  background-image: linear-gradient(to right , #000000, #3d3b3a, #7a7673, #bab8b1, #fcfff6);
  color: white;
}
</style>
