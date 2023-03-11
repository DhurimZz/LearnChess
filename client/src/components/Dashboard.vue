<template>
    <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
        <SideBar />
        <v-container>
            <slot />
        </v-container>
    </v-app>
</template>
<script>
import SideBar from '../components/SideBar'
export default {name: 'Home', components: {SideBar}}
</script>
<style>
.v-card.borderme {
    border: 2px solid #704232 !important;
}

.v-card.borderout {
    border: 1px solid #BCAAA4 !important;
}
</style>
