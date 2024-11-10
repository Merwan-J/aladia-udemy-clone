<template>
  <footer class="bg-dark-lighter text-white pt-8 pb-24 ">
    <div class="w-full px-12 pb-8 flex justify-between items-center">
      <p class="text-lg font-bold">
        Top companies choose 
        <a href="#" class="text-[#C0C4FC]">Udemy Business</a>
        to build in-demand career skills.
      </p>
      <div class="flex items-center gap-8">
        <img src="/nasdaq.svg" alt="Nasdaq" class="h-12 opacity-80" />
        <img src="/volkswagen.svg" alt="Volkswagen" class="h-12 opacity-80" />
        <img src="/box.svg" alt="Box" class="h-12 opacity-80" />
        <img src="/netapp.svg" alt="NetApp" class="h-12 opacity-80" />
        <img src="/eventbrite.svg" alt="Eventbrite" class="h-12 opacity-80" />
      </div>
    </div>

    <hr class="border-gray-700" />

    <div class="px-12 py-8">
      <div class="grid grid-cols-4 gap-8">
        <div class="space-y-2">
          <a href="#" class="block hover:underline text-[14px]">Udemy Business</a>
          <a href="#" class="block hover:underline text-[14px]">Teach on Udemy</a>
          <a href="#" class="block hover:underline text-[14px]">Get the app</a>
          <a href="#" class="block hover:underline text-[14px]">About us</a>
          <a href="#" class="block hover:underline text-[14px]">Contact us</a>
        </div>

        <div class="space-y-2">
          <a href="#" class="block hover:underline text-[14px]">Careers</a>
          <a href="#" class="block hover:underline text-[14px]">Blog</a>
          <a href="#" class="block hover:underline text-[14px]">Help and Support</a>
          <a href="#" class="block hover:underline text-[14px]">Affiliate</a>
          <a href="#" class="block hover:underline text-[14px]">Investors</a>
        </div>

        <div class="space-y-2">
          <a href="#" class="block hover:underline text-[14px]">Terms</a>
          <a href="#" class="block hover:underline text-[14px]">Privacy policy</a>
          <a href="#" class="block hover:underline text-[14px]">Cookie settings</a>
          <a href="#" class="block hover:underline text-[14px]">Sitemap</a>
          <a href="#" class="block hover:underline text-[14px]">Accessibility statement</a>
        </div>

        <div class="flex justify-end">
          <BaseButton 
            variant="secondary" 
            class="border-white text-white hover:bg-white/10 h-10 px-3 py-2"
          >
            <div class="flex items-center justify-center gap-3 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
              <span>English</span>
            </div>
          </BaseButton>
        </div>
      </div>
    </div>

    <div class="px-12 flex justify-between items-center">
      <img src="/logo-udemy-light.svg" alt="Udemy" class="h-8 text-white" />
      <p class="text-[13px] text-gray-300">© 2024 Udemy, Inc.</p>
    </div>
  </footer>
</template>

<script setup>
import BaseButton from './BaseButton.vue'
</script>
