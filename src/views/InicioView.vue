/* eslint-disable */
<template>
  <div>
    <InicioComp msg="Modulo6 sesion6 Drilling" />
  </div>
</template>

<script>
// @ is an alias to /src
import InicioComp from "@/components/InicioComp.vue";

export default {
  name: "InicioView",
  components: {
    InicioComp,
  },
};
</script>
<style>
body {
  /* background-image: url(https://foroalfa.org/imagenes/ilustraciones/hq/4166.webp); */
  background-image: url(../assets/foto-Star-Wars.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>
