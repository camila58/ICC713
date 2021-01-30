<template>
  <div>
    <div class="navbar navbar-expand-lg navbar-dark bg-primary" id="nav">
      <div class="container-fluid" id="container">
        <a class="navbar-brand" href="#">
          <img
            src=""
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-top"
          />
          vuetify
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
    </div>
    <div align="center" v-for="(pelicula,i) in peliculas" :key="i">
        <div v-if="i==peliculaSeleccionada">
          <h4 class="card-title">{{ pelicula.original_title }}</h4>
         <div>
          <img class="img-fluid"  v-bind:src="pelicula.backdrop_path"> <img>
            <p class="card-text">⭐{{ pelicula.vote_average }}</p>
         </div>
          
        </div>
    </div>

  </div>
</template>

<script>
import ApiService from "./service/api.sevice";
import Movie from "./models/Movie";
export default {
  name: "App",
  components: {},
  data() {
    return {
      peliculas: [],
      titulo: null,
      pagina: 1,
      show:false,
      peliculaSeleccionada: null,
    };
  },
  methods: {
  
  },
  mounted() {
    var id= this.$route.params.id;
    console.log(id);
    ApiService.getTopRated(this.pagina).then((response) => {
      this.peliculas = response.data.results.map((movie) => new Movie(movie))
    });
    this.peliculaSeleccionada= id;
    console.log(this.peliculas[id]);
    
  },
};

</script>

<style>
</style>
