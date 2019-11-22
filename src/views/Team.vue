<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <v-container class="my-5">
      <v-row no-gutters>
        <v-col xs="12" sm="6" md="4" lg="3" v-for="person in team" v-bind:key="person.name">
          <v-card flat class="text-center ma-3">
            <!-- src="https://www.pngfind.com/pngs/m/110-1102775_download-empty-profile-hd-png-download.png" -->
            <v-img>image goes here</v-img>
            <v-card-text>
              <v-card-title class="justify-center" v-text="person.name"></v-card-title>
              <v-card-subtitle class="grey--text" v-text="person.role"></v-card-subtitle>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-container class="my-5">
      <v-row no-gutters>
        <v-col xs="12" md="6">
          <v-btn outlined block class="primary">1</v-btn>
        </v-col>
        <v-col xs="4" md="2">
          <v-btn outlined block class="primary">2</v-btn>
        </v-col>
        <v-col xs="4" md="2">
          <v-btn outlined block class="primary">3</v-btn>
        </v-col>
        <v-col xs="4" md="2">
          <v-btn outlined block class="primary">4</v-btn>
        </v-col>
      </v-row>
      <v-row justify="space-around">
        <v-col xs="4" md="4">
          <v-btn outlined block class="primary">1</v-btn>
        </v-col>
        <v-col xs="4" md="4">
          <v-btn outlined block class="primary">2</v-btn>
        </v-col>
      </v-row>
    </v-container>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: "Vinicius Escame", role: "estag" },
        { name: "Linus Torvalds", role: "kernel dev" },
        { name: "Richard Stallmann", role: "senior dev" },
        { name: "Another One", role: "dev" },
        { name: "Another One Two", role: "dev" },
        { name: "Another Two Three", role: "dev" }
      ]
    };
  }
};
</script>