<template>
  <v-footer class=" text-center d-flex flex-column footerColor pa-15">
    <div>
      <v-btn v-for="icon in icons" :key="icon" class="mx-5 footer-icon"  icon>
        <v-icon size="2.5rem">
          {{ icon }}
        </v-icon>
      </v-btn>
    </div>
    <div class="pt-0">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </div>
    <v-divider></v-divider>
    <div>
      {{ new Date().getFullYear() }} — <strong>LearnChess</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'
    ]
  })
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footerColor {
  background-color: rgb(3, 18, 33);
  color:white;
  gap:1.5rem;
}
.footer-icon{
  color: white !important;
}
</style>
