<script setup lang="ts">

const profile = {
  profileImage: '/images/profile_image.jpg',
}
</script>

<template>
    <section id="home">
      <div class="flex flex-col lg:flex-row min-h-screen justify-center items-center gap-4">
        <nuxt-img :src="profile.profileImage" alt="Profile image" class="object-fill w-1/2 rounded-3xl shadow-2xl" />
        <div class="flex flex-col gap-4 p-8">
          <span class="text-6xl font-title font-bold">Hi !</span>
          <span class="text-6xl font-title">
            I'm<span class="font-bold"> Guillaume</span>, a Web Developer
          </span>
          <span class="font-body text-xl">Discover the path and abilities of myself, a student in Software Engineering at Epitech. Currently in my fourth year of studies, I have a strong passion for continuous learning and exploring new concepts.</span>
        </div>
      </div>
    </section>
  </template>
  