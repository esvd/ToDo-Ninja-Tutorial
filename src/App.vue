<template>
  <v-app>
    <v-content>
      <router-view></router-view>
      <NavBar />
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>
