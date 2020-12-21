<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="/assents/logo.png"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-top"
        />
        Bootstrap
      </a>
    </div>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
    </nav>
    <div class="card">
      <div class="card-body" v-for="pelicula in peliculas" v-bind:key="pelicula"></div>
      <button class="btn btn-primary " type="submit" v-on:click="cambiarPagina">Ver Más</button>
    </div>
  </div>
</template>

<script>
import ApiService from "./service/api.sevice";
import Movie from "./models/Movie";
export default {
  name: "App",
  components: {},
  data: () => ({
    pelicula: [],
    pagina: 1,
  }),
  methods: {
    cambiarPagina: function () {
      this.pelicula = ApiService.getPopular(this.pagina + 1);
    },
  },
  mounted() {
    this.pelicula = ApiService.getPopular(this.pagina);
    this.pelicula = new Movie(this.pelicula);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
b-navbar-item {
  text-align: right;
}
</style>
