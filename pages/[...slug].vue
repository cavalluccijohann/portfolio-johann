<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <div>
    <Html :lang="$i18n.locale">
      <Body class="w-screen">
        <div class="noise -z-50"></div>
        <ul class="circles -z-40">
          <li></li>
          <li></li>
        </ul>
        <NuxtLayout>
          <ContentQuery v-slot="{ data }" :path="$route.path" :locale="locale" find="one">
            <ContentRenderer :value="data" />
          </ContentQuery>
        </NuxtLayout>
      </Body>
    </Html>
  </div>
</template>
