<template>
  <div >
    <div class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
      <div class="container-fluid" id="container">
        <a class="navbar-brand" href="#">
          <img
            src=""
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-top"
          >
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
    <div class="row" >
      <div class="col-4" v-for="pelicula in peliculas" v-bind:key="pelicula" >
        <v-img  class="img-fluid" src="pelicula.backdrop_path"></v-img>
        <div class="card-body">
          <!--Title-->
          <h4 class="card-title" >{{pelicula.original_title}}</h4>
          <!--Text-->
          <p class="card-text">{{pelicula.vote_average}}</p>
        </div>
     </div>
    </div>
  </div>
</template>

<script>
import ApiService from "./service/api.sevice";
export default {
  name: "App",
  components: {},
  data()  {
    return{
      peliculas: [],
    titulo:null,
    
    pagina: 1,
    }
    
  },
  methods: {
    cambiarPagina: function () {
      this.peliculas = ApiService.getTopRated(this.pagina + 1);
    
    },
  },
  mounted() {
    ApiService.getTopRated(this.pagina).then(response => {
    this.peliculas =response.data.results});
    console.log(this.peliculas);

  }
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
#nav {

  background-color: #58ACFA ;
  background: #58ACFA;
}

#container{
  color: #58ACFA;
  background-color: #58ACFA ;
   background: #58ACFA;
}
#navbarNav{
    background-color: #58ACFA ;
    background: #58ACFA;
    
}

</style>
