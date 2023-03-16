<template>
    <div>
        <div class="section1">
            <div class="cover-image"></div>
            <v-img :src="require('../assets/Photos/chess-3.png')" class="image-chess-gold" />
            <v-container>
                <v-card class="card-text-position card-text-custome">
                    <v-card-item class="card-item-text">
                        <div class="text-1">
                            <h1 class="title1 text-h1 pa-5 my-4 font-weight-bold"> About <span style="color: #ffcd18;">
                                    Us </span></h1>
                            <p></p>
                        </div>
                    </v-card-item>
                </v-card>
            </v-container>
        </div>

        <div class="PageHead d-flex justify-center align-center">
            <div><font-awesome-icon icon="fa-solid fa-chess-knight" class="text-h1" /></div>
            <v-row class="py-16">
                <v-col cols="12">
                    <h2 class="text-h4 text-md-h3 text-center font-weight-black text-capitalize">
                        Who are we?
                    </h2>
                    <h3 class="text-h4 text-uppercase font-weight-thin text-center my-8">
                        "The Chess Web Innovators"
                    </h3>
                </v-col>
            </v-row>
            <div><font-awesome-icon icon="fa-solid fa-chess-knight" class="text-h1" /></div>
        </div>
        <v-container class="pagebody1">
            <v-row>
                <v-col cols="12" md="6">
                    <p>
                        Arbnor and Dhurim, we are two students of computer engineering, sharing a passion for chess and a
                        desire to
                        apply our programming skills to create something innovative and exciting. We decided to start
                        working on a web application that would provide a unique chess experience for players of all levels.
                    </p>
                    <blockquote class="text-h4 pa-5 my-4 font-weight-thin">
                        Personally, I rather look forward to a computer program winning the world chess championship.
                        Humanity needs a lesson in humility.
                    </blockquote>
                    <p>
                        Our vision is to create a platform that would not only offer the traditional gameplay experience
                        but also incorporate advanced AI technology to analyze and provide personalized feedback to users!
                    </p>
                </v-col>
                <v-col cols="12" md="6">
                    <p>
                        We spent countless hours researching and developing the web, incorporating cutting-edge AI
                        technology and personalized feedback to enhance the user's experience.
                        <br>
                        Our web is designed to be user-friendly and intuitive, making it easy for players of all levels to
                        navigate and enjoy the game. Whether you are a beginner or an experienced player, our web has
                        something to offer. We provide a comprehensive library of educational resources to help players
                        improve their knowledge and understanding of the game, as well as personalized feedback to help
                        players identify areas for improvement.
                        <br>
                        We are passionate about promoting the game of chess and encouraging more people to take it up. Our
                        web is designed to be accessible and appealing to a wide audience, with a range of features and
                        gameplay options to suit every player's needs.
                        <br>
                        Thank you for choosing our web for chess. We hope you enjoy the game and the
                        experience we have created. If you have any questions or feedback, please don't hesitate to contact
                        us. We are always happy to hear from our users and improve our web to meet their needs.
                    </p>
                </v-col>
            </v-row>
        </v-container>

        <template>
            <section :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'" class="py-16">
                <v-container fluid class="text-center">
                    <v-row>
                        <v-col>
                            <h2 class="text-h4 text-sm-h3 text-capitalize font-weight-black mb-4">
                                Our Core Team
                            </h2>
                            <p>
                                "Behind the Screen: Meet the Masterminds of our Programming Team"
                            </p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col v-for="(item, i) in ourTeam" :key="`person-${i}`">
                            <v-sheet class="py-12 px-6" outlined shaped>
                                <v-avatar size="240"><v-img :src="require(`../assets/Photos/${item.photo}`)"
                                        alt="John" /></v-avatar>
                                <div class="text-h5 text-uppercase font-weight-black mt-6 mb-2">
                                    {{ item.name }}
                                </div>
                                <div class="text--disabled text-uppercase">
                                    {{ item.position }}
                                </div>
                                <div class="text-h6 font-weight-black mt-8">{{ item.phone }}</div>
                                <div class="subtitle-1 mt-3">{{ item.email }}</div>
                            </v-sheet>
                        </v-col>
                    </v-row>
                </v-container>
            </section>
        </template>

        <v-row no-gutters>
            <v-col cols="12" md="6" align-self="center">
                <v-img :src="require('../assets/Photos/ovis.jpg')" max-height="800" class="div-photo">
                </v-img>
            </v-col>
            <v-col cols="12" md="6" align-self="center" class="div-text">
                <div class="pa-lg-16 pa-md-10 px-4 py-16">
                    <h2 class="text-h3 text-center font-weight-black div-textcolor">Our Vision</h2>
                    <h3 class="text-h5 text-uppercase font-weight-thin text-center my-8 div-textcolor">
                        "A Revolutionary Platform for Learning, Practicing, and Competing"
                    </h3>
                    <p class="div-textcolor">
                        In the future, our chess website will be an all-encompassing platform for players of all levels to
                        learn, practice and compete in the game of chess. The site will be designed with a sleek and modern
                        interface that is user-friendly and intuitive, making it accessible to all chess enthusiasts, from
                        beginners to seasoned professionals.
                        <br>
                        Our vision for the future of our chess website is to create a dynamic, engaging, and
                        all-encompassing platform that offers something for everyone, from beginner to expert. With advanced
                        AI technology, a comprehensive educational library, and a variety of multiplayer modes, we hope to
                        create an online chess experience that is both enjoyable and rewarding for all players.
                    </p>
                </div>
            </v-col>
        </v-row>
        <v-row no-gutters class="flex-row-reverse">
            <v-col cols="12" md="6" align-self="center">
                <v-img :src="require('../assets/Photos/omis.jpg')" max-height="800" class="div-photo">
                </v-img>
            </v-col>
            <v-col cols="12" md="6" align-self="center" class="div-text" max-height="800">
                <div class="pa-lg-16 pa-md-10 px-4 py-16">
                    <h2 class="text-h3 text-center font-weight-black div-textcolor">Our Mission</h2>
                    <h3 class="text-h5 text-uppercase font-weight-thin text-center my-8 div-textcolor">
                        "Our Mission to Build a Comprehensive and Inclusive Online Platform"
                    </h3>
                    <p class="div-textcolor">
                        Our mission is to create an innovative and comprehensive online platform for chess players of all
                        levels, from novice to expert. We aim to provide a one-stop-shop for everything related to the game
                        of chess, from educational resources to competitive gameplay.
                        <br>
                        At the heart of our mission is a commitment to promoting the benefits of chess, which extends far
                        beyond the board. We believe that chess is a powerful tool for enhancing critical thinking,
                        problem-solving, and strategic planning skills. Our platform is designed to help players of all ages
                        and backgrounds discover the joys of chess and develop a lifelong love for the game.
                        <br>
                        In summary, our mission is to create a world-class platform that brings the game of chess to the
                        masses and inspires a new generation of players. We believe that chess is more than just a game – it
                        is a way of life, and we are dedicated to spreading its many benefits far and wide.
                    </p>
                </div>
            </v-col>
        </v-row>

        <template>
            <section id="timeline" class="py-16">
                <v-container>
                    <h2 class="text-h3 text-center font-weight-black mb-8">Our Journey</h2>
                    <template>
                        <v-timeline>
                            <v-timeline-item v-for="(year) in years" v-bind:key="year" :color="year.color" small>
                                <template v-slot:opposite>
                                    <span :class="`headline font-weight-bold ${year.color}--text`"
                                        v-text="year.year"></span>
                                </template>
                                <div class="py-4">
                                    <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
                                        {{ year.title }}
                                    </h2>
                                    <div>
                                        {{ year.description }}
                                    </div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </template>
                </v-container>
            </section>
        </template>

    </div>
