<script setup lang="ts">
definePageMeta({
  title: "About",
  name: "About",
  path: "/about",
  description: "About page",
  keywords: "About Johann Cavallucci",
});
</script>

<template>
  <div class="w-full pt-24 relative">
    <h1 class="acorn p-5 font-bold text-5xl text-red-800 text-center">About Me</h1>
    <div class="w-full flex flex-row justify-between">
      <div class="w-[70%] my-10">
        <div>
          <h3 class="text-neutral-color font-medium text-start px-32 pt-5">
            Développeur et directeur artistique basé à Nice, France.<br /><br />
            Avec plus de 6 ans d'expérience dans le domaine, je prends plaisir à mêler beau, design et technologie pour créer des expériences web uniques et sur
            mesure qui dépassent les attentes de mes clients.<br /><br />
            Qu'il s'agisse de collaborer avec des équipes ou de diriger des projets de conception, mon souci du détail et mon dévouement à l'excellence m'ont
            valu la réputation de fournir des résultats exceptionnels.<br /><br />
            Même lorsque je ne travaille pas pour mes clients, je suis toujours à la recherche de nouvelles choses à apprendre et à expérimenter.<br />
            Je continue à développer mes compétences en design et en développement en travaillant sur des projets personnels, en lisant des livres, etc...
          </h3>
        </div>
      </div>
      <div class="w-[30%] my-10">
        <div class="rounded-bl-lg rounded-tl-lg card-img p-5 pr-0">
          <img class="rounded-bl-lg rounded-tl-lg w-full h-fit object-cover z-20" src="/assets/johannCVL.jpeg" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
