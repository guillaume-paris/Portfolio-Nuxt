<template>
  <nav class="fixed top-0 left-0 h-full w-32 flex flex-col z-10">
    <div class="pl-2 py-2 grid grid-flow-row gap-2 h-full bg-gradient-to-r from-custom-white from-30% to-transparent">
      <a href="#home" @click.prevent="scrollToSection('home')" class="flex items-center gap-2 cursor-pointer">
        <span :class="selectedTab === 'home' ? 'bg-custom-dark' : 'bg-custom-green'" class="h-full w-2 rounded-full"></span>
        Home
      </a>
      <a href="#about" @click.prevent="scrollToSection('about')" class="flex items-center gap-2 cursor-pointer">
        <span :class="selectedTab === 'about' ? 'bg-custom-dark' : 'bg-custom-green'" class="h-full w-2 rounded-full"></span>
        About
      </a>
      <a href="#education" @click.prevent="scrollToSection('education')" class="flex items-center gap-2 cursor-pointer">
        <span :class="selectedTab === 'education' ? 'bg-custom-dark' : 'bg-custom-green'" class="h-full w-2 rounded-full"></span>
        Education
      </a>
      <a href="#experiences" @click.prevent="scrollToSection('experiences')" class="flex items-center gap-2 cursor-pointer">
        <span :class="selectedTab === 'experiences' ? 'bg-custom-dark' : 'bg-custom-green'" class="h-full w-2 rounded-full"></span>
        Experience
      </a>
      <a href="#projects" @click.prevent="scrollToSection('projects')" class="flex items-center gap-2 cursor-pointer">
        <span :class="selectedTab === 'projects' ? 'bg-custom-dark' : 'bg-custom-green'" class="h-full w-2 rounded-full"></span>
        Projects
      </a>
      <a href="#contact" @click.prevent="scrollToSection('contact')" class="flex items-center gap-2 cursor-pointer">
        <span :class="selectedTab === 'contact' ? 'bg-custom-dark' : 'bg-custom-green'" class="h-full w-2 rounded-full"></span>
        Contact
      </a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const selectedTab = ref('home');

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState({}, '', '#' + sectionId);
    selectedTab.value = sectionId;
  }
};

const handleScroll = () => {
  const sections = ['home', 'about', 'education', 'experiences', 'projects', 'contact'];
  let currentSection = 'home';
  for (const id of sections) {
    const section = document.getElementById(id);
    const rect = section.getBoundingClientRect();
    const top = rect.top + window.scrollY - 50;
    if (window.scrollY >= top) {
      currentSection = id;
    }
  }
  selectedTab.value = currentSection;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>