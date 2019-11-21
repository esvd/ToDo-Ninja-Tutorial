<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
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
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Learn VueX",
          person: "Vinicius",
          due: "1st Jan 2020",
          status: "Ongoing"
        },
        {
          id: 2,
          title: "Get Some Job",
          person: "Vinicius",
          due: "14th Oct 2019",
          status: "Complete"
        },
        {
          id: 3,
          title: "Learn Frontend Development",
          person: "Vinicius",
          due: "2nd Dec 2017",
          status: "Overdue"
        }
      ]
    };
  },
  created() {
    window.addEventListener("resize", this.displaySize);
    // this.displaySize();
  },
  destroyed() {
    window.removeEventListener("resize", this.displaySize);
  },
  methods: {
    vchipStyle(status) {
      /* eslint-disable no-console */
      console.log(status);
      if (status == "Complete") return "teal lighten-2";
      if (status == "Ongoing") return "orange";
      if (status == "Overdue") return "red";
    }
    // displaySize() {
    //   /* eslint-disable no-console */
    //   switch (this.$vuetify.breakpoint.name) {
    //     case "lg":
    //       console.log("LG");
    //       break;
    //     case "md":
    //       console.log("MD");
    //       break;
    //     case "sm":
    //       console.log("SM");
    //       break;
    //     case "xs":
    //       console.log("XS");
    //       break;
    //   }
    // }
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
