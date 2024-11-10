<template>
  <div class="flex flex-col gap-2">
    <!-- Top Row: Avatar, Name, Rating, and More Options -->
    <div class="flex items-center gap-4">
      <!-- User Avatar -->
      <div class="w-12 h-12 rounded-full bg-[#1c1d1f] text-white flex items-center justify-center font-bold">
        {{ review.user.initials }}
      </div>

      <!-- Name and Rating -->
      <div class="flex-1">
        <h4 class="font-bold text-[#1c1d1f]">{{ review.user.name }}</h4>
        <div class="flex items-center gap-2 mt-1">
          <div class="flex">
            <svg v-for="i in 5" :key="i" 
              class="w-4 h-4" 
              :class="i <= Math.floor(review.rating) ? 'text-[#b4690e]' : 'text-[#b4690e]/20'"
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <span class="text-[#6a6f73] text-sm">{{ review.time }}</span>
        </div>
      </div>

      <!-- More Options Button -->
      <button class="p-2 hover:bg-[#1c1d1f]/5 rounded-full self-start">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      </button>
    </div>

    <!-- Review Text -->
    <p class="text-[#1c1d1f]">{{ review.content }}</p>

    <!-- Helpful Buttons -->
    <div class="flex items-center gap-4 mt-1">
      <span class="text-sm text-[#6a6f73]">Helpful?</span>
      <button class="p-2 hover:bg-[#1c1d1f]/5">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
        </svg>
      </button>
      <button class="p-2 hover:bg-[#1c1d1f]/5">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  review: {
    type: Object,
    required: true
  }
})
</script> 