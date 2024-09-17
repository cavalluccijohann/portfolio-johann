<script setup lang="ts">
const sentences = [
  {
    content: "Pendant la ruée vers l'or, ce ne sont pas les chercheurs d'or qui se sont le plus enrichis, mais les vendeurs de pelles et de pioches.",
    artist: "Somebody",
  },
  {
    content: "Aimez ce que jamais vous ne verrez deux fois.",
    artist: "André Gide",
  },
  {
    content: "Fais confiance à la vie. Crée ce que tu veux et laisse faire l’univers.",
    artist: "Kilomètre zéro",
  },
];
</script>

<template>
  <div class="w-full flex-col justify-between pl-0">
    <div class="overflow-x-auto px-8 md:px-32 py-10 hide-scrollbar">
      <div class="flex space-x-4">
        <NuxtLink v-for="sentence in sentences" :key="sentence.content" class="rounded-lg card-img p-3 flex-none justify-between w-full md:w-1/2 xl:w-1/3">
          <div class="w-full h-full flex flex-col justify-between">
            <div class="w-full flex-1 rounded-md bg-neutral-400/20 p-2 mt-2 mb-2">
              <p class="text-color-text text-md md:text-lg font-medium italic text-start">
                {{ sentence.content }}
              </p>
            </div>
            <p class="text-color-text text-s md:text-md font-bold text-start">
              {{ sentence.artist }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Masquer la barre de défilement pour différents navigateurs */
.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari et Opera */
}
.hide-scrollbar {
  -ms-overflow-style: none; /* IE et Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
