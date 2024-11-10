<template>
  <div class="max-w-[700px] mb-8">
    <h2 class="text-[#1c1d1f] text-2xl font-bold mb-4">Explore related topics</h2>
    
    <div class="flex flex-wrap gap-2">
      <BaseButton 
        variant="secondary"
        class="rounded-full text-[14px] whitespace-nowrap font-bold"
      >
        AWS Certified Solutions Architect - Associate
      </BaseButton>

      <BaseButton 
        variant="secondary"
        class="rounded-full text-[14px] whitespace-nowrap font-bold"
      >
        IT Certifications
      </BaseButton>

      <BaseButton 
        variant="secondary"
        class="rounded-full text-[14px] whitespace-nowrap font-bold"
      >
        IT & Software
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue'
</script>
