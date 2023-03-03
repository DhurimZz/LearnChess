<template>
  <div style="height: 75%; position: relative;">
    <div class="cover-image"></div>
    <v-img :src="require('../assets/Photos/gold-chess.jpg')" class="image-chess-gold"/>
  </div>
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
.image-chess-gold {
  height: 100%;
}
.cover-image {
position: absolute;
background-color: rgb(3, 18, 33);
width: 100%;
height: 100%;
z-index: 1;
opacity: 0.3;
}
</style>
