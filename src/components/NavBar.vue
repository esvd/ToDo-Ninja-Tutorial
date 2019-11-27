<template>
  <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Project added!</span>
      <v-btn color="white" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-app-bar color="grey lighten-5" flat>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="hidden-sm-and-down text-uppercase grey--text">
        <span class="font-weight-light">todo</span>
        <span>ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" color="grey">
            <v-icon>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in links" :key="link.text" @click="on" router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app class="primary" v-model="drawer" temporary>
      <v-col cols="12">
        <v-row justify="center" align="center">
          <v-avatar size="100">
            <img src="/avatar-1.png" />
          </v-avatar>
        </v-row>
        <v-row justify="center" align="center">
          <p class="white--text subheading mt-1">The Net Ninja</p>
        </v-row>
        <v-row class="mt-4" justify="center" align="center">
          <Popup @projectAdded="snackbar = true" />
        </v-row>
      </v-col>
      <v-list flat>
        <v-list-item-group>
          <v-list-item v-for="(link, i) in links" :key="i" router :to="link.route">
            <v-list-item-icon>
              <v-icon class="white--text" v-text="link.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="white--text" v-text="link.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup.vue";

export default {
  components: { Popup },
  data() {
    return {
      on: false,
      drawer: true,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" }
      ],
      snackbar: false
    };
  }
};
</script>
