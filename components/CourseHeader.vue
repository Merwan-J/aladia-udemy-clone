<template>
  <div class="course-header bg-[#1C1D1F] text-white px-4 py-8 relative">
    <div class="max-w-[1340px] mx-auto relative">
      <div class="hidden lg:block absolute right-[100px] top-0 z-10">
        <CoursePreviewCard />
      </div>

      <div class="max-w-6xl mx-auto">
        <nav class="flex space-x-2 text-sm mb-4">
          <a href="#" class="text-[#C0C4FC] hover:text-white">IT & Software</a>
          <span class="text-[#C0C4FC]">›</span>
          <a href="#" class="text-[#C0C4FC] hover:text-white">IT Certifications</a>
          <span class="text-[#C0C4FC]">›</span>
          <span class="text-[#C0C4FC]">AWS Certified Solutions Architect - Associate</span>
        </nav>

        <div class="max-w-[700px]">
          <h1 class="text-4xl font-bold mb-4">
            AWS Services for Solutions Architect Associate
          </h1>
          <p class="text-lg mb-4">
            The best guide for various AWS certifications such as AWS Solutions Architect, AWS SysOps and AWS Developer Associates
          </p>

          <div class="flex items-center space-x-2 mb-4">
            <span class="font-bold text-[#f3ca8c]">4.4</span>
            <div class="flex text-[#f3ca8c]">
              ★★★★☆
            </div>
            <a href="#" class="text-[#C0C4FC] hover:text-[#A435F0] underline">(2,886 ratings)</a>
            <span>236,960 students</span>
          </div>

          <div class="mb-4">
            <span>Created by</span>
            <a href="#" class="text-[#C0C4FC] hover:text-[#A435F0] underline mx-1">EdYoda for Business</a>
            <span>,</span>
            <a href="#" class="text-[#C0C4FC] hover:text-[#A435F0] underline ml-1">Ashish Pandey</a>
          </div>

          <div class="flex items-center gap-4 text-sm">
           <div class="flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
</svg>

      <span>Last updated 6/2020</span>
    </div>

    <div class="flex items-center gap-2">
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
      </svg>
      <span>English</span>
    </div>

    <div class="flex items-center gap-2">
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zm2 4h2m5 0h7m-14 4h7m5 0h2m-14 4h2m5 0h7"/>
      </svg>
      <span>English [Auto]</span>
    </div>
          </div>
        </div>

        <div class="lg:hidden mt-6">
          <CoursePreviewCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CoursePreviewCard from './CoursePreviewCard.vue'
</script>

<style scoped>
@media (min-width: 1024px) {
  .bg-[#1C1D1F]::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 400px;
    height: 100%;
    background: linear-gradient(to right, transparent, #1C1D1F);
    pointer-events: none;
  }
}
</style>
