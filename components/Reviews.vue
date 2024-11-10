<template>
  <div class="max-w-[700px] mb-8">
    <!-- Rating Header -->
    <div class="flex items-center gap-2 mb-6">
      <svg class="w-5 h-5 text-[#b4690e]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
      <span class="text-2xl font-bold text-[#1c1d1f]">{{ rating }} course rating</span>
      <span class="text-2xl text-[#1c1d1f] font-bold"><span class="text-[#6a6f73]">•</span> {{ formatNumber(totalRatings) }} ratings</span>
    </div>

    <!-- Reviews Grid -->
    <div class="grid grid-cols-2 gap-x-6 gap-y-8">
      <ReviewItem 
        v-for="review in reviews" 
        :key="review.id"
        :review="review"
      />
    </div>

    <!-- Show All Reviews Button -->
    <button class="mt-8 px-4 py-2 border border-[#1c1d1f] font-bold hover:bg-[#1c1d1f]/5">
      Show all reviews
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ReviewItem from './ReviewItem.vue'

const rating = 4.4
const totalRatings = 3000

const reviews = [
  {
    id: 1,
    user: {
      initials: 'JP',
      name: 'Jaya P.',
    },
    rating: 4.5,
    time: 'a week ago',
    content: 'excellent'
  },
  {
    id: 2,
    user: {
      initials: 'AS',
      name: 'abu S.',
    },
    rating: 4.5,
    time: '4 months ago',
    content: 'It is a good source. Trainer is well knowledgeable. Almost full AWS can learn through this course. Explanation is easy to understand. Especially hands on example is well enough to learn AWS.'
  },
  {
    id: 3,
    user: {
      initials: 'MR',
      name: 'Md. Mijanur R.',
    },
    rating: 5,
    time: '5 months ago',
    content: "Instructor was Awesome, very skillful content.As a Beginner in Cloud Technology it's more helpful for me.Thanks Instructor."
  },
  {
    id: 4,
    user: {
      initials: 'KC',
      name: 'Karansingh C.',
    },
    rating: 4,
    time: '7 months ago',
    content: 'good for beginner'
  }
]

const formatNumber = (num) => {
  return num >= 1000 ? `${Math.floor(num/1000)}K` : num
}
</script> 