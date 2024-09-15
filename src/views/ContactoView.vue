<template>
  <!-- /* eslint-disable */ -->
  <div class="contacto">
    <h1>Contacto</h1>
    <p>Para contactarnos puede escribirnos</p>
    <form action="">
      <label for="">Nombre Completo</label>
      <input class="setenta" type="text" />
      <label for="">Correo electronico</label>
      <input class="setenta" type="email" />
      <label for="">Mensaje</label>
      <textarea name="mensaje" id="mensaje" rows="6"></textarea>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>/* eslint-disable */</script>

<style scoped>
/* eslint-disable */
.contacto{
  text-align: center;
  color: white;
}
form{
  display: flex;
  flex-direction: column; /* Poner cada elemento en una fila nueva */
  max-width: 400px;       /* Limita el ancho del formulario */
  margin: 0 auto;         /* Centra el formulario en la página */
  #mensaje{
    border: 2px solid yellow;
  }      
}
label{
  text-align: left ;
}
input{
  margin-bottom: 10px;
  border: 2px solid yellow;
}
.setenta{
  width: 70%;     /*Ocupa todo el 70% del ancho disponible */
}

button{
  color: white;
  width: 50%;
  background-color: rgb(76, 155, 76);
  margin-top: 8px;
  padding: 2px;
  border: 2px solid yellow;
}
</style>
