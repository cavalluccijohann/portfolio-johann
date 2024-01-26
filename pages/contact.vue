<script setup lang="ts">
import { InboxIcon, PhoneIcon, UserCircleIcon, PaperAirplaneIcon } from "@heroicons/vue/24/solid";

definePageMeta({
  title: "Contact",
  name: "Contact",
  path: "/contact",
  description: "Contact page",
  keywords: "Contact",
});
</script>

<template>
  <div class="w-full pt-24 relative">
    <h1 class="acorn p-5 font-bold text-5xl text-red-800 text-center">Contact Me</h1>
    <h3 class="text-neutral-color font-medium text-center z-9">Get in touch with me</h3>
    <div class="w-full flex flex-col justify-center items-center mt-5">
      <div class="relative w-full flex flex-col justify-center items-center">
        <input
          type="text"
          placeholder="full name"
          class="relative my-1 w-1/2 p-2 pl-10 text-neutral-color/60 m-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
        />
        <span class="w-1/2 absolute inset-y-0 start-50 flex items-center pointer-events-none px-2.5">
          <component :is="UserCircleIcon" class="w-5 h-5 text-neutral-color/60" />
        </span>
      </div>

      <div class="relative w-full flex flex-col justify-center items-center">
        <input
          type="text"
          placeholder="your email"
          class="relative my-1 w-1/2 p-2 pl-10 text-neutral-color/60 m-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
        />
        <span class="w-1/2 absolute inset-y-0 start-50 flex items-center pointer-events-none px-2.5">
          <component :is="InboxIcon" class="w-5 h-5 text-neutral-color/60" />
        </span>
      </div>

      <div class="relative w-full flex flex-col justify-center items-center">
        <input
          type="text"
          placeholder="your phone number"
          class="relative my-1 w-1/2 p-2 pl-10 text-neutral-color/60 m-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
        />
        <span class="w-1/2 absolute inset-y-0 start-50 flex items-center pointer-events-none px-2.5">
          <component :is="PhoneIcon" class="w-5 h-5 text-neutral-color/60" />
        </span>
      </div>

      <div class="relative w-full flex flex-col justify-center items-center">
        <textarea
          type="text"
          placeholder="your message"
          class="relative my-1 w-1/2 p-2 h-32 text-neutral-color/60 m-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
        />

        <div class="relative w-full flex flex-col justify-center items-center">
          <button
            class="relative my-1 w-1/2 p-2 rounded-lg bg-primary-color text-white hover:text-white/80 font-bold hover:bg-primary-color/50 transition-all duration-300 focus:outline-none focus:bg-primary-color flex items-center justify-center"
          >
            <component :is="PaperAirplaneIcon" class="w-5 h-5 text-color-text mr-2" />
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
