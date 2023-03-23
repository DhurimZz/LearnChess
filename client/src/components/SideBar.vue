<template>
    <v-navigation-drawer v-model="drawer" app mini-variant mini-variant-width="90" class="sidebar-container">
        <v-avatar class="d-block text-center mx-auto mt-4" size="40">
            <v-icon color="white">fas fa-chess-board</v-icon>
        </v-avatar>
        <v-list flat class="mt-4">
            <v-list-item-group v-model="selectedItem">
                <v-list-item v-for="(item, i) in items" :key="i" active-class="border" :ripple="false">
                    <v-list-item-content>
                        <v-icon v-text="item.icon" color="white"></v-icon>
                        <a align="center" v-text="item.text" :href="item.path" class="mt-3 caption sidebar-icon-text"></a>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <div
            style="position: absolute; bottom: 20px; margin-left: auto; margin-right: auto; left:0; right:0; text-align: center;">
            <v-icon color="white">fas fa-sign-out-alt</v-icon><br><span class="caption" style="color: white;">Logout</span>
        </div>
    </v-navigation-drawer>
</template>

<script>
export default { data: () => ({ selectedItem: 0, drawer: null, items: [{ icon: 'fas fa-home', text: 'Home', path: '/' }, { icon: 'fa-solid fa-newspaper', text: 'Article', path: '/admin/articles' }, { icon: 'fa-solid fa-inbox', text: 'ContactUs', path: '/admin/ContactUs' }] }) }
</script>
<style>
.border {
    margin-left: 8px;
    margin-right: 8px;
    background: yellow;
    border-radius: 20px;
    text-decoration: none;
}

.sidebar-container {
    background-color: rgb(3, 18, 33, 0.9) !important;
}

.sidebar-icon-text {
    text-decoration: none;
    color: white !important;
}
</style>
