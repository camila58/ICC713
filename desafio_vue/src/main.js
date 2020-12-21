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
import VueAxios from 'vue-axios'
import axios from 'axios'


Vue.use(BootstrapVue)
Vue.use(VueAxios,axios);



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
