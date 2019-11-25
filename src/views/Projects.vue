<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="(project, id) in myProjects" :key="id">
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
export default {
  data() {
    return {
      projects: [
        {
          title: "Learn Vuetify",
          person: "Vinicius",
          due: "16th Nov 2020",
          status: "Overdue",
          content:
            "Begin vuetify tutorial from The Net Ninja so we can start our frontend development of Cff project from Secretaria da Fazenda"
        },
        {
          title: "Develop an Emacs package for code completion",
          person: "Richard Stalmann",
          due: "26th Mar 2010",
          status: "Complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit amet ullam maxime odio impedit, distinctio atque asperiores a molestias porro, nam mollitia quas perferendis modi. Debitis deleniti corporis neque accusantium."
        },
        {
          title: "Implement kernel modules for new AMD processsor arch",
          person: "Linus Torvalds",
          due: "2nd Jan 2020",
          status: "Ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit amet ullam maxime odio impedit, distinctio atque asperiores a molestias porro, nam mollitia quas perferendis modi. Debitis deleniti corporis neque accusantium."
        },
        {
          title: "Finish the SpringHotel project",
          person: "Vinicius",
          due: "05th Dec 2019",
          status: "Ongoing",
          content:
            "Finish a project from university made with java, hibernate, mysql, and spring mvc"
        }
      ]
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === "Vinicius";
      });
    }
  }
};
</script>