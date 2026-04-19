<script setup>
import { ref, watch, nextTick } from 'vue';
import { 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  Sun, 
  Moon, 
  BookOpen, 
  Quote, 
  Sparkles,
  Layers,
  MousePointer2
} from 'lucide-vue-next';

const currentIndex = ref(0);
const isFlipped = ref(false);
const darkMode = ref(true);
const direction = ref('');

const scrollRef = ref(null);
const touchStart = ref(null);
const touchEnd = ref(null);

const cards = [
  { 
    ref: "Salmos 139:7-10", 
    theme: "Presencia de Dios", 
    text: "¿A dónde me iré de tu Espíritu? ¿Y a dónde huiré de tu presencia? Si subiere a los cielos, allí estás tú; y si en el Seol hiciere mi estrado, he aquí, allí tú estás. Si tomare las alas del alba y habitare en el extremo del mar, aun allí me guiará tu mano, y me asirá tu diestra." 
  },
  { 
    ref: "Romanos 8:37-39", 
    theme: "Victoria en Cristo", 
    text: "Antes, en todas estas cosas somos más que vencedores por medio de aquel que nos amó. Por lo cual estoy seguro de que ni la muerte, ni la vida, ni ángeles, ni principados, ni potestades, ni lo presente, ni lo por venir, ni lo alto, ni lo profundo, ni ninguna otra cosa creada nos podrá separar del amor de Dios, que es en Cristo Jesús Señor nuestro." 
  },
  { 
    ref: "Isaías 40:28-31", 
    theme: "Nuevas Fuerzas", 
    text: "¿No has sabido, no has oído que el Dios eterno es Jehová, el cual creó los confines de la tierra? No desfallece, ni se fatiga con cansancio, y su entendimiento no hay quien lo alcance. El da esfuerzo al cansado, y multiplica las fuerzas al que no tiene ningunas. Los muchachos se fatigan y se cansan, los jóvenes flaquean y caen; pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán." 
  },
  { 
    ref: "Filipenses 2:5-8", 
    theme: "Ejemplo de Humildad", 
    text: "Haya, pues, en vosotros este sentir que hubo también en Cristo Jesús, el cual, siendo en forma de Dios, no estimó el ser igual a Dios como cosa a que aferrarse, sino que se despojó a sí mismo, tomando forma de siervo, hecho semejante a los hombres; y estando en la condición de hombre, se humilló a sí mismo, haciéndose obediente hasta la muerte, y muerte de cruz." 
  },
  { 
    ref: "Salmos 91:1-4", 
    theme: "Protección Divina", 
    text: "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente. Diré yo a Jehová: Esperanza mía, y castillo mío; mi Dios, en quien confiaré. El te librará del lazo del cazador, de la peste destructora. Con sus plumas te cubrirá, y debajo de sus alas estarás seguro; escudo y adarga es su verdad." 
  },
  { 
    ref: "Hebreos 12:1-2", 
    theme: "La Carrera de la Fe", 
    text: "Por tanto, nosotros también, teniendo en derredor nuestro tan grande nube de testigos, despojémonos de todo peso y del pecado que nos asedia, y corramos con paciencia la carrera que tenemos por delante, puestos los ojos en Jesús, el autor y consumador de la fe, el cual por el gozo puesto delante de él sufrió la cruz, menospreciando el oprobio, y se sentó a la diestra del trono de Dios." 
  },
  { 
    ref: "Efesios 2:4-7", 
    theme: "Gracia y Misericordia", 
    text: "Pero Dios, que es rico en misericordia, por su gran amor con que nos amó, aun estando nosotros muertos en pecados, nos dio vida juntamente con Cristo (por gracia sois salvos), y juntamente con él nos resucitó, y asimismo nos hizo sentar en los lugares celestiales con Cristo Jesús, para mostrar en los siglos venideros las abundantes riquezas de su gracia en su bondad para con nosotros en Cristo Jesús." 
  },
  { 
    ref: "2 Corintios 4:16-18", 
    theme: "Renovación Diaria", 
    text: "Por tanto, no desmayamos; antes aunque este nuestro hombre exterior se va desgastando, el interior no obstante se renueva de día en día. Porque esta leve tribulación momentánea produce en nosotros un cada vez más excelente y eterno peso de gloria; no mirando nosotros las cosas y las que no se ven; pues las cosas que se ven son temporales, pero las que no se ven son eternas." 
  },
  { 
    ref: "Colosenses 3:12-14", 
    theme: "El Vínculo Perfecto", 
    text: "Vestíos, pues, como escogidos de Dios, santos y amados, de entrañable misericordia, de benignidad, de humildad, de mansedumbre, de paciencia; soportándoos unos a otros, y perdonándoos unos a otros si alguno tuviere queja contra otro. De la manera que Cristo os perdonó, así también hacedlo vosotros. Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto." 
  },
  { 
    ref: "Apocalipsis 22:12-14", 
    theme: "La Promesa", 
    text: "He aquí yo vengo pronto, y mi galardón conmigo, para recompensar a cada uno según sea su obra. Yo soy el Alfa y la Omega, el principio y el fin, el primero y el último. Bienaventurados los que lavan sus ropas, para tener derecho al árbol de la vida, y para entrar por las puertas en la ciudad." 
  }
];

