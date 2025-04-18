<script setup lang="ts">
const { locale } = useI18n()

useHead({
  title: 'Johann Cavallucci Portfolio',
  titleTemplate: '',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'keywords', content: 'Portfolio Johann Cavallucci, johanncavallucci, johann cavallucci, JOHANN CAVALLUCCI' },
    { name: 'description', content: 'The portfolio of Johann Cavallucci, a web developer.' },
    { name: 'author', content: 'Johann Cavallucci' },
    { property: 'og:title', content: 'Johann Cavallucci Portfolio' },
    { property: 'og:description', content: 'The portfolio of Johann Cavallucci, a web developer.' },
    { property: 'og:image', content: '/og.png' },
    { property: 'og:image:alt', content: 'Johann Cavallucci Portfolio' },
    { property: 'og:url', content: 'https://johanncvl.com' },
    { property: 'og:type', content: 'website' },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
  ],
})
</script>

<template>
  <div>
    <Html :lang="$i18n.locale">
      <Body class="w-screen overflow-x-hidden">
        <div class="w-full h-full top-0 overflow-hidden fixed -z-30">
          <div class="noise -z-50" />
          <ul class="circles -z-40 overflow-hidden w-screen h-full">
            <li />
            <li />
          </ul>
        </div>

        <div class="flex flex-col min-h-screen scrollbar-hide">
          <LayoutNav />
          <ContentQuery v-slot="{ data }" :path="$route.path" :locale find="one">
            <ContentRenderer :value="data" />
          </ContentQuery>
          <LayoutFooter />
        </div>
      </Body>
    </Html>
  </div>
</template>
