<template>
  <div class="home">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="purple" dark v-bind="attrs" v-on="on" rounded>
          New project
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          New project
        </v-card-title>

        <v-card-text>
          <v-form class="d-flex flex-column pa-5">
            <v-text-field label="Project number" outlined></v-text-field>
            <v-text-field label="Project name" outlined></v-text-field>
            <v-text-field label="Project postcode" outlined></v-text-field>
            <v-select
              v-model="value"
              :items="items"
              label="Project status"
              outlined
              append-icon
            ></v-select>
            <v-text-field
              label="Project contact email address"
              type="email"
              outlined
            ></v-text-field>
            <v-date-picker first-day-of-week="1" full-width reactive></v-date-picker>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            Add project
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-data-table
      :headers="headers"
      :items="projects"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { DataTableHeader } from "vuetify/types";

interface Dessert {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  iron: string;
}

@Component
export default class Home extends Vue {
  private readonly dialog: boolean = false;
  private readonly items: string[] = ["Pre-start", "Live", "Complete"];
  private readonly value: string[] = ["pre-start", "live", "complete"];

  private readonly headers: DataTableHeader[] = [
    {
      text: "Project number",
      align: "start",
      value: "number"
    },
    { text: "Project name", value: "name" },
    { text: "Project postcode", value: "postcode" },
    { text: "Project status", value: "status" },
    { text: "Project completion date", value: "completionDate" },
    { text: "Project contact email address", value: "email" }
  ];

  private get projects() {
    return this.$store.state.projects;
  }

  // private created() {
  //   this.$store.commit('setProjects', this.projects);
  // }
}
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > * {
    margin: 2rem 0;
  }
}
</style>
