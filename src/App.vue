<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
@import "~normalize.css";

#app {
  max-width: 65em;
  margin: 0 auto;
}
</style>
