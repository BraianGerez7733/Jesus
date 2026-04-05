import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Diferencias from '../views/Diferencias.vue'
import Religiones from '../views/Religiones.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/diferencias',
      name: 'diferencias',
      component: Diferencias
    },
    {
      path: '/religiones',
      name: 'religiones',
      component: Religiones
    }
  ]
})

export default router
