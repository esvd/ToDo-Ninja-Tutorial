<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <v-container class="my-5">
      <v-row no-gutters>
        <v-col
          xs="12"
          sm="6"
          md="4"
          lg="3"
          v-for="person in team"
          v-bind:key="person.name"
        >
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img v-bind:src="person.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <v-card-title
                class="justify-center"
                v-text="person.name"
              ></v-card-title>
              <v-card-subtitle
                class="grey--text"
                v-text="person.role"
              ></v-card-subtitle>
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
        {
          name: "Vinicius Escame",
          role: "estag",
          avatar: "/avatar-1.png"
        },
        {
          name: "Linus Torvalds",
          role: "kernel dev",
          avatar: "/avatar-2.png"
        },
        {
          name: "Richard Stallmann",
          role: "senior dev",
          avatar: "/avatar-3.png"
        },
        {
          name: "Another One",
          role: "dev",
          avatar: "/avatar-4.png"
        },
        {
          name: "Another One Two",
          role: "dev",
          avatar: "/avatar-5.png"
        }
      ]
    };
  }
};
</script>
