<script setup lang="ts">
import { ref } from 'vue'

const pwcCollapsed = ref(false);
const immopadCollapsed = ref(false);
const dennemeyerCollapsed = ref(false);
const juniorConseilTakerCollapsed = ref(false);

</script>

<template>
  <section id="experiences">
    <div class="flex flex-col gap-6 w-full">
      <h2 class="text-4xl font-bold">Experiences</h2>
      <span class="text-lg">To show you my experiences, here is a timeline representing my years of study at Epitech since I'm still in my fourth year.</span>
      <div class="flex flex-col items-center gap-8 relative">
        <span class="absolute bg-custom-dark w-3 h-full rounded-full z-0"></span>
        <div class="flex flex-col items-start text-start w-1/2 self-start relative px-4">
          <span class="absolute bg-custom-pink w-6 h-6 rounded-full -right-3 top-2 z-10"></span>
          <span class="text-2xl font-bold">First year</span>
          <span class="text-lg italic">no experience yet</span>
        </div>
        <div class="flex flex-col items-end text-end w-1/2 self-end relative px-4">
          <span class="absolute bg-custom-pink w-6 h-6 rounded-full -left-3 top-2 z-10"></span>
          <span class="text-2xl font-bold">Second year</span>
          <ul class="flex flex-col">
            <li class="text-lg">
              6 months full-time internship at PWC
              <br>
              <button v-show="!pwcCollapsed" class="hover:underline text-sm" @click="pwcCollapsed = !pwcCollapsed">
                <font-awesome-icon :icon="['fas', 'chevron-down']" class="pr-2 w-3 h-3" />read more about this experience
              </button>
              <Transition name="collapse">
                <span v-show="pwcCollapsed">
                  I was a full-stack developer intern at PWC, where I worked on a project to create a web application for the company's employees. I was in charge of the front-end part, which was developed with Angular. I also worked on the back-end part, which was developed with Java Spring Boot. I learned a lot about web development and the importance of teamwork.
                  <br><button class="hover:underline text-sm" @click="pwcCollapsed = !pwcCollapsed">
                    <font-awesome-icon :icon="['fas', 'chevron-up']" class="pr-2 w-3 h-3" />read less
                  </button>
                </span>
              </Transition>
            </li>
          </ul>
        </div>
        <div class="flex flex-col items-start text-start w-1/2 self-start relative px-4">
          <span class="absolute bg-custom-pink w-6 h-6 rounded-full -right-3 top-2 z-10"></span>
          <span class="text-2xl font-bold">Third year</span>
          <ul class="flex flex-col list-disc gap-3">
            <li class="text-lg">
              6 months part-time (2 days per week) internship at <NuxtLink to="https://immopad.com/">ImmoPad</NuxtLink><br>
              <button v-show="!immopadCollapsed" class="hover:underline text-sm" @click="immopadCollapsed = !immopadCollapsed">
                <font-awesome-icon :icon="['fas', 'chevron-down']" class="pr-2 w-3 h-3" />read more about this experience
              </button>
              <Transition name="collapse">
                <span v-show="immopadCollapsed">
                  I was a full-stack developer intern at PWC, where I worked on a project to create a web application for the company's employees. I was in charge of the front-end part, which was developed with Angular. I also worked on the back-end part, which was developed with Java Spring Boot. I learned a lot about web development and the importance of teamwork.
                  <br><button class="underline text-sm" @click="immopadCollapsed = !immopadCollapsed">
                    <font-awesome-icon :icon="['fas', 'chevron-up']" class="pr-2 w-3 h-3" />read less
                  </button>
                </span>
              </Transition>
            </li>
            <li class="text-lg">
              4 months full-time internship at Dennemeyer
              <button v-show="!dennemeyerCollapsed" class="hover:underline text-sm" @click="dennemeyerCollapsed = !dennemeyerCollapsed">
                <font-awesome-icon :icon="['fas', 'chevron-down']" class="pr-2 w-3 h-3" />read more about this experience
              </button>
              <Transition name="collapse">
                <span v-show="dennemeyerCollapsed">
                  I was a full-stack developer intern at PWC, where I worked on a project to create a web application for the company's employees. I was in charge of the front-end part, which was developed with Angular. I also worked on the back-end part, which was developed with Java Spring Boot. I learned a lot about web development and the importance of teamwork.
                  <br><button class="underline text-sm" @click="dennemeyerCollapsed = !dennemeyerCollapsed">
                    <font-awesome-icon :icon="['fas', 'chevron-up']" class="pr-2 w-3 h-3" />read less
                  </button>
                </span>
              </Transition>
            </li>
            <li class="text-lg">
              1 year Regional Director and Project Manager at Junior Conseil Taker
              <button v-show="!juniorConseilTakerCollapsed" class="hover:underline text-sm" @click="juniorConseilTakerCollapsed = !juniorConseilTakerCollapsed">
                <font-awesome-icon :icon="['fas', 'chevron-down']" class="pr-2 w-3 h-3" />read more about this experience
              </button>
              <Transition name="collapse">
                <span v-show="juniorConseilTakerCollapsed">
                  I was a full-stack developer intern at PWC, where I worked on a project to create a web application for the company's employees. I was in charge of the front-end part, which was developed with Angular. I also worked on the back-end part, which was developed with Java Spring Boot. I learned a lot about web development and the importance of teamwork.
                  <br><button class="underline text-sm" @click="juniorConseilTakerCollapsed = !juniorConseilTakerCollapsed">
                    <font-awesome-icon :icon="['fas', 'chevron-up']" class="pr-2 w-3 h-3" />read less
                  </button>
                </span>
              </Transition>
            </li>
          </ul>
        </div>
        <div class="flex flex-col items-end text-end w-1/2 self-end relative px-4">
          <span class="absolute bg-custom-pink w-6 h-6 rounded-full -left-3 top-2 z-10"></span>
          <span class="text-2xl font-bold">Fourth year</span>
          <span class="text-lg italic">international year</span>
        </div>
        <div class="flex flex-col items-start text-start w-1/2 self-start relative px-4">
          <span class="absolute bg-custom-pink w-6 h-6 rounded-full -right-3 top-2 z-10"></span>
          <span class="text-2xl font-bold">Fifth year</span>
          <ul class="flex flex-col list-disc">
            <li class="text-lg">
              <font-awesome-icon :icon="['fas', 'calendar-days']" /> <span class="italic">upcoming</span> : 6 months part-time <br>(3days per week)
            </li>
            <li class="text-lg">
              <font-awesome-icon :icon="['fas', 'calendar-days']" /> <span class="italic">upcoming</span> : 6 months full-time 
            </li>
          </ul>
        </div>
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
  max-height: 400px;
  opacity: 1;
}
</style>