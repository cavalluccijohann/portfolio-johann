<script setup lang="ts">
import Project from "~/components/Project.vue";

const projectArray = [
  {
    name: "Nuxt Starter",
    description: "A Nuxt starter template with TailwindCSS, TypeScript, i18n, and more.",
    image: "/assets/helpr.webp",
    link: "https://www.helpr.tech/",
  },
  {
    name: "Nuxt Starter",
    description: "A Nuxt starter template with TailwindCSS, TypeScript, i18n, and more.",
    image: "/assets/currencia.webp",
    link: "https://currencia.hrcd.fr/",
  },
  {
    name: "Nuxt Starter",
    description: "A Nuxt starter template with TailwindCSS, TypeScript, i18n, and more.",
    image: "/assets/mockline.webp",
    link: "https://www.mockline.dev/",
  },
  {
    name: "Nuxt Starter",
    description: "A Nuxt starter template with TailwindCSS, TypeScript, i18n, and more.",
    image: "/assets/portfolio.png",
    link: "https://johanncvl.com/",
  },
  {
    name: "Nuxt Starter",
    description: "A Nuxt starter template with TailwindCSS, TypeScript, i18n, and more.",
    image: "/assets/folioMagazine.webp",
    link: "https://folio-magazine.vercel.app/",
  },
];
</script>

<template>
  <div class="pt-5 md:pt-24 place-items-center z-9">
    <h1 class="acorn p-5 font-bold text-5xl text-text-color-primary text-center">
      <ContentSlot :use="$slots.title" />
    </h1>
    <h3 class="text-color-text font-medium text-center z-9 px-5">
      <ContentSlot :use="$slots.subtitle" />
    </h3>
    <div class="grid md:grid-cols-2 grid-cols-1 mx-auto p-2 max-w-4xl place-items-center pb-24">
      <Project
        v-for="project in projectArray"
        :key="project.name"
        :item="project"
        class="w-10/12 md:w-11/12 p-4 cursor-pointer mt-8 transform hover:scale-105 transition duration-300 ease-in-out"
      />
    </div>
  </div>
</template>

<style scoped></style>
