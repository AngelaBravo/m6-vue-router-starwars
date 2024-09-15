<template>
  <div v-if="personaje" class="individual">
    <p class="titulo">Nombre</p>
    <p class="respuesta">{{ this.personaje.name }}</p>
    <p class="titulo">Genero</p>
    <p class="respuesta">{{ this.personaje.gender }}</p>
    <p class="titulo">Altura</p>
    <p class="respuesta">{{ this.personaje.height }}</p>
    <p class="titulo">Numero peliculas</p>
    <p class="respuesta">{{ this.personaje.films.length }}</p>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';

export default {
  name: 'PersonajeView',
  // props: {
  //   personaje: String
  // },
  data: function () {
    return {
      personaje: null,
    }
  },
  created() {
    // hacer logica de que si el params.id es igual o mayor a 17 sumar 1
    axios.get(`https://swapi.dev/api/people/${this.$route.params.id}`)
      .then((detallepersonaje) => {
        this.personaje = detallepersonaje.data;
      });
  },
  // computed: {},
}
</script>

<style scoped>
body{
  background-image: none;
  background-color: black;
}
.individual {
  margin: 10px auto;
  text-align: center;
  color: white;
  width: 25rem;
  border: 2px solid yellow;
  padding-top: 2px;
}

.titulo {
  margin: 0;
  background-color: grey;
  padding: 4px 0 4px 0;
}

.respuesta {
  margin: 3px 0 3px 0;
}
</style>