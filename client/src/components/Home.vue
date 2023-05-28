<template>
  <div>
    <div style="height: 100vh; position: relative;">
      <div class="cover-image"></div>
      <v-img :src="require('../assets/Photos/gold-chess.jpg')" class="image-chess-gold" />
      <v-container>
        <v-card class="d-flex  card-text-position card-text-custome">
          <v-card-item class="card-item-text">
            <div>
              <h6 class="text-left"><em>Welcome to LearnChess</em></h6>
            </div>
            <div>
              <h1 class="text-left">Make You Play Chess <br>Like a <span style="color: #ffcd18;"> Grandmaster</span></h1>
              <p></p>
            </div>
            <div>
              <p class="text-left" style="font-size: 1rem;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                <br>Cum sociis natoque penatibus et magnis dis parturient montes.
              </p>
            </div>
            <div class="text-left">
              <v-btn tile class="card-item-button" color="#ffcd18"><b>Join Now</b></v-btn>
            </div>
          </v-card-item>
        </v-card>
      </v-container>
    </div>
    <v-container class="banner-wrapper">
      <div>
        <div class="banner-title-wrapper">
          <h1 class="banner-title text-center">OUR SERVICES</h1>
          <p class="banner-description text-center">We make your child happy day after day</p>
        </div>
      </div>
      <div class="d-flex pt-5">
        <div class=" banner">
          <div>
            <div>
              <h3 class="banner-subtitle">Chess Education</h3>
              <p style="font-size: 1.1rem;">Popular education for your child <br>and you</p>
              <p class="banner-text" style="width: 85%;">Teachers and parents around the world
                know that chess is not a simple game. It is a
                great learning tool that will help build
                your child’s executive function skills.</p>
              <ul type="none" class="banner-text">
                <li><font-awesome-icon icon="fa-solid fa-chess-pawn" color="#ffcd18" class="pawn-icon" /> Build
                  self-regulation and motivation</li>
                <li class="pt-2"><font-awesome-icon icon="fa-solid fa-chess-pawn" color="#ffcd18" class="pawn-icon" />
                  Help with concentration issues</li>
                <li class="pt-2"><font-awesome-icon icon="fa-solid fa-chess-pawn" color="#ffcd18" class="pawn-icon" />
                  Learn to plan, organize, and prioritize</li>
                <li class="pt-2"><font-awesome-icon icon="fa-solid fa-chess-pawn" color="#ffcd18" class="pawn-icon" />
                  Regulate emotions</li>
                <li class="pt-2"><font-awesome-icon icon="fa-solid fa-chess-pawn" color="#ffcd18" class="pawn-icon" />
                  Learn to pay attention to detail</li>
              </ul>
              <v-btn variant="flat" class="mt-7 banner-btn" color="#ffcd18"><b>Learn More</b></v-btn>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="d-flex justify-space-between">
              <div style="width: 45%">
                <font-awesome-icon icon="fa-solid fa-people-group" class="banner-icon" />
                <h3 class="banner-subtitle1">Various Age Groups</h3>
                <p class="banner-text">We provide chess classes to both children from 5 years old
                  and adults.</p>
              </div>
              <div style="width: 45%">
                <font-awesome-icon icon="fa-solid fa-chess" class="banner-icon" />
                <h3 class="banner-subtitle1">Top Chess Variants</h3>
                <p class="banner-text">We don’t only teach classical chess but also other top
                  variants of this game.</p>
              </div>
            </div>
            <div class="d-flex justify-space-between" style="padding-top: 4rem;">
              <div style="width: 45%">
                <font-awesome-icon icon="fa-solid fa-chess-knight" class="banner-icon" />
                <h3 class="banner-subtitle1">Best Chess Players</h3>
                <p class="banner-text">Our alumni have won many prestigious chess tournaments in the
                  country.</p>
              </div>
              <div style="width: 45%">
                <font-awesome-icon icon="fa-solid fa-chess-board" class="banner-icon" />
                <h3 class="banner-subtitle1">Best Chess Openings</h3>
                <p class="banner-text">Our students know all the best chess openings and how to use
                  them.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-container>
    <div  class="d-flex flex-column banner1">
      <div class="d-md-flex banner1-photo-wrapper">
        <div class="banner1-photo"><v-img :src="require('../assets/Photos/chess-board.jpg')" class="image-chess-gold" />
        </div>
        <div class="banner1-photo"><v-img :src="require('../assets/Photos/boys-playing.jpg')" class="image-chess-gold" />
        </div>
        <div class="banner1-photo"><v-img :src="require('../assets/Photos/cat-chess.jpg')" class="image-chess-gold" />
        </div>
        <div class="banner1-photo"><v-img :src="require('../assets/Photos/girls-playing.jpg')" class="image-chess-gold" />
        </div>
      </div>
      <div class="banner1-line d-flex flex-md-row flex-column align-center justify-md-center">
        <div><font-awesome-icon icon="fa-solid fa-chess-knight" class="text-h1" /></div>
        <div class="d-flex flex-column pr-15 pl-15 text-center text-md-start">
          <h1 class="text-h3">PLAY & LEARN</h1>
          <p class="text-h5 ">Take a look into our day to day life here at Chess School </p>
        </div>
        <div><v-btn class="banner1-btn"><b>LEARN MORE</b></v-btn></div>
      </div>
    </div>
    <v-container class="banner-wrapper">
      <div class="d-flex flex-column align-center banner2">
        <div class="banner2-title">
          <h1 class="banner-title">New Articles</h1>
        </div>
        <div class="banner2-subtitle">
          <p class="banner-description" style="margin-bottom: 0;">To keep up with the constantly rising standards of play</p>
        </div>
        <div class="d-flex banner2-card-wrapper justify-center">
          <div v-for="article in articles" :key="article.id">
            <v-card class="d-flex flex-column justify-space-between card" max-width="350" >
             <div class="h-half"><v-img :src="article.image" class="h-full" /></div>
             <div class="h-half">
              <div class="d-flex flex-column align-center pt-5 pb-5 pr-10 pl-10 card-text h-full justify-space-around">
              <h2 class="text-center">{{article.title}}</h2>
              <p class="text-center card-description">{{article.description}}</p>
              <v-btn variant="flat" class="mt-7 banner-btn btn2" color="#ffcd18" :href="article.url"><b>Learn More</b></v-btn>
            </div>
          </div>
            </v-card>
          </div>
        </div>
        <div><v-btn class="banner1-btn" :to="{name: 'articlePage'}"><b>View Other Articles</b></v-btn></div>
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
    this.articles = (await ArticlesService.getLastArticles()).data
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

