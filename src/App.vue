<template>
  <!-- eslint-disable  -->
  <nav>
    <router-link to="/">Inicio</router-link> |
    <router-link to="/personajes">Personajes</router-link> |
    <router-link to="/contacto">Contacto</router-link>
  </nav>
  <!-- <router-view /> -->
  <router-view v-slot="{ Component, route }">
      <keep-alive include="PersonajesView">
        <component :is="Component" />
      </keep-alive>
    </router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
nav {
  padding: 15px;
  background-color: yellow;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
