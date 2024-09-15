<template>
  <div class="personajes">
    <h1>Personajes</h1>
    <button class="buscar" @click="buscar">Buscar más personajes</button>
    <div class="botones">
      <button
        class="botonIndividual"
        @click="personaje"
        v-for="(personaje, index) in personajes"
        :key="index"
      >
        <router-link :to="`/personajes/personaje/${index + 1}`">{{
          personaje.name
        }}</router-link>
      </button>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
import PersonajeView from "./PersonajeView.vue";
export default {
  name: "PersonajesView",
  data() {
    return {
      personajes: [],
      pagina: 1,
    };
  },
  mounted() {
    axios.get(`https://swapi.dev/api/people?page=${this.pagina}`)
      .then((nombrepersonajes) => {
        console.log(nombrepersonajes.data);
        // no funciona porque aunque estamos usando la propiedad correcta 
        // no verificamos que esta api devuelve una respuesta que "envuelve" el arreglo
        // que nosotros necesitamos. Prueba a mirar la url en el navegador directamente
        // this.personajes.push(...nombrepersonajes.data);
        this.personajes.push(...nombrepersonajes.data.results);
      });
  },
  // computed: {},
  methods: {
    buscar() {
      this.pagina++;
      axios.get(`https://swapi.dev/api/people?page=${this.pagina}`)
        .then((nombrepersonajes) => {
          console.log(nombrepersonajes.data);
          this.personajes.push(...nombrepersonajes.data.results);
        });
    },
  },
};
</script>

<style scoped>
.personajes{
  text-align: center;
}
h1{
  color: yellow;
} 
.buscar{
  padding: 5px;
  margin-bottom: 5px;
}
.botones{
  width: 90%;
  text-align: center;
}
.botonIndividual{
  width: 30%;
  margin: 2px;
  border: 2px solid yellow;
}

</style>
