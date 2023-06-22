<template>
   <div>
    <v-carousel hide-delimiters>
      <v-carousel-item>
      <v-img :src="require('../assets/img/wooden-chess-set1.jpg')" />
        <v-row
          class="h-full-height"
          align="center"
          justify="center"
        >
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"><strong>Upto 60% + Extra 10%</strong></div><br/>
        </v-row>
      </v-carousel-item>
      <v-carousel-item>
        <v-img :src="require('../assets/img/chess-board-set2.jpg')" />
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"><strong>Upto 60% + Extra 10%</strong></div><br/>
        </v-row>
      </v-carousel-item>
      <v-carousel-item>
      <v-img :src="require('../assets/img/chess-board-set3.jpg')" />
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"><strong>Upto 60% + Extra 10%</strong></div><br/>
        </v-row>
      </v-carousel-item>
      <v-carousel-item>
      <v-img :src="require('../assets/img/chess-figures-set4.jpg')" />
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"><strong>Upto 60% + Extra 10%</strong></div><br/>
        </v-row>
      </v-carousel-item>

    </v-carousel>
    <div class="pl-4 pr-4 row">
      <div
       class="col-md-6 col-sm-6 col-xs-12"
      >
        <v-card>
          <v-img
            :src="require('../assets/img/chess-board-set2.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="400px"
          >
           <h1 class="text-center font-size">Chess Board</h1>
          </v-img>
        </v-card>
      </div>
      <div
        class="col-md-6 col-sm-6 col-xs-12"
      >
        <v-card>
          <v-img
            :src="require('../assets/img/chess-board-set3.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="400px"
          >
            <h1 class="text-center font-size">Chess Figure</h1>
          </v-img>
        </v-card>
      </div>
    </div>
    <div class="pl-4 pr-4 row">
      <div
       class="col-md-4 col-sm-4 col-xs-12"
       v-for="video in videos" :key="video.id"
      >
        <v-card outlined>
          <v-img
            :src="video.video"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
            <h1 class="text-center font-size">{{video.title}}</h1>
            <div class="text-center mt-2">
              <v-btn class="white--text caption"  :href="video.url" text>WATCH NOW <v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
      </div>
    </div>
    <v-container>
      <v-row no-gutters>
        <v-col :cols="12">
          <v-card-text
            class=""
            tile
            outlined
          >
            <v-card-title class="subheading ">Games of the Day</v-card-title>
            <v-divider></v-divider>
            <div class="row">
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center d-flex karinpidh">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                  v-for="game in games" :key="game.id"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="game.thumbnail"
                  >
                    <v-card-title>{{game.title}}</v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div></div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn
                      class="ma-2"
                      outlined
                      color="info"
                      :href="game.url"
                    >
                      Explore
                    </v-btn>
                  </div>
                </v-card>
                </v-hover>
              </div>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import GamesService from '@/services/GamesService'
import VideosService from '@/services/VideosService'
export default {
  data () {
    return {
      games: null,
      videos: null
    }
  },
  async mounted () {
    this.games = (await GamesService.index()).data
    this.videos = (await VideosService.index()).data
  }
}

</script>

<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
  }

  .karinpidh {
    gap: 3rem
  }
</style>
