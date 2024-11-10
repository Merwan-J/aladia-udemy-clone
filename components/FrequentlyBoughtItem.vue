<template>
  <div class="relative">
    <div v-if="!isFirst" class="absolute -top-10 left-[65px] z-10 items-center justify-between">
      <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_2px_4px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.16)]">
        <span class="text-4xl font-semibold leading-none pb-2">+</span>
      </div>
    </div>

    <div class="flex items-start gap-6" :class="{ 'mt-5': !isFirst }">
      <img 
        :src="getImageUrl(`${course.image}`)" 
        :alt="course.title"
        class="w-[176px] h-[100px] object-cover flex-shrink-0"
      />

      <div class="flex-1 min-w-0">
        <h3 class="font-bold text-base text-[#1c1d1f] leading-snug mb-1">
          {{ course.title }}
        </h3>
        
        <p class="text-[#6a6f73] text-xs mb-1">
          {{ course.instructor }}
        </p>

        <div class="flex items-center gap-2">
          <span class="font-bold text-base text-[#b4690e]">{{ course.rating }}</span>
          <div class="flex">
            <svg v-for="i in 5" :key="i" 
              class="w-4 h-4" 
              :class="i <= Math.floor(course.rating) ? 'text-[#b4690e]' : 'text-[#b4690e]/20'"
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <span class="text-[#6a6f73]">({{ formatNumber(course.reviews) }})</span>
        </div>
      </div>

      <div class="text-right flex-shrink-0">
        <span class="font-bold text-lg">${{ course.price }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getImageUrl } from '@/utils/imageUrls'

defineProps({
  course: {
    type: Object,
    required: true
  },
  isFirst: {
    type: Boolean,
    default: false
  }
})

const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num)
}
</script> 