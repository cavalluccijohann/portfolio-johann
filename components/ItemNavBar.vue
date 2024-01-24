<script setup lang="ts">
import { defineProps, type PropType } from "vue";

defineProps({
  item: {
    type: Object as PropType<{
      name: string;
      path: string;
      icon: any;
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
        $route.name === item.name
          ? 'bg-neutral-300/50 backdrop-blur-md text-primary-color/70 font-bold pt-2 pb-2 pl-4 pr-4 rounded-full card'
          : 'text-primary-color/70 font-medium pt-2 pb-2 pl-4 pr-4 rounded-full',
      ]"
      :aria-label="'Go to ' + item.name + ' profile'"
    >
      {{ item.name }}
    </NuxtLink>
  </div>
</template>

<style scoped></style>
