<template>
  <div id="app" class="">
    <h1 class="mt-3">Mantenedor de Productos</h1>
    <hr >
    <div class="card text-center mt-5" id="card">
      <div class="card-body" id="carta">
        <h4 class="text-center mt-3">Añadir Producto</h4>
        <form>
          <div class="mt-4">
            <div class="form-group row">
              <label class="col-sm-2 col-form-label" for="name">Nombre:</label>
              <div class="col-sm-8">
                <input v-model="nombrePro" type="text" size="50" required >
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label" for="name"
                >Descripción:</label
              >
              <div class="col-sm-8">
                <input v-model="descripcion" type="text" size="50" required >
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label" for="name">Precio:</label>
              <div class="col-sm-8">
                <input v-model="precio" id="numero" type="number"  min="0"  required>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <button class="btn btn-outline-info" s v-on:click="guardarProducto">
      Añadir Producto
    </button>
    <hr>
    <h3>Lista de Productos</h3>
    <div class="container text-center justify-content-center">
      <div class="col-12 justify-content-center">
        <table class="table table-bordered text-center">
          <thead>
            <tr>
              <th  scope="col">Nombre</th>
              <th  scope="col">Descripcion</th>
              <th  scope="col">Precio</th>
              <th scope="col"></th>
              <th  scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" v-bind:key="item">
              <td scope="row">{{ item.nombrePro }}</td>
              <td>{{ item.descripcion }}</td>
              <td>{{ item.precio }}</td>
              <td><button class="btn btn-outline-info" v-on:click="editarProducto(item)">Editar</button></td>
              <td>
                <button
                  class="btn btn-outline-info"
                  v-on:click="borrarProducto(item)"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    nombrePro: null,
    descripcion: null,
    precio: 0,
    items: [],
  }),
  methods: {
    guardarProducto: function () {
      if (
        this.nombrePro == null ||
        this.descripcion == null ||
        this.precio == 0
      ) {
        return;
      }
      this.items.push({
        nombrePro: this.nombrePro,
        descripcion: this.descripcion,
        precio: this.precio,
      });
      this.nombrePro = null;
      this.descripcion = null;
      this.precio = 0;
      console.log(this.items);
    },
    borrarProducto: function (item) {
      var itemForE = null;
      this.items.forEach((element, index) => {
        if (element == item) {
          itemForE = index;
        }
      });
      this.items.splice(itemForE, 1);
    },
    editarProducto: function(item){
      this.nombrePro=item.nombrePro;
      this.descripcion=item.descripcion;
      this.precio=item.precio;
      this.borrarProducto(item);
    },
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

}
#card {
  margin: 15px;
  border-radius: 25px;
  border-style: dotted;
  border-color: cyan;
}

label {
  text-align: start;
  left: 25px;
  color: rgb(0, 0, 0);
}
input {
  text-align: center;
}
.btn {
  border-radius: 25px;
  background: rgba(241, 237, 237, 0.733);
  color: black;
}
th{
 background-color: rgba(241, 237, 237, 0.849);

}
.table{
  border: black 5px ;
}
#numero{
  size: 150;
  width : 443px; 
  position:relative;
}
h3{
  text-align: start;
  padding-left: 420px;
}
hr{
  width: 1900px;
  margin:35px;
  position: relative;
}
h1{
  margin-top: 15px;
}
</style>
