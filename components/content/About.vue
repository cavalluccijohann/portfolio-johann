<script setup lang="ts"></script>

<template>
  <div class="w-full pt-5 md:pt-24 relative">
    <h1 class="acorn p-5 font-bold text-5xl text-text-color-primary text-center">
      <ContentSlot :use="$slots.title" />
    </h1>

    <div class="w-full flex-col justify-center items-center flex md:hidden">
      <div class="rounded-lg card-img p-3 w-10/12 m-10">
        <NuxtImg loading="lazy" class="rounded-lg w-full object-cover z-20" src="/assets/johannCVL.webp" alt="picture of me" />
      </div>
      <div class="w-full mb-10">
        <div>
          <h3 class="text-color-text font-medium text-start px-5 mb-16">
            <ContentSlot :use="$slots.subtitle" />
          </h3>
        </div>
      </div>
    </div>

    <div class="w-full flex-row justify-between hidden md:flex">
      <div class="w-[70%] my-5 lg:my-10">
        <div>
          <h3 class="text-color-text font-medium text-start px-20 lg:px-32 pt-5">
            <ContentSlot :use="$slots.subtitle" />
          </h3>
        </div>
      </div>
      <div class="w-[30%] my-10">
        <div class="rounded-bl-lg rounded-tl-lg card-img p-5 pr-0">
          <NuxtImg loading="lazy" class="rounded-bl-lg rounded-tl-lg w-full h-fit object-cover z-20" src="/assets/johannCVL.webp" alt="picture of me" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
