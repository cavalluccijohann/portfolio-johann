<script lang="ts" setup>
const { appName } = useAppConfig();
useHead({
  title: appName,
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "keywords", content: "Home" },
    { name: "description", content: "Nuxt Starter" },
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
    <Body class="">
      <div class="noise z-bg"></div>
      <ul class="circles z-circle">
        <li></li>
        <li></li>
      </ul>
      <NuxtLayout>
        <NuxtPage class="overflow-y-scroll" />
      </NuxtLayout>
    </Body>
  </Html>
</template>
