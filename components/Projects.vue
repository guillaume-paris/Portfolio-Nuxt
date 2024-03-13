<script setup>
import { projects } from '@/data/projects';

</script>

<template>
  <section id="projects" class="min-h-screen flex justify-center items-center">
    <div class="flex flex-col gap-4">
      <h1 class="text-4xl font-bold">Projects</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="project in projects" :key="project.title" class="bg-custom-black rounded-2xl text-white">
          <nuxt-img :src="project.banner" alt="Project banner" class="project-banner" />
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>