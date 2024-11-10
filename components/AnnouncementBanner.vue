<template>
  <div class="flex items-center gap-x-6 bg-[#5025D1] px-8 py-4 sm:px-3.5 sm:before:flex-1">
    <p class="text-base text-white font-semibold">
      <a href="#">
        <strong class="font-bold">Ready to get with the times? </strong>| Get the skills with Udemy Business.
      </a>
    </p>
    <div class="flex flex-1 justify-end">
      <button type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
        <span class="sr-only">Dismiss</span>
        <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/20/solid'
</script>