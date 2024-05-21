<script setup lang="ts">
import { HomeIcon, PencilIcon, UserIcon, EnvelopeIcon } from "@heroicons/vue/24/solid";
const rotate180 = ref(false);
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

const toggleColorMode = () => {
  useColorMode().preference = useColorMode().preference === "light" ? "dark" : "light";
};
</script>

<template>
  <div>
    <div class="hidden md:flex fixed z-20 top-7 left-1/2 transform -translate-x-1/2">
      <div class="flex items-center justify-center gap-6 sm:gap-10 rounded-full p-2 card-nav bg-opacity-50 backdrop-blur-2xl">
        <ItemNavBar v-for="item in items" :key="item.name" :item="item" />
      </div>
    </div>

    <div class="md:hidden fixed bottom-0 left-0 z-20 w-full">
      <div class="flex items-center justify-center gap-6 sm:gap-10 rounded-full p-2 card-nav bg-opacity-50 backdrop-blur-2xl mb-3 mx-5">
        <ItemNavBar v-for="item in items" :key="item.name" :item="item" />
      </div>
    </div>
    <SvgoLightDark
      @click="toggleColorMode"
      class="hidden md:block w-7 h-7 z-20 right-0 cursor-pointer absolute top-[2.7rem] mr-7 text-primary-color select-none"
      :class="{
        'animate-rotate180': $colorMode.preference === 'dark',
        'animate-rotate0': $colorMode.preference === 'light',
      }"
      :fontControlled="false"
      :alt="'Light/Dark mode'"
      :aria-label="'Light/Dark mode'"
    />
  </div>
</template>

<style scoped></style>
