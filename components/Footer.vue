<template>
  <section class="h-28 p-0 m-0 bg-custom-black flex flex-row justify-center text-white">
    <div class="flex flex-row justify-center items-center w-full gap-4">
      <NuxtLink to="https://www.instagram.com/guillaume_prs" class="flex flex-row gap-2 items-center">
        <font-awesome-icon :icon="['fab', 'instagram']" /><p>Instagram</p>
      </NuxtLink>
      <NuxtLink to="https://www.linkedin.com/in/guillaume-paris-epitech-student-developer/" class="flex flex-row gap-2 items-center">
        <font-awesome-icon :icon="['fab', 'linkedin']" /><p>LinkedIn</p>
      </NuxtLink>
      <NuxtLink to="https://github.com/guillaume-paris" class="flex flex-row gap-2 items-center">
        <font-awesome-icon :icon="['fab', 'github']" /><p>GitHub</p>
      </NuxtLink>
      </div>
    <div class="h-full w-full flex flex-col items-center justify-center">
      <span>Guillaume Paris's Portfolio</span>
      <span>© 2023 - Built with Nuxt.js</span>
    </div>
  </section>
</template>
