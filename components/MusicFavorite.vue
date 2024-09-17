<script setup lang="ts">
const musics = [
  {
    title: "Mr.sunshine",
    artist: "Arden Jones",
    src: "https://open.spotify.com/intl-fr/track/6x984mI891z1E2sVwYumUx?si=023e10edb7d84735",
    cover: "https://i.scdn.co/image/ab67616d00001e02151cf14971a06c0b244eb5e2",
  },
  {
    title: "Baby said",
    artist: "Måneskin",
    src: "https://open.spotify.com/intl-fr/track/2KReCz1L5XkGIBhDncQ5VZ?si=85303b5a6d33462a",
    cover: "https://cdns-images.dzcdn.net/images/cover/b961e3688b32e04ca1a3c0bd8b56bbd2/0x1900-000000-80-0-0.jpg",
  },
  {
    title: "Une histoire étrange",
    artist: "Laylow",
    src: "https://open.spotify.com/intl-fr/track/1LqDW54jByEjfZJMadiLJU?si=09270a4a4db04842",
    cover: "https://cdns-images.dzcdn.net/images/cover/f968eb506868df5736521217bb87ccc7/0x1900-000000-80-0-0.jpg",
  },
  {
    title: "Ecrire",
    artist: "Nekfeu",
    src: "https://open.spotify.com/intl-fr/track/7CnlMI3z4COC5WDzkKpeCF?si=da25e67147ce4828",
    cover: "https://cdns-images.dzcdn.net/images/cover/853d2682fcb082898db6e114baea0309/500x500.jpg",
  },
];
</script>

<template>
  <div class="w-full flex-col justify-between pl-0">
    <div class="overflow-x-auto px-8 md:px-32 py-10 hide-scrollbar">
      <div class="flex space-x-4">
        <NuxtLink :to="music.src" v-for="music in musics" :key="music.title" class="rounded-lg card-img p-3 flex-none w-1/2 md:w-1/3 xl:w-1/4 cursor-pointer">
          <NuxtImg loading="lazy" class="rounded-lg w-full object-cover z-20 opacity-90" :src="music.cover" :alt="music.title" />
          <p class="text-color-text text-md md:text-lg font-bold text-start mt-2">
            {{ music.title }}
          </p>
          <p class="text-color-text text-s md:text-md font-medium text-start">
            {{ music.artist }}
          </p>
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
