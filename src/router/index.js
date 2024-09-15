import { createRouter, createWebHistory } from "vue-router";
import InicioView from "../views/InicioView.vue";
import PersonajesView from "../views/PersonajesView.vue";
import PersonajeView from "../views/PersonajeView.vue";
import ContactoView from "../views/ContactoView.vue";

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: InicioView,
  },
  {
    path: "/personajes",
    name: "Personajes",
    component: PersonajesView,
  },
  {
    path: "/personajes/personaje/:id",
    name: "Personaje",
    component: PersonajeView,
    props: true,
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: ContactoView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
