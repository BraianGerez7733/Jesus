<script setup>
import { RouterLink } from 'vue-router'
import PageHeader from '../components/PageHeader.vue'
import ComparisonTable from '../components/ComparisonTable.vue'
import { religions, comparisonRows } from '../data/religiones.js'
</script>

<template>
  <PageHeader
    eyebrow="Comparación interactiva"
    title="Elige religiones y compáralas"
    description="Activa o desactiva cada columna para enfocarte solo en las que te interesan. La tabla se actualiza al instante."
    image="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80"
  >
    <template #actions>
      <RouterLink to="/diferencias" class="btn-primary">
        Ver diferencias doctrinales
        <span aria-hidden="true">→</span>
      </RouterLink>
      <RouterLink to="/religiones" class="btn-ghost">Volver al panorama</RouterLink>
    </template>
  </PageHeader>

  <section class="mx-auto max-w-7xl px-6 py-14 sm:px-8">
    <ComparisonTable :religions="religions" :rows="comparisonRows" />
  </section>

  <section class="mx-auto max-w-7xl px-6 pb-20 sm:px-8">
    <div class="grid gap-6 lg:grid-cols-3">
      <div class="surface-card">
        <span class="chip">Cómo usar</span>
        <h3 class="font-display mt-4 text-2xl font-bold text-slate-900">Filtros rápidos</h3>
        <p class="mt-3 text-sm leading-7 text-slate-600">
          Toca los nombres arriba de la tabla para mostrar u ocultar columnas. Deja solo 2
          religiones para compararlas cara a cara.
        </p>
      </div>
      <div class="surface-card">
        <span class="chip-violet">Respetuoso</span>
        <h3 class="font-display mt-4 text-2xl font-bold text-slate-900">Tono neutral</h3>
        <p class="mt-3 text-sm leading-7 text-slate-600">
          Describimos cada religión desde sus propias fuentes. En la sección de diferencias
          sí comparamos doctrinas con la Biblia.
        </p>
      </div>
      <div class="surface-card">
        <span class="chip-amber">Siguiente paso</span>
        <h3 class="font-display mt-4 text-2xl font-bold text-slate-900">Pon a prueba lo aprendido</h3>
        <p class="mt-3 text-sm leading-7 text-slate-600">
          Cuando tengas claro lo esencial, prueba el quiz bíblico y comprueba tus aciertos.
        </p>
        <RouterLink to="/quiz" class="btn-accent mt-5">
          Ir al quiz
          <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
