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
                                            prof. Arber Kadriu | arber.kadriu@ubt-uni.net <br>
                                                  Elton Boshnjaku | elton.boshnjaku@ubt-uni.net
                                        </p>
                                    </v-col>
                                    <v-col cols="12" class="d-flex align-center">
                                        <p class="mr-4">
                                            <i class="fa-regular fa-copyright"></i>
                                        </p>
                                        <p class="text-justify">
                                            MadeBY: <br>
                                            Arbnor Lama & Dhurim Zenuni & Argjenta Çaka
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
                                    we're here to answer any questions or concerns you may have about our services,
                                    products or anything related to the game of Chess.
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
                                    <v-text-field v-model="contactus.name" :rules="nameRules" label="Name"
                                        required></v-text-field>

                                    <v-text-field v-model="contactus.email" :rules="emailRules" label="E-mail"
                                        required></v-text-field>

                                    <v-textarea v-model="contactus.message" :rules="messageRules" label="Message" />

                                    <div class="danger-alert" v-if="error">
                                        {{ error }}
                                    </div>

                                    <v-btn color="primary" :dark="valid" rounded block class="mt-3" @click.prevent="create">
                                        Send Message
                                    </v-btn>
                                </v-form>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
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

#ContactUsSecondaryText {
    font-size: small;
}
</style>
<script>
// import {db} from '@/main'
import ContactUsServices from '@/services/ContactUsServices'
export default {
    data () {
        return {
            contactus: {
                name: null,
                email: null,
                message: null
            },
            error: null,
            name: '',
            nameRules: [
                (v) => !!v || 'The name field is required',
                (v) => (v && v.length >= 6) || 'Name must be more than 6 characters'
            ],
            email: '',
            emailRules: [
                (v) => !!v || 'The email field is mandatory',
                (v) => /.+@.+\..+/.test(v) || 'Email must be valid'
            ],
            message: '',
            messageRules: [
                (v) => !!v || 'The text field is required',
                (v) => (v && v.length >= 10) || 'Minimum of 10 characters'
            ]
        }
    },
    methods: {
        async create () {
            this.error = null
            const areAllFieldsFilledIn = Object
                .keys(this.contactus)
                .every(key => !!this.contactus[key])
            if (!areAllFieldsFilledIn) {
                this.error = 'Please fill in all the required fields.'
                return
            }
            try {
                await ContactUsServices.post(this.contactus)
                window.location.reload()
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>
