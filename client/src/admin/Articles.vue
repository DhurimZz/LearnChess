<template>
    <div>
        <Dashboard>
            <v-btn fab color="primary" :to="{name: 'article-create'}" class="mb-3">
                <v-icon>add</v-icon>
        </v-btn>
            <v-data-table :headers="headers" :items="formattedArticles" :items-per-page="5" item-key="id"
                class="elevation-1" :footer-props="{
                    showFirstLastPage: true,
                    firstIcon: 'mdi-arrow-collapse-left',
                    lastIcon: 'mdi-arrow-collapse-right',
                    prevIcon: 'mdi-minus',
                    nextIcon: 'mdi-plus'
                }">
                <template v-slot:item.image="{ item }">
                    <span v-html="item.image"></span>
                </template>
                <template v-slot:item.edit="{ item }">
                    <v-btn color="primary">
                        Edit
                    </v-btn>
                </template>
                <template v-slot:item.delete="{ item }">
                    <v-btn color="error">
                        Delete
                    </v-btn>
                </template>
            </v-data-table>
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
            articles: null,
            headers: [
                {
                    text: 'image',
                    align: 'start',
                    value: 'image',
                    sortable: false
                },
                { text: 'title', value: 'title' },
                { text: 'description', value: 'description', sortable: false },
                { text: 'url', value: 'url', sortable: false },
                { text: 'edit', value: 'edit', sortable: false },
                { text: 'delete', value: 'delete', sortable: false }
            ]
        }
    },
    async mounted () {
        try {
            const response = await ArticlesService.index()
            this.articles = response.data
        } catch (error) {
            console.error(error)
            // show error message to the user
        }
    },
    computed: {
        formattedArticles () {
            if (!this.articles) {
                return []
            }

            return this.articles.map(article => ({
                id: article.id,
                title: article.title,
                description: article.description,
                url: article.url,
                image: `<img src="${article.image}" alt="${article.title}" width="150"/>`
            }))
        }
    }
}
</script>

<style scoped></style>
