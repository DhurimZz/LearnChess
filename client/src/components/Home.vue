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
                <br>Cum sociis natoque penatibus et magnis dis parturient montes.</p>
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
        <div class="pr-10 banner">
          <div>
            <div>
              <h3 class="banner-subtitle">Chess Education</h3>
              <p style="font-size: 1.1rem;">Popular education for your child <br>and you</p>
              <p class="banner-text" style="width: 85%;">Teachers and parents around the world
                know that chess is not a simple game. It is a
                great learning tool that will help build
                your child’s executive function skills.</p>
              <ul type="none" class="banner-text">
                <li><font-awesome-icon icon="fa-solid fa-chess-pawn" color="#ffcd18" class="pawn-icon"/> Build self-regulation and motivation</li>
                <li class="pt-2"><font-awesome-icon icon="fa-solid fa-chess-pawn" color="#ffcd18" class="pawn-icon"/> Help with concentration issues</li>
                <li class="pt-2"><font-awesome-icon icon="fa-solid fa-chess-pawn" color="#ffcd18" class="pawn-icon"/> Learn to plan, organize, and prioritize</li>
                <li class="pt-2"><font-awesome-icon icon="fa-solid fa-chess-pawn" color="#ffcd18" class="pawn-icon"/> Regulate emotions</li>
                <li class="pt-2"><font-awesome-icon icon="fa-solid fa-chess-pawn" color="#ffcd18" class="pawn-icon"/> Learn to pay attention to detail</li>
              </ul>
              <v-btn variant="flat" class="mt-7 banner-btn" color="#ffcd18"><b>Learn More</b></v-btn>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="d-flex">
              <div>
                <font-awesome-icon icon="fa-solid fa-people-group" class="banner-icon" />
                <h3 class="banner-subtitle1">Various Age Groups</h3>
                <p class="banner-text banner-subtitle1-text">We provide chess classes to both children from 5 years old and adults.</p>
              </div>
              <div>
                <font-awesome-icon icon="fa-solid fa-chess" class="banner-icon" />
                <h3 class="banner-subtitle1">Top Chess Variants</h3>
                <p class="banner-text banner-subtitle1-text">We don’t only teach classical chess but also other top variants of this game.</p>
              </div>
            </div>
            <div class="d-flex" style="padding-top: 4rem;">
              <div>
                <font-awesome-icon icon="fa-solid fa-chess-knight" class="banner-icon" />
                <h3 class="banner-subtitle1">Best Chess Players</h3>
                <p class="banner-text banner-subtitle1-text">Our alumni have won many prestigious chess tournaments in the country.</p>
              </div>
              <div>
                <font-awesome-icon icon="fa-solid fa-chess-board" class="banner-icon" />
                <h3 class="banner-subtitle1">Best Chess Openings</h3>
                <p class="banner-text banner-subtitle1-text">Our students know all the best chess openings and how to use them.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-container>
    <div class="d-flex flex-column banner1">
      <div class="d-flex banner1-photo-wrapper">
        <div class="banner1-photo"><v-img :src="require('../assets/Photos/chess-board.jpg')" class="image-chess-gold" /></div>
        <div class="banner1-photo"><v-img :src="require('../assets/Photos/boys-playing.jpg')" class="image-chess-gold" /></div>
        <div class="banner1-photo"><v-img :src="require('../assets/Photos/cat-chess.jpg')" class="image-chess-gold" /></div>
        <div class="banner1-photo"><v-img :src="require('../assets/Photos/girls-playing.jpg')" class="image-chess-gold" /></div>
      </div>
      <div class="banner1-line d-flex justify-center align-center">
        <div><font-awesome-icon icon="fa-solid fa-chess-knight" class="text-h1"/></div>
        <div class="d-flex flex-column pr-15 pl-15">
        <h1 class="text-h3">PLAY & LEARN</h1>
        <p class="text-h5 ">Take a look into our day to day life here at Chess School </p>
        </div>
        <div><v-btn class="banner1-btn"><b>LEARN MORE</b></v-btn></div>
      </div>
    </div>
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
  height: 3rem !important;
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
.banner-title {
  font-family:sans-serif;
  color: #000000;
  font-size: 2.5rem;
  line-height: 1.1;
}

.banner-description {
  font-size: 1.5rem;
  padding-top: 0.8rem;
}

.banner-subtitle {
  font-family:sans-serif;
  color: #000000;
  font-size: 1.8rem;
}

.banner-subtitle1 {
  font-family:sans-serif;
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
  height: 40rem;
}

.banner1-photo-wrapper {
  height: 40%;
}
.banner1-photo {
  width: 25%;
}
.banner1-line{
  height: 27%;
  background-color:#ffcd18 ;
}

.banner1-btn {
  height: 3rem !important;
  background-color: transparent !important;
  border: 2px solid black;
  transition: 0.5s;
}

.banner1-btn:hover {
  background-color: #000000 !important;
  color: white;
}
</style>
