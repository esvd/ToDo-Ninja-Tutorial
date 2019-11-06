<template>
  <nav>
    <v-app-bar color="grey lighten-5" flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">todo</span>
        <span>ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer class="drawer" v-model="drawer" app></v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: true
    };
  }
};
</script>