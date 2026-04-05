<script setup>
import { RouterLink } from 'vue-router'
import ScrollVisualSection from '../components/ScrollVisualSection.vue'
import SiteShell from '../components/SiteShell.vue'

const religiones = [
  {
    nombre: 'Cristianismo',
    origen: 'Siglo I',
    descripcion:
      'Fe monoteísta centrada en Jesucristo, su vida, muerte y resurreccion, con la Biblia como texto sagrado principal.',
    dios: 'Un solo Dios; Jesús ocupa un lugar central como Mesias y Señor.',
    texto: 'Biblia',
    meta: 'Relacion con Dios, salvacion y vida eterna.',
  },
  {
    nombre: 'Judaísmo',
    origen: 'Antigüedad',
    descripcion:
      'Tradicion monoteísta basada en la alianza entre Dios y el pueblo de Israel, con la Torá como referencia fundamental.',
    dios: 'Un solo Dios; no reconoce a Jesús como Mesias.',
    texto: 'Tanaj y literatura rabinica',
    meta: 'Fidelidad al pacto, la ley y la vida comunitaria.',
  },
  {
    nombre: 'Mormonismo',
    origen: 'Siglo XIX',
    descripcion:
      'Movimiento cristiano restauracionista conocido como La Iglesia de Jesucristo de los Santos de los Últimos Días, con escrituras adicionales a la Biblia.',
    dios: 'Afirma a Dios Padre, Jesucristo y el Espíritu Santo con una comprension distinta a la trinitaria clasica.',
    texto: 'Biblia, Libro de Mormón y otros textos',
    meta: 'Progreso espiritual, salvacion y exaltacion.',
  },
  {
    nombre: 'Islam',
    origen: 'Siglo VII',
    descripcion:
      'Religion monoteísta fundada en la predicacion de Mahoma, con el Corán como revelacion central y una fuerte vida de practica y comunidad.',
    dios: 'Un solo Dios, Allah; Jesús es profeta, no divino.',
    texto: 'Corán y hadices',
    meta: 'Sumision a Dios y juicio final.',
  },
  {
    nombre: 'Budismo',
    origen: 'Siglo V a. C.',
    descripcion:
      'Tradicion filosofica y religiosa iniciada por Siddhartha Gautama, enfocada en comprender el sufrimiento y el camino hacia la liberacion.',
    dios: 'No se centra en un Dios creador unico.',
    texto: 'Canon Pali y otros sutras',
    meta: 'Superar el sufrimiento y alcanzar la iluminacion.',
  },
  {
    nombre: 'Catolicismo',
    origen: 'Siglo I',
    descripcion:
      'Rama mayoritaria del cristianismo que combina Biblia, tradicion eclesial y magisterio como referencias doctrinales.',
    dios: 'Un solo Dios trino; fuerte acento sacramental y eclesial.',
    texto: 'Biblia, tradicion y magisterio',
    meta: 'Comunion con Dios, vida sacramental y esperanza eterna.',
  },
]

const diferencias = [
  {
    criterio: 'Figura de Jesús',
    cristianismo: 'Mesias, Hijo de Dios y centro de la fe.',
    judaísmo: 'No es aceptado como Mesias.',
    mormonismo: 'Salvador, dentro de una teologia distinta a la clasica.',
    islam: 'Profeta importante, no divino.',
    budismo: 'No cumple un rol central doctrinal.',
    catolicismo: 'Coincide con el cristianismo historico sobre su divinidad.',
  },
  {
    criterio: 'Autoridad religiosa',
    cristianismo: 'La Biblia es referencia principal.',
    judaísmo: 'Torá, Tanaj y tradicion interpretativa.',
    mormonismo: 'Biblia mas escrituras y revelaciones adicionales.',
    islam: 'Corán y tradicion profetica.',
    budismo: 'Enseñanzas del Buda y escuelas posteriores.',
    catolicismo: 'Biblia junto con tradicion y magisterio.',
  },
  {
    criterio: 'Comprension de Dios',
    cristianismo: 'Monoteismo con formulaciones trinitarias en gran parte de sus ramas.',
    judaísmo: 'Monoteismo estricto.',
    mormonismo: 'Comprension diferenciada de Padre, Hijo y Espíritu Santo.',
    islam: 'Monoteismo absoluto.',
    budismo: 'No gira alrededor de un Dios creador personal.',
    catolicismo: 'Monoteismo trinitario.',
  },
  {
    criterio: 'Meta espiritual',
    cristianismo: 'Salvacion y vida eterna con Dios.',
    judaísmo: 'Vivir el pacto y la justicia segun la ley.',
    mormonismo: 'Salvacion y exaltacion.',
    islam: 'Obediencia a Dios y entrada al paraiso.',
    budismo: 'Liberacion del sufrimiento y despertar.',
    catolicismo: 'Salvacion, santificacion y comunion con Dios.',
  },
]

