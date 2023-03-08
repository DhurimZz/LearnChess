<template>
  <div>
    <v-container class="banner-wrapper">
      <div class="d-flex flex-column align-center banner2">
        <div class="banner2-title">
          <h1 class="banner-title">Articles</h1>
        </div>
        <div class="banner2-subtitle">
          <p class="banner-description" style="margin-bottom: 0;">To keep up with the constantly rising standards of play
          </p>
        </div>
        <div class="d-flex banner2-card-wrapper justify-center">
          <div v-for="article in articles" :key="article.id">
            <v-card class="d-flex flex-column" max-width="350" >
              <div><v-img :src="article.image" /></div>
              <div class="d-flex flex-column align-center pt-5 pb-5 pr-10 pl-10 card-text">
                <h2 class="text-center">{{article.title}}</h2>
                <p class="text-center card-description">{{article.description}}</p>
                <v-btn variant="flat" class="mt-7 banner-btn btn2" color="#ffcd18" :href="article.url"><b>Learn More</b></v-btn>
              </div>
            </v-card>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import ArticlesService from '@/services/ArticlesService'
export default {
  data () {
    return {
      articles: null
    }
  },
  async mounted () {
    this.articles = (await ArticlesService.index()).data
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner-wrapper {
  padding: 10rem 0;
}

.banner {
  width: 50%;
}

.banner-title {
  font-family: sans-serif;
  color: #000000;
  font-size: 2.5rem;
  line-height: 1.1;
}

.banner-description {
  font-size: 1.5rem;
  padding-top: 0.8rem;
}

.banner-btn {
  height: 3rem !important;
}

.btn2 {
  margin-top: 0 !important;
}

.banner2-card-wrapper {
  width: 100%;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem 0;
}

.card-description {
  font-size: 0.9rem;
}

.card-text {
  gap: 0.5rem;
}</style>
