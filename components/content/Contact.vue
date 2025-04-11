<script setup lang="ts">
import { InboxIcon, PhoneIcon, UserCircleIcon, PaperAirplaneIcon, ArrowPathIcon } from "@heroicons/vue/24/solid";
import { toast, Toaster } from "vue-sonner";

const form = ref({
  name: "",
  phone: "",
  email: "",
  message: "",
});
const loading = ref(false);
async function sendForm() {
  loading.value = true;
  try {
    await useFetch("/api/sendEmail", {
      method: "POST",
      body: form.value,
    });
    form.value = {
      name: "",
      phone: "",
      email: "",
      message: "",
    };
  } catch (error) {
    console.error("Error sending form:", error);
    toast.error("Error sending form", {
      style: {
        background: "var(--toast-color)",
        opacity: 0.9,
        borderColor: "var(--toast-color)",
        color: "var(--text-color)",
      },
    });
  } finally {
    toast.success("Message sent successfully", {
      style: {
        background: "var(--toast-color)",
        opacity: 0.9,
        borderColor: "var(--toast-color)",
        color: "var(--text-color)",
      },
    });
    loading.value = false;
  }
}
</script>

<template>
  <div class="w-full pt-5 md:pt-24 relative">
    <Toaster position="top-left" />
    <h1 class="acorn p-5 font-bold text-5xl text-text-color-primary text-center">
      <ContentSlot :use="$slots.title" />
    </h1>
    <h3 class="text-color-text font-medium text-center z-9">
      <ContentSlot :use="$slots.subtitle" />
    </h3>
    <form class="w-full flex flex-col justify-center items-center mt-5" @submit.prevent="sendForm()">
      <div class="relative w-full flex flex-col justify-center items-center">
        <input
          type="text"
          id="name"
          :placeholder="$t('name')"
          v-model="form.name"
          required
          class="relative my-1 w-3/4 lg:w-1/2 p-2 pl-10 text-color-text/60 m-4 rounded-lg border-[1px] border-gray-300 focus:outline-none focus:ring-1 focus:ring-text-color-primary focus:border-transparent"
        />
        <span class="w-3/4 lg:w-1/2 absolute inset-y-0 flex items-center pointer-events-none px-2.5">
          <component :is="UserCircleIcon" class="w-5 h-5 text-color-text/60" />
        </span>
      </div>

      <div class="relative w-full flex flex-col justify-center items-center">
        <input
          type="email"
          :placeholder="$t('email')"
          v-model="form.email"
          required
          class="relative my-1 w-3/4 lg:w-1/2 p-2 pl-10 text-color-text/60 m-4 rounded-lg border-[1px] border-gray-300 focus:outline-none focus:ring-1 focus:ring-text-color-primary focus:border-transparent"
        />
        <span class="w-3/4 lg:w-1/2 absolute inset-y-0 start-50 flex items-center pointer-events-none px-2.5">
          <component :is="InboxIcon" class="w-5 h-5 text-color-text/60" />
        </span>
      </div>

      <div class="relative w-full flex flex-col justify-center items-center">
        <input
          type="tel"
          :placeholder="$t('phone')"
          v-model="form.phone"
          class="relative my-1 w-3/4 lg:w-1/2 p-2 pl-10 text-color-text/60 m-4 rounded-lg border-[1px] border-gray-300 focus:outline-none focus:ring-1 focus:ring-text-color-primary focus:border-transparent"
        />
        <span class="w-3/4 lg:w-1/2 absolute inset-y-0 start-50 flex items-center pointer-events-none px-2.5">
          <component :is="PhoneIcon" class="w-5 h-5 text-color-text/60" />
        </span>
      </div>

      <div class="relative w-full flex flex-col justify-center items-center">
        <textarea
          type="text"
          :placeholder="$t('message')"
          v-model="form.message"
          required
          class="relative my-1 w-3/4 lg:w-1/2 p-2 h-42 min-h-50 text-color-text/60 m-4 rounded-lg border-[1px] border-gray-300 focus:outline-none focus:ring-1 focus:ring-text-color-primary focus:border-transparent"
        />
      </div>

      <div class="relative w-full flex flex-col justify-center items-center">
        <button
          type="submit"
          :class="{ 'cursor-not-allowed': loading }"
          @click="!loading"
          :disabled="loading"
          class="font-bold w-3/4 rounded-lg lg:w-1/2 p-2 my-1 m-4 text-base font-medium text-center inline-flex items-center justify-center text-white hover:text-white/90 shadow-sm bg-gradient-to-br relative from-secondary-color via-primary-color to-primary-color"
        >
          <component v-if="!loading" :is="PaperAirplaneIcon" class="w-5 h-5 text-white hover:text-white/90 mr-2" />
          <component v-else :is="ArrowPathIcon" class="w-5 h-5 text-white mr-2 animate-spin" />

          {{ loading ? "" : "Send" }}
        </button>
      </div>
    </form>
  </div>
</template>
