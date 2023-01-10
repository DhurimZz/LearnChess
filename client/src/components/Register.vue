<template>
  <div>
  <v-img
    :src="require('../assets/Photos/Chess-Background.jpg')"
    class="image-Backgraund"
  >
  </v-img>
  <v-container>
  <div>
    <input type="email" name="email" v-model="email" placeholder="email" /> <br />
    <input type="password" name="password" v-model="password" placeholder="password" /> <br />
    <span class="error" v-html="error"></span>
    <button @click="register">Register</button>
  </div>
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
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
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
  color: red;
}
.image-Backgraund{
  min-width:100%;
  min-height:100%;
  position: relative;
}
</style>
