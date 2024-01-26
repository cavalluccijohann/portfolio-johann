<script setup lang="ts">
import { HomeIcon, PencilIcon, UserIcon, EnvelopeIcon } from "@heroicons/vue/24/solid";

const items = [
  {
    name: "Home",
    path: "/",
    icon: HomeIcon,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: PencilIcon,
  },
  {
    name: "About",
    path: "/about",
    icon: UserIcon,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: EnvelopeIcon,
  },
];
</script>

<template>
  <div class="absolute z-20 w-full flex items-center justify-center">
    <div class="sticky flex items-center justify-center gap-6 sm:gap-10 my-7 z-10 rounded-full p-2 card-nav bg-opacity-50 backdrop-blur-2xl">
      <ItemNavBar v-for="item in items" :key="item.name" :item="item" />
    </div>
    <div>
      <SvgoLightDark
        @click="$colorMode.preference === 'light' ? ($colorMode.preference = 'dark') : ($colorMode.preference = 'light')"
        class="w-7 h-7 right-0 cursor-pointer absolute top-[2.7rem] mr-7 text-primary-color select-none"
        :class="{
          'rotate-180': $colorMode.preference === 'dark',
          'rotate-0': $colorMode.preference === 'light',
        }"
        :fontControlled="false"
        :alt="'Light/Dark mode'"
        :aria-label="'Light/Dark mode'"
      />
    </div>
  </div>
</template>

<style scoped></style>
