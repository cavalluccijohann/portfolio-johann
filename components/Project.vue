<script setup lang="ts">
import { ref } from "vue";
defineProps({
  item: {
    type: Object as PropType<{
      name: string;
      description: string;
      image: string;
      link: string;
    }>,
    required: true,
  },
});
</script>

<template>
  <NuxtLink :to="item.link" class="w-1/3 card rounded-lg p-2 relative group" aria-label="Go to project">
    <span class="sr-only">Go to project</span>
    <img :src="item.image" :alt="item.name" class="w-full rounded-lg" />
  </NuxtLink>
</template>

<style scoped></style>
