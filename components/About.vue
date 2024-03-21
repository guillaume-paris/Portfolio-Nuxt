<script setup lang="ts">
import { ref } from 'vue';

const interestCollapsed = ref(false);
const sectorCollapsed = ref(false);
const personalCollapsed = ref(false);

const questionsAnswers = ref([
  {
    question: "What interests me professionally?",
    answer: "I'm currently on an Erasmus exchange for one year at Hanzehoesgchool, part of my studies at Epitech. During my first semester, I had the opportunity to study IT Management and learn more about Agile methods and how to structure a company, a team, or a project. Additionally, my second semester focuses on AI & your future profession, allowing me to explore the future world: machine learning, data analysis, etc. Acquiring such knowledge is a real asset for me, which I aim to use in my future job.",
    collapsed: true
  },
  {
    question: "In what sector do I see myself working?",
    answer: "I don't necessarily have a preferred sector, but a web project incorporating AI and Agile management methods would be the technical specifics I'm looking for. Of course, at the beginning of my career, I mainly seek to acquire new knowledge and experiences. A typical project would be an internal application within a company utilizing artificial intelligence.",
    collapsed: true
  },
  {
    question: "What interests me personally? Hobbies, sports?",
    answer: "Despite being 22 years old, I'm interested in everything! I love learning new things and need regular challenges to stay motivated. I enjoy sports as it provides a healthy lifestyle, such as tennis/padel/table tennis, basketball, and recently, roundnet! I also love traveling and discovering new things, but I also cherish my personal comfort.",
    collapsed: true
  }
]);

</script>

<template>
  <section id="about" class="min-h-screen flex justify-center items-center">
    <div>
      <h2 class="text-4xl font-bold">About Me</h2>
      <div class="flex flex-col gap-8 pt-6">
        <div class="flex flex-col gap-2">
          <span class="text-xl text-justify">
            Hello, my name is Guillaume Paris, and I'm currently in my fourth year at Epitech in the Grande Ecole program. I'm in my first year of master's studies to obtain my degree in Expert Software Engineering (Degree recognized by the State and RNCP level 7 accredited).
          </span>
          <span class="text-xl text-justify">
            During my years of study, I naturally gravitated towards web development, especially front-end, through my first internship at PWC. In frontend development, I enjoy the interactivity that can be achieved, and I am quite perfectionistic, striving for the best possible outcome.
          </span>
          <span class="text-xl text-justify">
            This website serves as my portfolio, allowing me to create a more comprehensive CV and showcase my skills while exploring a new technology (Nuxt3).
          </span>
        </div>
        <template v-for="questionAnswer in questionsAnswers" :key="index">
          <div class="flex flex-col gap-2 w-full px-6 py-4 bg-custom-dark text-white rounded-xl cursor-pointer" @click="questionAnswer.collapsed = !questionAnswer.collapsed">
            <div class="flex flex-row justify-between items-center">
              <span class="text-2xl font-bold underline underline-offset-4 cursor-text">{{ questionAnswer.question }}</span>
              <font-awesome-icon :icon="questionAnswer.collapsed ? ['fas', 'chevron-down'] : ['fas', 'chevron-up']" />
            </div>
            <Transition name="collapse">
              <span v-show="!questionAnswer.collapsed" class="text-lg text-justify cursor-text">
                {{ questionAnswer.answer }}
              </span>
            </Transition>
          </div>
        </template>
        <span class="self-center flex flex-row gap-4 w-min justify-center items-center px-6 py-4 bg-custom-dark text-white rounded-xl cursor-pointer">
          <font-awesome-icon :icon="['fas', 'file-arrow-down']" />
          <span class="text-2xl font-bold text-nowrap">
            Download my resume!
          </span>
          <font-awesome-icon :icon="['fas', 'file-arrow-down']" />
        </span>
      </div>
    </div>
  </section>
</template>

<style>
.collapse-enter-active, .collapse-leave-active {
  transition: max-height 0.5s ease, opacity 0.5s ease;
  overflow: hidden;
}
.collapse-enter-from, .collapse-leave-to {
  line-clamp: 1;
  max-height: 0;
  opacity: 0;
}
.collapse-enter-to, .collapse-leave-from {
  line-clamp: initial;
  max-height: 400px; /* Ajustez cette valeur */
  opacity: 1;
}
</style>