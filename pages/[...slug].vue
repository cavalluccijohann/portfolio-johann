<script setup lang="ts">
const { locale } = useI18n();

useHead({
  title: "Johann's folio",
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
  <div>
    <Html :lang="$i18n.locale">
      <Body class="w-screen overflow-x-hidden">
        <div class="w-full h-full top-0 overflow-hidden fixed -z-30">
          <div class="noise -z-50"></div>
          <ul class="circles -z-40 overflow-hidden w-screen h-full">
            <li></li>
            <li></li>
          </ul>
        </div>

        <NuxtLayout>
          <ContentQuery v-slot="{ data }" :path="$route.path" :locale="locale" find="one">
            <ContentRenderer :value="data" />
          </ContentQuery>
        </NuxtLayout>
      </Body>
    </Html>
  </div>
</template>
