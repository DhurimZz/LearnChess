<template>
  <v-app>
    <div>
      <v-img
    lazy-src="https://picsum.photos/id/11/10/6"
    max-height="150"
    max-width="250"
    src="https://picsum.photos/id/11/500/300"
    ></v-img>
    </div>
  </v-app>
  <!-- <div>
    <input type="email" name="email" v-model="email" placeholder="email" /> <br />
    <input type="password" name="password" v-model="password" placeholder="password" /> <br />
    <span class="error" v-html="error"></span>
    <button @click="register">Register</button>
  </div> -->
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
</style>
