<template>
  <div id="app">
    <v-app>
      <AppBar />
      <v-main>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-main>
      <Snackbar />
    </v-app>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  },
};
</script>

<style>
#app {
 
}
</style>
