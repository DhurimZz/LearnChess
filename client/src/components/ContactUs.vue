<template>
    <div>
        <section id="about">
            <v-container fluid>
                <v-row align="center" justify="center">
                    <v-col cols="10">
                        <v-row align="center" justify="center">
                            <v-col cols="12" md="7">
                                <h1 class="font-weight-light display-2">Contacts Us</h1>
                                <h1 class="font-weight-light display-1 mb-3">
                                    Easy to find this location. See you there!
                                </h1>
                                <v-row>
                                    <v-col cols="12" class="d-flex align-center">
                                        <p class="mr-4">
                                            <i class="fa-solid fa-location-dot"></i>
                                        </p>
                                        <p class="text-justify">
                                            Location <br>
                                            Kosovë | Ferizaj | 70000 | Rr.Deshmoret e Kombit
                                        </p>
                                    </v-col>
                                    <v-col cols="12" class="d-flex align-center">
                                        <p class="mr-4">
                                            <i class="fa-solid fa-people-group"></i>
                                        </p>
                                        <p class="text-justify">
                                            Coordinator <br>
                                            prof. Betim Gashi | Betim.Gashi@ubt-uni.net
                                        </p>
                                    </v-col>
                                    <v-col cols="12" class="d-flex align-center">
                                        <p class="mr-4">
                                            <i class="fa-regular fa-copyright"></i>
                                        </p>
                                        <p class="text-justify">
                                            MadeBY: <br>
                                            Arbnor Lama & Dhurim Zenuni
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" md="5" class="d-none d-md-flex">
                                <v-img :src="require('../assets/Photos/chess-board2.png')" class="d-block ml-auto mr-auto"
                                    max-width="400px" />
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </section>
        <section class="pb-8" id="contact">
            <v-container fluid>
                <v-row align="center" justify="center">
                    <v-col cols="10">
                        <v-row justify="center">
                            <v-col cols="12" sm="5">
                                <h1 class="font-weight-light display-1">Contact Us</h1>
                                <h3 id="ContactUsSecondaryText" class="font-weight-light mt-3">
                                    Welcome to our Contact Us page for all things Chess! We're glad you've stopped by and
                                    we're here to answer any questions or concerns you may have about our services, products
                                    or anything related to the game of Chess.
                                    <br>
                                    If you have any questions about our chess products or services, feel free to reach out
                                    to us using the contact form below. Our dedicated customer service team will respond to
                                    your inquiry as soon as possible.
                                    <br>
                                    If you have feedback on our website or suggestions for new products, we'd love to hear
                                    from you. Your feedback is valuable to us as we strive to improve our offerings and
                                    provide the best possible experience for our customers.
                                    <br>
                                    Thank you for choosing us as your Chess resource. We look forward to hearing from you
                                    and helping you enjoy this timeless game to the fullest!
                                </h3>
                            </v-col>
                            <v-col cols="12" sm="7">
                                <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                                    <v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>

                                    <v-text-field v-model="email" :rules="emailRules" label="E-mail"
                                        required></v-text-field>

                                    <v-textarea v-model="textArea" :rules="textAreaRules" label="Message" required />

                                    <v-btn :disabled="!valid" color="primary" :dark="valid" rounded block class="mt-3"
                                        @click="submit">
                                        Send Message
                                    </v-btn>
                                </v-form>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
            <div class="svg-border-waves text-white">
                <v-img src="~@/assets/img/borderWavesBlue.svg" />
            </div>
            <v-snackbar v-model="snackbar.enabled" timeout="3000" right top :color="snackbar.color">
                {{ snackbar.text }}

                <template v-slot:action="{ attrs }">
                    <v-btn text v-bind="attrs" @click="snackbar.enabled = false">
                        Fechar
                    </v-btn>
                </template>
            </v-snackbar>
        </section>
    </div>
</template>
<style scoped>
#contact {
    background-color: #f4f7f5;
    padding: 6rem;
}

#about {
    background-color: #ffcd18;
    padding-top: 8rem;
    padding-bottom: 4rem;
}
#ContactUsSecondaryText{
    font-size: small;
}
.svg-border-waves .v-image {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3rem;
    width: 100%;
    overflow: hidden;
}
</style>
<script>
// import {db} from '@/main'
export default {
  data: () => ({
    icons: ['fa-facebook', 'fa-twitter', 'fa-linkedin', 'fa-instagram'],
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'The text field is required',
      (v) => (v && v.length >= 6) || 'Name must be more than 6 characters'
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'The text field is required',
      (v) => /.+@.+\..+/.test(v) || 'Email must be valid'
    ],
    textArea: '',
    textAreaRules: [
      (v) => !!v || 'The text field is required',
      (v) => (v && v.length >= 10) || 'Minimum 10 character'
    ],
    lazy: false,
    snackbar: {
      enabled: false,
      text: '',
      color: ''
    }
  })
  /* methods: {
      submit() {
        db.collection("contactData").add({
        name: this.name,
        email: this.email,
        message: this.textArea
      }).then(() => {
        this.snackbar.text = "Mensagem enviada com sucesso"
        this.snackbar.color = "success"
        this.snackbar.enabled = true
      }).catch(() => {
        this.snackbar.text = "Erro ao enviar mensagem"
        this.snackbar.color = "danger"
        this.snackbar.enabled = true
      })
    }
  } */
}
</script>
