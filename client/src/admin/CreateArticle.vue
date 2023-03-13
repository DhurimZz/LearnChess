<template>
  <div>
    <Dashboard>
      <div class="h-full d-flex align-center justify-center">
        <v-flex class="pt-5 pb-5 pr-5 pl-5 form-wrapper " xs12 md8>
          <form>
            <v-text-field label="Title" v-model="article.title" :rules="[required]"></v-text-field>
            <v-text-field label="Description" v-model="article.description" :rules="[required]"></v-text-field>
            <v-text-field label="Image Adresse" v-model="article.image" :rules="[required]"></v-text-field>
            <v-text-field label="Url" v-model="article.url" :rules="[required]"></v-text-field>
            <div class="danger-alert" v-if="error">
              {{error}}
            </div>
            <v-btn class="me-4" type="submit" color="success" @click.prevent="create">
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
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.article)
        .every(key => !!this.article[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await ArticlesService.post(this.article)
        this.$router.push({
          path: '/admin/articles'
        })
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
.danger-alert {
  background-color: #ff5252 ;
  padding: 0.3rem;
  color: white;
  border-radius: 0.2rem;
  margin-bottom: 0.5rem;
}
</style>