.card-text-position {
  position: absolute;
  top: 50%;
  z-index: 1;
}

.card-text-custome {
  background: transparent;
  box-shadow: none !important;
  color: white;
}

.card-item-text {
  /* width: 30rem; */
  font-size: 1.5rem;
}
.card-item-button {
  height: 2.8rem !important;
}

.banner-wrapper {
  padding: 10rem 0;
}

.banner {
  width: 50%;
}

.banner-icon {
  font-size: 3rem;
}

.banner-btn {
  height: 3rem !important;
}

.btn2 {
  margin-top: 0 !important;
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

.banner-subtitle {
  font-family: sans-serif;
  color: #000000;
  font-size: 1.8rem;
}

.banner-subtitle1 {
  font-family: sans-serif;
  color: #000000;
  font-size: 1.2rem;
  padding: 0.5rem 0;
}

.pawn-icon {
  font-size: 0.8rem;
  margin-right: 0.5rem;
}

.banner-text {
  font-size: 0.9rem;
}

.banner-subtitle1-text {
  width: 80%;
}

.banner1 {
  width: 100%;
}

.banner1-photo {
  width: 100%;
}

.banner1-line {
  padding: 2.5rem 0;
  background-color: #ffcd18;
  gap: 1.5rem;
}

.banner1-btn {
  height: 3rem !important;
  background-color: transparent !important;
  border: 2px solid black;
  transition: 0.3s;
}

.banner1-btn:hover {
  background-color: #000000 !important;
  color: white;
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
}
.card {
   font-size: 0.8rem; height: 30rem;
}
.h-half {
  height: 50%;
}
.h-full {
  height: 100%;
}
@media only screen and (min-width: 960px) {
.banner1-photo-wrapper {
  height: 15rem;
}

.banner1-photo {
  width: 25%;
}
}
</style>
