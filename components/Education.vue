<script setup lang="ts">

const educations = [
  {
    title: 'Epitech',
    year: '2020 - 2025',
    description: 'Learn of basic programming',
    banner: "/images/epitech_brand_logo.png",
    diploma: "Information Technology Expert",
    materials: [{
      title: 'First year:',
      content: 'language C',
    },
    {
      title: 'Second year:',
      content: 'language C++',
    },
    {
      title: 'Third year:',
      content: 'language Javascript, python',
    }]
  },
  {
    title: 'Hanzehogeschool',
    year: '2023 - 2024',
    description: 'Erasmus exchange program in the Netherlands',
    banner: "/images/hanze_brand_logo.png",
    diploma: "",
    materials: [{
      title: 'First semester:',
      content: 'IT Management (Agile, SCRUM, Lean, etc...)',
    },
    {
      title: 'Second semester:',
      content: 'AI & your future profession (Machine learning, Data science, etc...)',
    }
  ]
  }
]

</script>

<template>
  <section id="education">
    <h2 class="text-4xl font-bold">Education</h2>
    <div class="grid grid-cols-1 2xl:grid-cols-2 gap-4 pt-6">
      <div v-for="education in educations" :key="education.title" class="flex flex-col lg:flex-row xl:flex-col bg-custom-green shadow-xl rounded-2xl p-8 gap-4">
        <nuxt-img :src="education.banner" alt="Education banner" class="object-contain w-full lg:w-1/2 xl:w-full" />
        <div class="flex flex-col justify-start gap-4 overflow-hidden">
          <span class="text-3xl font-bold"><p class="truncate">{{ education.title }}</p>{{ education.year }}</span>
          <span v-if="education.diploma" class="text-lg"><p class="underline">Diploma :</p> {{ education.diploma }}</span>
          <ul class="flex flex-col">
            <span class="text-lg font-semibold pb-2">{{ education.description }}</span>
            <li v-for="material in education.materials" :key="material.title" class="text-lg">
              <span><p class="underline inline">{{ material.title }}</p> {{ material.content }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
