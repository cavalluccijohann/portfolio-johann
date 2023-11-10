<script setup lang="ts">
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
  <div class="w-1/3 card rounded-lg p-2">
    <img :src="item.image" :alt="item.name" class="w-full rounded-lg" />
  </div>
</template>

<style scoped></style>
