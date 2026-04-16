import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/Home.vue'), meta: { title: 'Inicio' } },
  { path: '/biblia', name: 'biblia', component: () => import('../views/Biblia.vue'), meta: { title: 'La Biblia' } },
  { path: '/antiguo-testamento', name: 'antiguo-testamento', component: () => import('../views/AntiguoTestamento.vue'), meta: { title: 'Antiguo Testamento' } },
  { path: '/nuevo-testamento', name: 'nuevo-testamento', component: () => import('../views/NuevoTestamento.vue'), meta: { title: 'Nuevo Testamento' } },
  { path: '/jesus', name: 'jesus', component: () => import('../views/Jesus.vue'), meta: { title: 'Jesús' } },
  { path: '/religiones', name: 'religiones', component: () => import('../views/Religiones.vue'), meta: { title: 'Religiones' } },
  { path: '/comparacion', name: 'comparacion', component: () => import('../views/Comparacion.vue'), meta: { title: 'Comparación' } },
  { path: '/diferencias', name: 'diferencias', component: () => import('../views/Diferencias.vue'), meta: { title: 'Diferencias' } },
  { path: '/parabolas', name: 'parabolas', component: () => import('../views/Parabolas.vue'), meta: { title: 'Parábolas' } },
  { path: '/personajes', name: 'personajes', component: () => import('../views/Personajes.vue'), meta: { title: 'Personajes' } },
  { path: '/versiculos', name: 'versiculos', component: () => import('../views/Versiculos.vue'), meta: { title: 'Versículos' } },
  { path: '/quiz', name: 'quiz', component: () => import('../views/Quiz.vue'), meta: { title: 'Quiz' } },
  { path: '/contacto', name: 'contacto', component: () => import('../views/Contacto.vue'), meta: { title: 'Contacto' } },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  const base = 'Jesús el camino'
  document.title = to.meta?.title ? `${to.meta.title} · ${base}` : base
})

export default router
