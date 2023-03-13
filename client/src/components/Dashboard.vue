<template>
    <div :style="{ background: $vuetify.theme.themes.dark.background }" class="dashboard h-full">
        <SideBar />
        <v-container class="dashboard-content h-full">
            <slot />
        </v-container>
    </div>
</template>
<script>
import SideBar from '../components/SideBar'
export default {
  name: 'Home',
  components: {
    SideBar
  }
}
</script>
<style>
.h-full {
    height: 100%;
}
</style>
