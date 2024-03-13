<template>
  <nav class="fixed top-0 left-0 h-full w-32 flex flex-col">
    <div class="pl-2 py-2 grid grid-flow-row justify-stretch gap-2 h-full">
      <a href="#home" @click="event => scrollToSection('home', event)" class="flex items-center gap-2">
        <span :class="selectedTab === 'home' ? 'bg-custom-dark' : 'bg-custom-green'" class="h-full w-2 rounded-full"></span>
        Home
      </a>
      <a href="#about" @click="event => scrollToSection('about', event)" class="flex items-center gap-2">
        <span :class="selectedTab === 'about' ? 'bg-custom-dark' : 'bg-custom-green'" class="h-full w-2 rounded-full"></span>
        About
      </a>
      <a href="#education" @click="event => scrollToSection('education', event)" class="flex items-center gap-2">
        <span :class="selectedTab === 'education' ? 'bg-custom-dark' : 'bg-custom-green'" class="h-full w-2 rounded-full"></span>
        Education
      </a>
      <a href="#experiences" @click="event => scrollToSection('experiences', event)" class="flex items-center gap-2">
        <span :class="selectedTab === 'experiences' ? 'bg-custom-dark' : 'bg-custom-green'" class="h-full w-2 rounded-full"></span>
        Experience
      </a>
      <a href="#projects" @click="event => scrollToSection('projects', event)" class="flex items-center gap-2">
        <span :class="selectedTab === 'projects' ? 'bg-custom-dark' : 'bg-custom-green'" class="h-full w-2 rounded-full"></span>
        Projects
      </a>
      <a href="#contact" @click="event => scrollToSection('contact', event)" class="flex items-center gap-2">
        <span :class="selectedTab === 'contact' ? 'bg-custom-dark' : 'bg-custom-green'" class="h-full w-2 rounded-full"></span>
        Contact
      </a>
    </div>
  </nav>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue';

const selectedTab = ref('');

onMounted(() => {
  if (window.location.hash) {
    selectedTab.value = window.location.hash.slice(1);
  }
});

const scrollToSection = (sectionId, event) => {
  event.preventDefault();
  selectedTab.value = sectionId;

  nextTick(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState({}, '', '#' + sectionId);
    }
  });
};
</script>