// Cambia aqui textos, superficies y posiciones del bloque visual reutilizable.
// Si prefieres imagenes reales, agrega `image` a cada item.
const visualItems = [
  {
    kicker: 'Desde la izquierda',
    title: 'Panorama general',
    text: 'Un panel que introduce la amplitud del tema con presencia visual limpia y controlada.',
    enterFrom: 'left',
    positionClass: '-translate-x-[118%] -translate-y-[62%] lg:-translate-x-[128%] lg:-translate-y-[58%]',
    surfaceClass: 'bg-[linear-gradient(145deg,_rgba(125,211,252,0.34),_rgba(15,23,42,0.94))]',
  },
  {
    kicker: 'Desde la derecha',
    title: 'Diferencias clave',
    text: 'El segundo bloque ayuda a equilibrar la composición sin competir con el contenido principal.',
    enterFrom: 'right',
    positionClass: 'translate-x-[18%] -translate-y-[62%] lg:translate-x-[28%] lg:-translate-y-[58%]',
    surfaceClass: 'bg-[linear-gradient(145deg,_rgba(250,204,21,0.24),_rgba(15,23,42,0.95))]',
  },
  {
    kicker: 'Desde abajo',
    title: 'Lectura orientativa',
    text: 'La pieza inferior conecta el conjunto y genera una salida visual prolija en la sección.',
    enterFrom: 'bottom',
    positionClass: '-translate-x-1/2 translate-y-[2%] lg:-translate-x-1/2 lg:translate-y-[8%]',
    surfaceClass: 'bg-[linear-gradient(160deg,_rgba(148,163,184,0.24),_rgba(15,23,42,0.96),_rgba(34,211,238,0.16))]',
  },
]
</script>

