<template>
  <div>
    <a 
      :href="instructor.link"
      class="text-[#5624D0] font-bold text-lg hover:text-[#401b9c] underline"
    >
      {{ instructor.name }}
    </a>

    <p class="text-[#6a6f73] text-sm mt-1">
      {{ instructor.subtitle }}
    </p>

    <div class="flex items-center gap-6 my-4">
      <img 
        :src="instructor.avatar" 
        :alt="instructor.name"
        class="w-[110px] h-[110px] rounded-full object-cover"
      />

      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-[#b4690e]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span class="text-[#6a6f73]">{{ instructor.stats.rating }} Instructor Rating</span>
        </div>

        <div class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 4H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2zm-1 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
          </svg>
          <span class="text-[#6a6f73]">{{ formatNumber(instructor.stats.reviews) }} Reviews</span>
        </div>

        <div class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
          </svg>
          <span class="text-[#6a6f73]">{{ formatNumber(instructor.stats.students) }} Students</span>
        </div>

        <div class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 10h14v2H5zm0-4h14v2H5zm0 8h14v2H5z"/>
          </svg>
          <span class="text-[#6a6f73]">{{ instructor.stats.courses }} Courses</span>
        </div>
      </div>
    </div>

    <div class="space-y-4">
      <p 
        v-for="(paragraph, index) in instructor.description" 
        :key="index"
        class="text-[#1c1d1f] text-sm"
      >
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  instructor: {
    type: Object,
    required: true
  }
})

const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num)
}
</script> 