<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-row class="mb-3 pl-7">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">by project name</span>
            </v-btn>
          </template>
          <span>Sort projects by Title</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
              <v-icon left small>person</v-icon>
              <span class="caption text-lowercase">by person name</span>
            </v-btn>
          </template>
          <span>Sort projects by Person</span>
        </v-tooltip>
      </v-row>
      <v-card flat v-bind:class="`pa-3`" v-for="(project, id) in projects" :key="id">
        <v-row no-gutters v-bind:class="`pa-3 project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project title</div>
            <div v-text="project.title"></div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div v-text="project.person"></div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div v-text="project.due"></div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div class="caption grey--text">Status</div>
            <v-chip
              small
              text-color="white"
              v-bind:color="`${vchipStyle(project.status)}`"
              v-text="project.status"
            ></v-chip>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { fetchDataInto } from "@/fb.js";
import { log } from "util";

export default {
  data() {
    return {
      projects: []
    };
  },
  created() {
    fetchDataInto(this.projects);
  },
  destroyed() {
    window.removeEventListener("resize", this.displaySize);
  },
  methods: {
    vchipStyle(status) {
      if (status == "Complete") return "teal lighten-2";
      if (status == "Ongoing") return "orange";
      if (status == "Overdue") return "red";
    },
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
    displaySize() {
      switch (this.$vuetify.breakpoint.name) {
        case "lg":
          log("LG");
          break;
        case "md":
          log("MD");
          break;
        case "sm":
          log("SM");
          break;
        case "xs":
          log("XS");
          break;
      }
    }
  }
};
</script>

<style>
.project.Complete {
  border-left: 4px solid #4db6ac;
}
.project.Ongoing {
  border-left: 4px solid #ff9800;
}
.project.Overdue {
  border-left: 4px solid #f44336;
}
</style>
