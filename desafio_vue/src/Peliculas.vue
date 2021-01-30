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
    <div class="row">
      <div class="col-4" v-for="(pelicula,i) in peliculas" :key="i">
        <div v-if="i<3 || show"  >
          <div class="card bg-dark text-white mt-3"  @click="clickMethod(i)">
            <img class="img-fluid"  v-bind:src="pelicula.backdrop_path"> <img>
            <div class="card-img-overlay">
              <h4 class="card-title">{{ pelicula.original_title }}</h4>
             <p class="card-text">{{ pelicula.vote_average }}⭐</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div align="center">
      <br>
      <button class="btn btn-primary" @click="show=!show" v-if="!show"> ver más</button>
      <button class="btn btn-primary" @click="show=!show" v-if="show">Mostrar Menos</button>
      
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
      
      
    };
  },
  methods: {
    cambiarPagina: function () {
      this.peliculas = ApiService.getTopRated(this.pagina + 1);
    },
    clickMethod(i){
      console.log(this);
      this.$router.push({
        name: "peli", 
        params:{
          id: i,
        }});
 
    },
    
  
  },
  mounted() {
    ApiService.getTopRated(this.pagina).then((response) => {
      this.peliculas = response.data.results.map((movie) => new Movie(movie))
    });
     console.log(this.peliculas);
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
</style>
