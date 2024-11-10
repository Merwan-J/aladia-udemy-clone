<template>
  <div class="max-w-[700px] border border-[#d1d7dc] rounded-lg p-8">
    <h2 class="text-2xl font-bold text-[#1c1d1f] mb-8">Frequently Bought Together</h2>
    
    <div class="space-y-1">
      <FrequentlyBoughtItem 
        v-for="(course, index) in courses" 
        :key="course.id"
        :course="course"
        :is-first="index === 0"
      />
    </div>

    <div class="flex items-center justify-between mt-5">
      <div class="text-[#1c1d1f]">
        <span class="text-lg">Total: </span>
        <span class="text-xl font-bold">${{ totalPrice }}</span>
      </div>
      <BaseButton 
        variant="primary"
            class="px-4 py-4 text-lg font-extrabold"
      >
        Add all to cart
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import FrequentlyBoughtItem from './FrequentlyBoughtItem.vue'
import BaseButton from '@/components/BaseButton.vue'

const courses = [
  {
    id: 1,
    title: "AWS Services for Solutions Architect Associate",
    image: "/fbt-1.jpg",
    instructor: "EdYoda for Business, Ashish Pandey",
    rating: 4.4,
    reviews: 2886,
    price: 19.99
  },
  {
    id: 2,
    title: "Amazon Elastic Compute Cloud (EC2) Beginners Certification",
    image: "/fbt-2.jpg",
    instructor: "YouAccel Training, Blue Digital Media",
    rating: 4.2,
    reviews: 553,
    price: 34.99
  },
  {
    id: 3,
    title: "Cloud Computing and Amazon Web Services (AWS) Fundamentals",
    image: "/fbt-3.jpg",
    instructor: "YouAccel Training",
    rating: 4.2,
    reviews: 1061,
    price: 34.99
  }
]

const totalPrice = computed(() => {
  return courses.reduce((sum, course) => sum + course.price, 0).toFixed(2)
})
</script>
