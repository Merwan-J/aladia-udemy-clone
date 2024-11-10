<template>
  <div class="max-w-[700px] mb-8">
    <h2 class="text-2xl font-bold text-[#1c1d1f] mb-4">Students also bought</h2>
    
    <div class="space-y-4">
      <CourseItem 
        v-for="(course, index) in courses" 
        :key="course.id"
        :course="{ ...course, image: `/sab-${index + 1}.jpg` }"
      />
    </div>

    <button 
      class="w-full mt-4 py-3 border border-[#1c1d1f] text-center hover:bg-[#1c1d1f]/5"
    >
      Show more
    </button>
  </div>
</template>

<script setup>
import CourseItem from './CourseItem.vue'

const courses = [
  {
    id: 1,
    title: "Part 1: AWS Certified Solutions Architect SAA C03 [2024]",
    totalHours: 17,
    updatedDate: "10/2024",
    rating: 4.8,
    students: 15895,
    price: 74.99
  },
  {
    id: 2,
    title: "The Ultimate AWS Certified Solutions Architect - Associate",
    totalHours: 27,
    updatedDate: "2/2019",
    rating: 4.6,
    students: 10475,
    price: 19.99
  },
  {
    id: 3,
    title: "Topmost AWS Certified Solutions Architect Associate SAA-C03",
    totalHours: 58,
    updatedDate: "9/2024",
    rating: 4.7,
    students: 36,
    price: 44.99
  },
  {
    id: 4,
    title: "Learn AWS from Scratch | AWS Solution Architect Zero to Hero",
    totalHours: 32,
    updatedDate: "10/2020",
    rating: 4.4,
    students: 93,
    price: 19.99
  },
  {
    id: 5,
    title: "AWS Certified Solutions Architect Associate Latest-Hands on!",
    totalHours: 17,
    updatedDate: "11/2022",
    rating: 4.6,
    students: 4018,
    price: 59.99
  },
  {
    id: 6,
    title: "NEW AWS Certified Solutions Architect - Associate",
    totalHours: 13.5,
    updatedDate: "2/2024",
    rating: 4.4,
    students: 58532,
    price: 69.99
  }
]
</script>
