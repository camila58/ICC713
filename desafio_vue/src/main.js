import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "@babel/polyfill";
import "core-js/stable";
import "regenerator-runtime/runtime";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.filter";
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueRouter from 'vue-router';
import pelicula from './Pelicula.vue';
import peliculas from './Peliculas.vue';


Vue.use(BootstrapVue)
Vue.use(VueAxios,axios);
Vue.use(VueRouter);



const routes = [
  {path: '/', redirect: {path: '/peliculas'}},
  {path: '/peliculas', component: peliculas},
  {path: '/pelicula/:id', name:'peli',component: pelicula}
  
  

]

const router = new VueRouter({
  routes
})



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
