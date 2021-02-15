<template>
  <div>
    <h3>Lista de Usuarios</h3>
    <div class="container text-center justify-content-center">
      <div class="col-12 justify-content-center">
        <table class="table table-bordered text-center">
          <thead>
            <tr>
              <th scope="col">Nombre del usuario</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="tarea in tareas" v-bind:key="tarea">
              <td scope="row">{{ tareas.nombre }}</td>
              <td >{{tareas.descripcion}}</td>
              <td>
                <button
                  class="btn btn-outline-info"
                  data-toggle="modal"
                  data-target=".bd-example-modal-sm"
                  v-on:click="agregarTarea(tarea)"
                >
                  Agregar
                </button>
              </td>
              <td>
                <button
                  class="btn btn-outline-info"
                  v-on:click="editarTarea(tarea)"
                >
                  Editar
                </button>
              </td>
              <td>
                <button
                  class="btn btn-outline-info"
                  v-on:click="borrarTarea(tarea)"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div
      class="modal fade bd-example-modal-sm"
      tabindex="-1"
      role="dialog"
      aria-labelledby="mySmallModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <form>
            <div class="mt-4">
              <div class="form-group row">
                <label class="col-sm-2 col-form-label" for="name"
                  >Nombre:</label
                >
                <div class="col-sm-8">
                  <input v-model="nombre" type="text" size="50" required />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label" for="name"
                  >Descripción:</label
                >
                <div class="col-sm-8">
                  <input v-model="descripcion" type="text" size="50" required />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
          Cerrar
          </button>
          <button type="button" class="btn btn-primary">Guardar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usuario from "../models/User.js";
export default {
  data: () => ({
    nombre: null,
    descripcion: null,
    tareas: [],
  }),
   methods: {
    agregarTarea: function () {
      if (
        this.nombre== null ||
        this.descripcion == null
      ) {
        return;
      }
      this.tareas.push({
        nombre: this.nombre,
        descripcion: this.descripcion,
      });
      this.nombre = null;
      this.descripcion = null;
      console.log(this.tarea);
    },
    borrarTarea: function (tarea) {
      var tareaForE = null;
      this.tarea.forEach((element, index) => {
        if (element == item) {
          tareaForE = index;
        }
      });
      this.tarea.splice(tareaForE, 1);
    },
    editarTarea: function(tarea){
      this.nombre=tarea.nombre;
      this.descripcion=item.descripcion;
      this.borrarProducto(tarea);
    },
  },
};
</script>

<style>
</style>>