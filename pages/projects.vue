<script setup lang="ts">

import Project from "~/components/Project.vue";

const projectArray = [
  {
    name: "Nuxt Starter",
    description: "A Nuxt starter template with TailwindCSS, TypeScript, i18n, and more.",
    image: "/assets/helpr.png",
    link: "https://www.helpr.tech/"
  },
  {
    name: "Nuxt Starter",
    description: "A Nuxt starter template with TailwindCSS, TypeScript, i18n, and more.",
    image: "/assets/helpr.png",
    link: "https://www.helpr.tech/"
  },
  {
    name: "Nuxt Starter",
    description: "A Nuxt starter template with TailwindCSS, TypeScript, i18n, and more.",
    image: "/assets/helpr.png",
    link: "https://www.helpr.tech/"
  }
]

definePageMeta({
  title: "Projects",
  name: "Projects",
  path: "/projects",
  description: "Projects page",
  keywords: "Projects by Johann Cavallucci",
});

</script>

<template>
  <div class="pt-24 place-items-center z-9">
    <h1 class="acorn p-5 font-bold text-5xl text-red-800 text-center">My Projects</h1>
    <div class="grid grid-cols-2 mx-auto p-2 max-w-4xl place-items-center">
      <Project
          v-for="project in projectArray"
          :key="project.name"
          :item="project"
          class="w-11/12 p-4 cursor-pointer btn-front mt-8"
      />
    </div>
  </div>

</template>


<style scoped>
</style>