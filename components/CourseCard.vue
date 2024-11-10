<template>
  <div class="flex flex-col">
    <img 
      :src="image" 
      :alt="course.title"
      class="w-full h-[115px] object-cover mb-1"
    />

    <h3 class="font-bold text-sm text-[#1c1d1f] line-clamp-2 leading-tight mb-0.5">
      {{ course.title }}
    </h3>
    
    <p class="text-[#6a6f73] text-xs mb-0.5 line-clamp-1">
      {{ course.instructor }}
    </p>

    <div class="flex items-center gap-1 mb-0.5">
      <span class="font-bold text-xs text-[#b4690e]">{{ course.rating }}</span>
      <div class="flex">
        <svg v-for="i in 5" :key="i" 
          class="w-2.5 h-2.5" 
          :class="i <= Math.floor(course.rating) ? 'text-[#b4690e]' : 'text-[#b4690e]/20'"
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
      <span class="text-[#6a6f73] text-xs">({{ formatNumber(course.reviews) }})</span>
    </div>

    <div class="text-[11px] text-[#6a6f73] mb-0.5">
      {{ course.duration }} • {{ course.lectures }} • {{ course.level }}
    </div>

    <span class="font-bold text-sm">
      ${{ course.price }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  course: {
    type: Object,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})

const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num)
}
</script> 