</template>

<script>
export default {
  data () {
    return {
      ourTeam: [
        {
          name: 'Arbnor Lama',
          position: 'Full Stack Developer',
          phone: '+383 45 472 620',
          email: 'al55544@hotmail.com',
          photo: '55544.png'
        },
        {
          name: 'Dhurim Zenuni',
          position: 'Full Stack Developer',
          phone: '+383 49 924 052',
          email: 'dz52352@ubt-uni.net',
          photo: '53252.jpg'

        }
      ],
      years: [
        {
          color: 'cyan',
          year: '2020',
          title: 'Started Computer Science and Engineering',
          description: 'When we first started learning computer science, we were introduced to a whole new world of terms and components. We learned about programming languages, algorithms, data structures, and more. It was overwhelming at first, but we were determined to understand everything and become proficient in the field.'
        },
        {
          color: 'green',
          year: '2021',
          title: 'Introduction to Programming',
          description: 'We started with the basics of programming, learning how to write code using a programming language. We learned about variables, data types, loops, and conditional statements. From there, we moved on to more advanced topics, like object-oriented programming, databases, and web development.'
        },
        {
          color: 'pink',
          year: '2022',
          title: 'First Projects',
          description: 'As we progressed through our studies, we began to take on more complex projects and challenges. We worked on everything from web development to mobile apps, learning new programming languages and tools along the way. It wasnt always easy, but we persevered through the obstacles and celebrated every success together.'
        },
        {
          color: 'amber',
          year: '2023',
          title: 'And Continuing...',
          description: "And now, here we are with over 20 completed projects under our belts! From creating games to building useful tools, we've been able to apply our skills and creativity to make some amazing things. It's been an incredible journey!"
        }
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gradient-fill .v-responsive__content {
    background: rgb(0, 0, 0);
    background: linear-gradient(to right,
            rgba(3, 12, 41, 0.7),
            rgba(5, 11, 31, 0.7));
}

.image-chess-gold {
    height: 60vh;
    filter: blur(5px);
}

.section1 {
    max-height: 60vh;
    position: relative;
}

.cover-image {
    position: absolute;
    background-color: rgb(3, 18, 33);
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.3;
}

.PageHead {
    background-color: #ffcd18;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
}

.pagebody1 {
    padding: 5rem;
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

.div-text {
    padding: 2.5rem;
}

.div-textcolor {
    color: black;
}
</style>
