<template>
  <div>
    <v-img :src="require('../assets/Photos/Chess-Background.jpg')" class="image-Backgraund" />
    <v-container class="cont1 d-flex justify-center">
      <v-flex class="wrapper" xs10 sm8 md6 lg5>
        <form>
          <v-row class="cont2 d-flex flex-column">
            <v-toolbar color="transparent"><v-toolbar-title class="custom-color">Login</v-toolbar-title></v-toolbar>
            <v-col><v-text-field type="email" name="email" v-model="email" label="Email"
                placeholder="filanfisteku@gmail.com" dark></v-text-field></v-col>
            <v-col><v-text-field type="password" name="password" v-model="password" label="Password"
                dark></v-text-field></v-col>
            <span class="error" v-html="error" v-if="!$store.state.isUserLoggedIn"></span>
            <v-col class="d-flex"><v-btn style="background-color: #ffcd18;" @click="login" tile>login</v-btn></v-col>
          </v-row>
        </form>
      </v-flex>
    </v-container>
  </div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        if (response.data.user.role === 'admin') {
          this.$router.push({ name: 'dashboard' })
        } else {
          this.$router.push({ name: 'home' })
        }
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: white;
}

.image-Backgraund {
  position: relative;
  min-height: 100%;
  min-width: 1024px;
  position: fixed;
}

.cont1 {
  position: absolute;
  top: 25%;
  right: 0;
  left: 0;
}

.cont2 {
  background-color: rgb(3, 18, 33, 0.5);
  padding: 2rem;
  border-radius: 2%;
}

.custom-color {
  color: hsla(0, 0%, 100%);
}
</style>
