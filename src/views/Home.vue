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
            <v-date-picker class="ma-auto" reactive></v-date-picker>
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
      :items="desserts"
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

  private readonly desserts: Dessert[] = [
    {
      name: "Frozen Yogurt",
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      iron: "1%"
    },
    {
      name: "Ice cream sandwich",
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      iron: "1%"
    },
    {
      name: "Eclair",
      calories: 262,
      fat: 16.0,
      carbs: 23,
      protein: 6.0,
      iron: "7%"
    },
    {
      name: "Cupcake",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      iron: "8%"
    },
    {
      name: "Gingerbread",
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
      iron: "16%"
    },
    {
      name: "Jelly bean",
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      iron: "0%"
    },
    {
      name: "Lollipop",
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0,
      iron: "2%"
    },
    {
      name: "Honeycomb",
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
      iron: "45%"
    },
    {
      name: "Donut",
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
      iron: "22%"
    },
    {
      name: "KitKat",
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7,
      iron: "6%"
    }
  ];
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
