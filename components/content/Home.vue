<template>
  <div class="w-full z-10">
    <div class="flex flex-col items-center justify-center h-screen w-full z-20">
      <div class="m-5">
        <NuxtImg loading="lazy" class="rounded-full h-28 w-28 object-cover" src="/assets/johannCVL.webp" alt="picture of me" />
      </div>
      <h2 class="text-center align-top tracking-wider font-bold text-5xl text-text-color-primary mb-5">
        <span class="acorn">
          <ContentSlot :use="$slots.hero_title" />
        </span>
      </h2>
      <h3 class="text-color-text font-medium w-1/2 text-center">
        <ContentSlot :use="$slots.hero_subtitle" />
      </h3>
      <Social />
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "Montserrat";
  src: url("../../assets/fonts/Montserrat/Montserrat-ExtraBold.ttf");
  font-weight: bold;
}

body {
  background-color: #1b1b1d;
  color: #ccc;
  text-align: center;
  padding-top: 1rem;
}

#template,
#path {
  fill: none;
}

#template {
  stroke-width: 5px;
  stroke: #444;
}

#path {
  stroke: #0ae448;
  stroke-width: 20px;
  visibility: hidden;
}

#code,
#value {
  font-size: 2rem;
  font-family: monospace;
}

#code {
  color: #777;
  margin: 20px;
  position: relative;
  visibility: hidden;
}

#current {
  display: inline-block;
  color: white;
}

#description {
  max-width: 530px;
  color: #777;
  font-family: Arial, sans-serif;
  font-size: 1.5rem;
  display: inline-block;
  text-align: left;
}
</style>
