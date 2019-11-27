<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="(project, id) in projects" :key="id">
          <v-expansion-panel-header v-text="project.title"></v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div class="font-weight-bold">due by: {{ project.due }}</div>
            <div v-text="project.content"></div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
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
    fetchDataInto(this.projects, "Vinicius");
  },
  computed: {
    myProjects() {
      return (
        this.projects.person === "Vinicius" &&
        this.projects.status != "Complete"
      );
    }
  },
  mounted() {
    this.projects.forEach(c => {
      log("ID" + c.id);
    });
  }
};
</script>