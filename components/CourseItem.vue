<template>
  <div class="flex items-start gap-3 border-b-2 border-gray-200 pb-5">
    <img 
      :src="course.image" 
      :alt="course.title"
      class="w-[70px] h-[70px] object-cover flex-shrink-0"
    />

    <div class="flex-1 min-w-0">
      <div class="flex items-center gap-9">
        <h3 class="w-1/2 font-bold text-base text-[#1c1d1f] tracking-tight">
          {{ course.title }}
        </h3>

        <div class="flex items-center gap-8 flex-1">
          <div class="flex items-center gap-1">
            <span class="font-bold text-sm">{{ course.rating }}</span>
            <svg class="w-3.5 h-3.5 text-[#b4690e]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>

          <div class="flex items-center gap-1">
            <svg class="w-4 h-4 text-[#6a6f73]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <span class="text-sm text-[#6a6f73]">{{ formatNumber(course.students) }}</span>
          </div>

          <span class="font-bold text-base">
            ${{ course.price }}
          </span>

          <button class="ml-auto w-8 h-8 flex items-center justify-center border border-[#1c1d1f] rounded-full hover:bg-[#1c1d1f]/5">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </button>
        </div>
      </div>

      <div class="flex items-center gap-1 mt-1">
        <span class="text-sm font-bold text-[#1e6055]">{{ course.totalHours }} total hours</span>
        <span class="text-sm text-[#6a6f73]">• Updated {{ course.updatedDate }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  course: {
    type: Object,
    required: true
  }
})

const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num)
}
</script>
