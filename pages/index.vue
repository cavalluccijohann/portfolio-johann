<script setup lang="ts">
definePageMeta({
  title: "Home",
  name: "Home",
  path: "/",
  description: "Home page",
  keywords: "Home",
});
</script>

<template>
  <div class="w-full overflow-hidden z-10">
    <div class="flex flex-col items-center justify-center h-screen w-full z-20">
      <div class="m-5">
        <img class="rounded-full h-28 w-28 object-cover" src="/assets/johannCVL.jpeg" />
      </div>
      <h2 class="text-center align-top tracking-wider font-bold text-5xl text-red-800 mb-5"><span class="acorn">Hello, je suis Johann Cavallucci </span></h2>
      <h3 class="text-neutral-color font-medium w-1/2 text-center">je suis designer graphique, UX/UI designer & développeur web front-end</h3>
      <Social />
    </div>
  </div>
</template>

<style scoped>
/* region Text */
.color {
  fill: #414141;
  color: #414141;

  opacity: 75%;
}

.text-outline {
  //-webkit-text-fill-color: transparent;
  //-webkit-text-stroke-color: #414141;
  //-webkit-text-stroke-width: 1px;
  color: transparent;
  -webkit-text-stroke: 2px black;
}

.text-color {
  color: #414141;
  opacity: 75%;
  font-family: "Montserrat", sans-serif;
}

@font-face {
  font-family: "Montserrat";
  src: url("../assets/fonts/Montserrat/Montserrat-ExtraBold.ttf");
  font-weight: bold;
}
/* endregion */
</style>
