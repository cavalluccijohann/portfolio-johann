<script setup lang="ts">
const toggleColorMode = () => {
  useColorMode().preference = useColorMode().preference === "light" ? "dark" : "light";
};
</script>

<template>
  <SvgoLightDark
    @click="toggleColorMode"
    class="md:hidden w-7 h-7 z-20 cursor-pointer text-primary-color select-none mt-4"
    :fontControlled="false"
    :alt="'Light/Dark mode'"
    :aria-label="'Light/Dark mode'"
  />
</template>

<style scoped></style>
