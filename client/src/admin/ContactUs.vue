<template>
    <div>
        <Dashboard>
            <v-data-table :headers="headers" :items="formattedContactUs" :items-per-page="5" item-key="id"
                class="elevation-1" :footer-props="{
                    showFirstLastPage: true,
                    firstIcon: 'mdi-arrow-collapse-left',
                    lastIcon: 'mdi-arrow-collapse-right',
                    prevIcon: 'mdi-minus',
                    nextIcon: 'mdi-plus'
                }">
                <template v-slot:item.delete="{ item }">
                    <v-btn color="error" @click="deleteContactUs(item.id)">
                        Delete
                    </v-btn>
                </template>
            </v-data-table>
        </Dashboard>
    </div>
</template>
<script>
import Dashboard from '../components/Dashboard'
import ContactUsServices from '@/services/ContactUsServices'
export default {
    name: 'dashboard',
    components: { Dashboard },
    data () {
        return {
            contactus: null,
            headers: [
                { text: 'name', value: 'name' },
                { text: 'email', value: 'email', sortable: false },
                { text: 'message', value: 'message', sortable: false },
                { text: 'delete', value: 'delete', sortable: false }
            ]
        }
    },
    async mounted () {
        try {
            const response = await ContactUsServices.index()
            this.contactus = response.data
        } catch (error) {
            console.error(error)
            // show error message to the user
        }
    },
    computed: {
        formattedContactUs () {
            if (!this.contactus) {
                return []
            }

            return this.contactus.map(contactus => ({
                id: contactus.id,
                name: contactus.name,
                email: contactus.email,
                message: contactus.message
            }))
        }
    },
    methods: {
        async fetchContactUs () {
            try {
                const response = await ContactUsServices.index()
                this.contactus = response.data
            } catch (error) {
                console.error(error)
                // show error message to the user
            }
        },
        async deleteContactUs (contactusId) {
            try {
                await ContactUsServices.delete(contactusId)
                await this.fetchContactUs()
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>

<style scoped></style>
