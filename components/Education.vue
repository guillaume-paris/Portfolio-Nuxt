<script setup lang="ts">

const educations = [
  {
    title: 'Epitech 2020 - 2025',
    description: 'Learn of basic programming',
    banner: "/images/epitech_brand_logo.png",
    diploma: "Information Technology Expert",
    materials: ['C for the first year', 'C++ for the second', 'Javascript, python for the third']
  },
  {
    title: 'Hanzehogeschool 2023 - 2024',
    description: 'First semester: IT Management',
    banner: "/images/hanze_brand_logo.png",
    diploma: "",
    materials: ['Second semester: AI & your future profession']
  }
]

</script>

<template>
  <section id="education">
    <h2 class="text-4xl font-bold">Education</h2>
    <div class="grid grid-cols-1 2xl:grid-cols-2 gap-4 pt-6">
      <div v-for="education in educations" :key="education.title" class="flex flex-col md:flex-row bg-custom-green rounded-2xl p-4 gap-4">
        <nuxt-img :src="education.banner" alt="Education banner" class="object-contain w-full md:w-1/2" />
        <div class="flex flex-col justify-start gap-4">
          <span class="text-2xl font-bold">{{ education.title }}</span>
          <span v-if="education.diploma" class="text-lg"><p class="underline">Diploma :</p> {{ education.diploma }}</span>
          <ul class="flex flex-col">
            <li class="text-lg">
              <span>{{ education.description }}</span>
              <li v-for="material in education.materials" :key="material" class="text-lg">
                <span>{{ material }}</span>
              </li>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
