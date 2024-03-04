<script setup lang="ts">
definePageMeta({
  title: "About",
  name: "About",
  path: "/about",
  description: "About page",
  keywords: "About Johann Cavallucci",
});
</script>

<template>
  <div class="w-full pt-5 md:pt-24 relative">
    <h1 class="acorn p-5 font-bold text-5xl text-text-color-primary text-center">About Me</h1>

    <div class="w-full flex-col justify-center items-center flex md:hidden">
      <div class="rounded-lg card-img p-3 w-8/12 m-10">
        <img class="rounded-lg w-full object-cover z-20" src="/assets/johannCVL.webp" alt="picture of me" />
      </div>
      <div class="w-full mb-10">
        <div>
          <h3 class="text-color-text font-medium text-start px-5 mb-16">
            I am a developer based in Nice, France.<br /><br />
            Boasting 4 years of experience in the field of computer science. My passion lies in creation, and I take great satisfaction in experimenting and
            testing new technologies. Whether collaborating within a team or contributing to project design, I am fully committed to every aspect of my work.<br /><br />

            My professional approach is characterized by an insatiable desire to tackle new challenges. I am consistently seeking growth and learning, aiming to
            expand my skill set and refine my craft on a daily basis. Concurrently, I dedicate my efforts to creating an environment conducive to the continuous
            improvement of my work.<br /><br />

            I firmly believe that each day presents an opportunity for enhancement, and it is with this mindset that I pledge to create and learn, contributing
            to a professionally evolving journey.<br /><br />
          </h3>
        </div>
      </div>
    </div>

    <div class="w-full flex-row justify-between hidden md:flex">
      <div class="w-[70%] my-5 lg:my-10">
        <div>
          <h3 class="text-color-text font-medium text-start px-20 lg:px-32 pt-5">
            I am a developer based in Nice, France.<br /><br />
            Boasting 4 years of experience in the field of computer science. My passion lies in creation, and I take great satisfaction in experimenting and
            testing new technologies. Whether collaborating within a team or contributing to project design, I am fully committed to every aspect of my work.<br /><br />

            My professional approach is characterized by an insatiable desire to tackle new challenges. I am consistently seeking growth and learning, aiming to
            expand my skill set and refine my craft on a daily basis. Concurrently, I dedicate my efforts to creating an environment conducive to the continuous
            improvement of my work.<br /><br />

            I firmly believe that each day presents an opportunity for enhancement, and it is with this mindset that I pledge to create and learn, contributing
            to a professionally evolving journey.<br /><br />
          </h3>
        </div>
      </div>
      <div class="w-[30%] my-10">
        <div class="rounded-bl-lg rounded-tl-lg card-img p-5 pr-0">
          <img class="rounded-bl-lg rounded-tl-lg w-full h-fit object-cover z-20" src="/assets/johannCVL.webp" alt="picture of me" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
