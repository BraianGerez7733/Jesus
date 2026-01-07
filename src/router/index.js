import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Diferencias from '../views/Diferencias.vue'

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
    }
  ]
})

export default router
