<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on" class="success">Add New Project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-form class="px-3" ref="form" v-model="validateForm" lazy-validation>
        <v-text-field label="title" v-model="title" prepend-icon="folder" :rules="titleRule"></v-text-field>
        <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="contentRule"></v-textarea>
        <v-row justify="start">
          <v-col cols="6">
            <v-menu class="px-3" v-model="datePickMenu" :close-on-content-click="false">
              <template v-slot:activator="{ on }">
                <v-text-field
                  prepend-icon="date_range"
                  :value="formattedDate"
                  label="Due By"
                  readonly
                  v-on="on"
                  :rules="dueDateRule"
                ></v-text-field>
              </template>
              <v-date-picker v-model="due" @change="datePickMenu = false"></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
        <v-btn text class="success my-3" @click="submit" :loading="loading">Add Project</v-btn>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { addNewProject } from "@/fb.js";

export default {
  data() {
    return {
      validateForm: true,
      datePickMenu: false,
      title: "",
      content: "",
      due: null,
      titleRule: [r => !!r || "A project must have a title!"],
      contentRule: [r => !!r || "Write a project information!"],
      dueDateRule: [r => !!r || "Please, set a due date."],
      loading: false,
      dialog: false
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          due: format(parseISO(this.due), "do MMM yyyy"),
          person: "Vinicius",
          status: "Ongoing"
        };
        addNewProject(project, this);
      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(parseISO(this.due), "do MMM yyyy") : "";
    }
  }
};
</script>