<template>
  <SiteShell
    badge="Panorama religioso"
    title="Comparacion breve de religiones"
    description="Una vista sintetica y respetuosa para ubicar semejanzas generales y diferencias clave entre cristianismo, judaísmo, mormonismo, islam, budismo y catolicismo."
    quote="“Examinadlo todo; retened lo bueno.”"
    verse="1 Tesalonicenses 5:21"
    aside-label="Criterio de lectura"
    theme="cyan"
  >
    <template #actions>
      <RouterLink
        to="/"
        class="inline-flex items-center rounded-2xl bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
      >
        Volver al inicio
      </RouterLink>

      <a
        href="#resumen"
        class="inline-flex items-center rounded-2xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
      >
        Ver resumen
      </a>
    </template>

    <template #highlights>
      <div class="grid gap-4 sm:grid-cols-3">
        <article class="page-card p-5 backdrop-blur-md">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
            Enfoque
          </p>
          <p class="mt-3 text-sm leading-6 text-slate-200">
            Descripciones breves, lenguaje neutral y comparacion general sin tono polemico.
          </p>
        </article>

        <article class="page-card p-5 backdrop-blur-md">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
            Formato
          </p>
          <p class="mt-3 text-sm leading-6 text-slate-200">
            Tarjetas para lectura rapida y tabla para contrastar diferencias clave de un vistazo.
          </p>
        </article>

        <article class="page-card p-5 backdrop-blur-md">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
            Alcance
          </p>
          <p class="mt-3 text-sm leading-6 text-slate-200">
            Panorama introductorio pensado para orientar, no para agotar cada tradicion.
          </p>
        </article>
      </div>
    </template>

    <template #aside>
      <div class="space-y-4">
        <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Lenguaje
          </p>
          <p class="mt-2 text-sm leading-7 text-slate-200">
            Se prioriza una redaccion clara, sobria y respetuosa con cada tradicion religiosa.
          </p>
        </div>

        <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Lectura sugerida
          </p>
          <p class="mt-2 text-sm leading-7 text-slate-200">
            Primero revisa las tarjetas introductorias y luego la tabla comparativa para ubicar los contrastes principales.
          </p>
        </div>
      </div>
    </template>

    <template #content>
      <section id="resumen" class="section-shell">
        <div class="mx-auto max-w-6xl">
          <div class="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p class="section-heading text-cyan-200">
                Descripcion general
              </p>
              <h2 class="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Seis tradiciones presentadas en formato breve
              </h2>
            </div>

            <p class="max-w-2xl text-sm leading-7 text-slate-300">
              Cada tarjeta resume origen, texto de referencia, comprension de Dios o de lo sagrado y objetivo espiritual principal.
            </p>
          </div>

          <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <article
              v-for="religion in religiones"
              :key="religion.nombre"
            class="page-card hover-lift-soft rounded-[1.75rem] bg-white/10 transition hover:bg-white/15"
          >
              <div class="flex items-start justify-between gap-4">
                <div>
                  <p class="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
                    {{ religion.origen }}
                  </p>
                  <h3 class="mt-3 text-2xl font-bold text-white">
                    {{ religion.nombre }}
                  </h3>
                </div>
                <span class="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-200">
                  Vista general
                </span>
              </div>

              <p class="mt-5 text-sm leading-7 text-slate-200">
                {{ religion.descripcion }}
              </p>

              <dl class="mt-6 space-y-4 text-sm">
                <div class="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                  <dt class="font-semibold uppercase tracking-[0.16em] text-cyan-100">Dios o lo sagrado</dt>
                  <dd class="mt-2 leading-7 text-slate-200">{{ religion.dios }}</dd>
                </div>

                <div class="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                  <dt class="font-semibold uppercase tracking-[0.16em] text-cyan-100">Textos de referencia</dt>
                  <dd class="mt-2 leading-7 text-slate-200">{{ religion.texto }}</dd>
                </div>

                <div class="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                  <dt class="font-semibold uppercase tracking-[0.16em] text-cyan-100">Meta espiritual</dt>
                  <dd class="mt-2 leading-7 text-slate-200">{{ religion.meta }}</dd>
                </div>
              </dl>
            </article>
          </div>
        </div>
      </section>

      <section class="section-shell border-t-0 pt-0">
        <div class="mx-auto max-w-6xl">
          <div class="mb-8">
            <p class="section-heading text-amber-200">
              Diferencias clave
            </p>
            <h2 class="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Contrastes puntuales en una tabla clara
            </h2>
            <p class="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              La tabla resume aspectos recurrentes de comparacion. Se trata de una sintesis orientativa y no reemplaza el estudio detallado de cada tradicion.
            </p>
          </div>

          <div class="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 shadow-2xl shadow-slate-950/30">
            <div class="overflow-x-auto">
              <table class="min-w-full text-left">
                <thead class="bg-slate-950/50">
                  <tr>
                    <th class="px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Criterio</th>
                    <th class="px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">Cristianismo</th>
                    <th class="px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">Judaísmo</th>
                    <th class="px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">Mormonismo</th>
                    <th class="px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">Islam</th>
                    <th class="px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">Budismo</th>
                    <th class="px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">Catolicismo</th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="fila in diferencias"
                    :key="fila.criterio"
                    class="border-t border-white/10 align-top"
                  >
                    <th class="bg-slate-950/25 px-5 py-5 text-sm font-semibold text-white">
                      {{ fila.criterio }}
                    </th>
                    <td class="px-5 py-5 text-sm leading-7 text-slate-200">{{ fila.cristianismo }}</td>
                    <td class="px-5 py-5 text-sm leading-7 text-slate-200">{{ fila.judaísmo }}</td>
                    <td class="px-5 py-5 text-sm leading-7 text-slate-200">{{ fila.mormonismo }}</td>
                    <td class="px-5 py-5 text-sm leading-7 text-slate-200">{{ fila.islam }}</td>
                    <td class="px-5 py-5 text-sm leading-7 text-slate-200">{{ fila.budismo }}</td>
                    <td class="px-5 py-5 text-sm leading-7 text-slate-200">{{ fila.catolicismo }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <ScrollVisualSection
        eyebrow="Montaje visual"
        title="Una sección amplia que entra con scroll y queda centrada"
        description="Los tres bloques se desplazan con suavidad hasta una composición estable, sin romper el ritmo limpio ni la legibilidad del resto de la página."
        :items="visualItems"
      />
    </template>
  </SiteShell>
</template>
