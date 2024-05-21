<script setup lang="ts">
import { defineProps, type PropType } from "vue";

defineProps({
  item: {
    type: Object as PropType<{
      name: string;
      path: string;
      icon: never;
    }>,
    required: true,
  },
});
</script>

<template>
  <div>
    <NuxtLink
      :to="item.path"
      class="flex items-center justify-center cursor-pointer"
      :class="[
        $route.path === item.path
          ? 'text-primary-color font-bold pt-2 pb-2 pl-4 pr-4 rounded-full card-nav-item'
          : 'text-primary-color/70 font-medium pt-2 pb-2 pl-4 pr-4 hover:text-primary-color transition-all duration-300 border-none',
      ]"
      :aria-label="'Go to ' + item.name + ' profile'"
    >
      <span class="sr-only">Go to {{ item.name }} profile</span>
      <component :is="item.icon" class="w-7 h-7" />
    </NuxtLink>
  </div>
</template>

<style scoped></style>
