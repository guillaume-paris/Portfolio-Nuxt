<script setup lang="ts">
import { ref } from 'vue';
import { projectsData } from '~/data/projects';
import type { Project } from '~/types/projects';

const projects = ref<Project[]>(projectsData);
</script>

<template>
  <section id="projects">
    <div class="flex flex-col gap-8">
      <h1 class="text-4xl font-bold">Projects</h1>
      <div class="grid grid-cols-1 gap-8">
        <div v-for="project in projects" :key="project.title" class="bg-custom-black rounded-2xl text-white overflow-hidden shadow-2xl">
          <div class="flex relative">
            <nuxt-img :src="project.banner" alt="Project banner" class="project-banner object-cover w-full h-52" />
            <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
            <h3 class="absolute bottom-3 left-3 z-50 text-2xl font-bold text-white">{{ project.title }}</h3>
          </div>
          <template v-if="project.collapsed === false">
            <div class="px-6 py-3 flex flex-col items-start">
              <p class="line-clamp-2 text-lg"><span class="font-semibold">Description :</span> {{ project.description }}</p>
              <button @click="project.collapsed = true" class="text-white px-4 py-2 self-center hover:underline">Read more</button>
            </div>
          </template>
          <template v-else>
            <div class="flex flex-col px-6 py-3 gap-4">
              <p class="text-lg"><span class="font-semibold">Description :</span> {{ project.description }}</p>
              <p class="text-lg"><span class="font-semibold">Technology used :</span> {{ project.technologyUsed }}</p>
              <NuxtLink class="text-lg text-center mt-3" :to="project.link">{{ project.link }}</NuxtLink>
            </div>
            <div class="flex justify-center items-center p-3">
              <button @click="project.collapsed = false" class="text-white px-4 py-2 self-center hover:underline">Read less</button>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>