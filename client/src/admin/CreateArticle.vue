<template>
  <div>
    <Dashboard>
      <div class="h-full d-flex align-center justify-center">
      <v-flex class="pt-5 pb-5 pr-5 pl-5 form-wrapper " xs12 md8>
      <form>
        <v-text-field label="Title" v-model="article.title"></v-text-field>
        <v-text-field label="Description" v-model="article.description"></v-text-field>
        <v-text-field label="Image Adresse" v-model="article.image"></v-text-field>
        <v-text-field label="Url" v-model="article.url"></v-text-field>
        <v-btn class="me-4" type="submit" color="success" @click="create">
          Create
        </v-btn>
      </form>
    </v-flex>
  </div>
    </Dashboard>
  </div>
</template>

<script>
import Dashboard from '../components/Dashboard'
import ArticlesService from '@/services/ArticlesService'
export default {
  name: 'dashboard',
  components: { Dashboard },
  data () {
    return {
      article: {
        title: null,
        description: null,
        url: null,
        image: null
      }
    }
  },
  methods: {
   async create () {
    try {
      await ArticlesService.post(this.article)
    } catch (err) {
      console.log(err)
    }
    }
  }
}
</script>

<style scoped>
.form-wrapper {
  background-color: White;
  border-radius: 0.5rem;
}
.h-full {
  height: 100%;
}
</style>