watch(currentIndex, () => {
  nextTick(() => {
    if (scrollRef.value) {
      scrollRef.value.scrollTop = 0;
    }
  });
});

const handleNext = () => {
  if (direction.value) return;
  direction.value = 'next';
  isFlipped.value = false;
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % cards.length;
    direction.value = '';
  }, 450);
};

const handlePrev = () => {
  if (direction.value) return;
  direction.value = 'prev';
  isFlipped.value = false;
  setTimeout(() => {
    currentIndex.value = (currentIndex.value - 1 + cards.length) % cards.length;
    direction.value = '';
  }, 450);
};

const onTouchStartLocal = (e) => {
  touchStart.value = e.targetTouches[0].clientX;
};

const onTouchMoveLocal = (e) => {
  touchEnd.value = e.targetTouches[0].clientX;
};

const onTouchEndLocal = () => {
  if (!touchStart.value || !touchEnd.value) return;
  const distance = touchStart.value - touchEnd.value;
  if (distance > 50) handleNext();
  if (distance < -50) handlePrev();
  touchStart.value = null;
  touchEnd.value = null;
};
</script>

<template>
  <div :class="['relative w-[95%] md:w-full max-w-5xl mx-auto h-[650px] flex flex-col transition-all duration-700 overflow-hidden rounded-[2.5rem] shadow-2xl my-20 border', darkMode ? 'bg-[#0b1120] text-slate-200 border-slate-800' : 'bg-slate-50 text-slate-800 border-slate-200']">
    
    <!-- Elementos decorativos de fondo -->
    <div :class="['absolute top-[-10%] left-[-10%] w-[60%] h-[50%] rounded-full blur-[120px] opacity-15 pointer-events-none', darkMode ? 'bg-indigo-600' : 'bg-indigo-300']"></div>
    <div :class="['absolute bottom-[-10%] right-[-10%] w-[60%] h-[50%] rounded-full blur-[120px] opacity-15 pointer-events-none', darkMode ? 'bg-violet-600' : 'bg-violet-300']"></div>

    <!-- Header Minimalista -->
    <header :class="['relative z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md border-b', darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white/60 border-slate-200']">
      <div class="flex items-center gap-3">
        <div class="p-2 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-600/30">
          <BookOpen :size="20" class="text-white" />
        </div>
        <div>
          <h1 class="font-bold text-xs tracking-widest leading-none">BIBLIA RV1960</h1>
          <p class="text-[9px] opacity-50 tracking-[0.2em] mt-1 uppercase">Meditación Diaria</p>
        </div>
      </div>
      <div class="flex items-center gap-1">
        <button 
          @click="darkMode = !darkMode" 
          :class="['p-2.5 rounded-xl transition-all hover:bg-white/10 active:scale-90', darkMode ? 'text-amber-400' : 'text-indigo-600']"
        >
          <Sun v-if="darkMode" :size="20" />
          <Moon v-else :size="20" />
        </button>
        <button 
          @click="() => { currentIndex = 0; isFlipped = false; }" 
          class="p-2.5 text-slate-500 hover:text-indigo-500 transition-colors"
        >
          <RotateCcw :size="18" />
        </button>
      </div>
    </header>

    <!-- Área de Tarjeta Principal -->
    <main 
      class="flex-grow flex flex-col items-center justify-center p-6 touch-none relative z-10"
      @touchstart="onTouchStartLocal"
      @touchmove="onTouchMoveLocal"
      @touchend="onTouchEndLocal"
    >
      <div class="relative w-[95%] md:w-[95%] h-[50vh] perspective-3000">
        <div 
          :class="['relative w-full h-full transition-all duration-700 transform-style-3d cursor-pointer', 
            isFlipped ? 'rotate-y-180' : '',
            direction === 'next' ? 'page-turn-left' : '',
            direction === 'prev' ? 'page-turn-right' : ''
          ]"
          @click="() => { if(!direction) isFlipped = !isFlipped; }"
        >
          
          <!-- CARA FRONTAL (Referencia) -->
          <div :class="['absolute inset-0 backface-hidden rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center p-8 border transition-all duration-500', 
              darkMode ? 'bg-slate-900/90 border-slate-700/50' : 'bg-white border-slate-100', 
              isFlipped ? 'pointer-events-none' : 'z-10'
            ]">
            <div class="absolute top-10 flex items-center gap-2 opacity-30">
              <Sparkles :size="14" class="text-indigo-500" />
              <span class="text-[10px] font-bold tracking-[0.4em] uppercase">Palabra Viva</span>
            </div>
            
            <div class="mb-10 text-indigo-500/10">
              <Layers :size="120" :strokeWidth="0.5" />
            </div>

            <h2 :class="['text-4xl md:text-5xl font-black mb-6 text-center leading-tight tracking-tight', darkMode ? 'text-white' : 'text-slate-900']" style="font-family: 'Times New Roman', Times, serif;">
              {{ cards[currentIndex].ref }}
            </h2>
            
            <div class="px-6 py-2 bg-indigo-600 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-indigo-600/20">
              {{ cards[currentIndex].theme }}
            </div>

            <div class="absolute bottom-10 flex flex-col items-center gap-2 text-slate-500 text-[10px] tracking-widest opacity-40">
              <p class="flex items-center gap-2 uppercase font-bold"><MousePointer2 :size="12" /> Toca para leer</p>
            </div>
          </div>

          <!-- CARA POSTERIOR (Versículo) -->
          <div :class="['absolute inset-0 backface-hidden rounded-[2.5rem] shadow-2xl flex flex-col rotate-y-180 border transition-all duration-500 overflow-hidden', 
              darkMode ? 'bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-slate-700/50' : 'bg-white border-slate-100', 
              !isFlipped ? 'pointer-events-none' : 'z-10'
            ]">
            
            <!-- Contenedor con Scroll -->
            <div 
              ref="scrollRef"
              class="flex-grow overflow-y-auto scrollbar-hide flex flex-col items-center px-8 py-12 md:px-12 md:py-16"
            >
              
              <div class="opacity-10 mb-6">
                <Quote :size="40" :class="darkMode ? 'text-white' : 'text-indigo-900'" />
              </div>
              
              <p :class="['text-xl md:text-2xl leading-relaxed italic text-justify transition-colors duration-500', darkMode ? 'text-indigo-50' : 'text-slate-800']" style="font-family: 'Times New Roman', Times, serif; text-justify: inter-word;">
                "{{ cards[currentIndex].text }}"
              </p>

              <div :class="['mt-10 pt-6 border-t w-full text-center', darkMode ? 'border-indigo-400/10' : 'border-indigo-900/10']">
                <span :class="['font-bold text-xs tracking-[0.3em] uppercase', darkMode ? 'text-indigo-400' : 'text-indigo-700']">
                  {{ cards[currentIndex].ref }}
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </main>

    <!-- Controles y Progreso -->
    <footer :class="['relative z-50 px-8 pt-6 pb-12 transition-all duration-500 border-t', darkMode ? 'bg-[#0f172a]/80 border-slate-800/60' : 'bg-white border-slate-100 shadow-[0_-15px_40px_rgba(0,0,0,0.04)]']">
      <div class="max-w-2xl mx-auto flex items-center justify-between">
        <button 
          @click="handlePrev" 
          :class="['w-12 h-12 flex items-center justify-center rounded-2xl transition-all active:scale-90', darkMode ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-500 hover:text-indigo-500']"
        >
          <ChevronLeft :size="24" />
        </button>
        
        <div class="flex flex-col items-center gap-3">
          <span class="text-[9px] font-black tracking-[0.3em] opacity-30 uppercase">
            {{ currentIndex + 1 }} de {{ cards.length }}
          </span>
          <div :class="['w-32 h-1 rounded-full overflow-hidden', darkMode ? 'bg-slate-800' : 'bg-slate-100']">
            <div 
              class="bg-indigo-600 h-full transition-all duration-700 ease-out shadow-[0_0_12px_rgba(79,70,229,0.5)]" 
              :style="{ width: `${((currentIndex + 1) / cards.length) * 100}%` }" 
            ></div>
          </div>
        </div>

        <button 
          @click="handleNext" 
          class="w-12 h-12 flex items-center justify-center bg-indigo-600 text-white rounded-2xl shadow-xl shadow-indigo-600/20 active:scale-95 transition-transform"
        >
          <ChevronRight :size="24" />
        </button>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.perspective-3000 { perspective: 3000px; }
.transform-style-3d { transform-style: preserve-3d; }
.backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
.rotate-y-180 { transform: rotateY(180deg); }
.scrollbar-hide::-webkit-scrollbar { display: none; }

.page-turn-left {
  transform-origin: left center;
  transform: rotateY(-105deg) translateX(-100%) scale(0.9);
  opacity: 0;
  transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-turn-right {
  transform-origin: right center;
  transform: rotateY(105deg) translateX(100%) scale(0.9);
  opacity: 0;
  transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
