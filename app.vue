<script lang="ts" setup>
const { appName } = useAppConfig();
useHead({
  title: appName,
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "keywords", content: "Portfolio Johann Cavallucci, johanncavallucci, johann cavallucci, JOHANN CAVALLUCCI" },
    { name: "description", content: "The portfolio of Johann Cavallucci, a web developer." },
    { name: "author", content: "Johann Cavallucci" },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
});
</script>

<template>
  <Html :lang="$i18n.locale">
    <Body class="overflow-hidden w-screen">
      <div class="noise -z-50"></div>
      <ul class="circles -z-40">
        <li></li>
        <li></li>
      </ul>
      <NuxtLayout>
        <NuxtPage class="overflow-y-scroll overflow-hidden" />
      </NuxtLayout>
    </Body>
  </Html>
</template>
