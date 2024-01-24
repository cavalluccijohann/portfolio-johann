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
          ? 'active-icon text-primary-color/70 font-bold pt-2 pb-2 pl-4 pr-4 rounded-full card-nav-item'
          : 'inactive-icon text-primary-color/70 font-medium pt-2 pb-2 pl-4 pr-4 rounded-full',
      ]"
      :aria-label="'Go to ' + item.name + ' profile'"
    >
      <component :is="item.icon" class="w-7 h-7" />
    </NuxtLink>
  </div>
</template>

<style scoped>
.active-icon {
  background-color: rgba(250, 250, 250, 0.43); /* Couleur de fond pour les icônes actives */
  transition: all 0.5s ease; /* Animation de transition */
}

.inactive-icon {
  background-color: transparent; /* Couleur de fond pour les icônes inactives */
  transition: all 0.5s ease; /* Animation de transition */
}
</style>
