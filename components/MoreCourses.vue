<template>
  <div class="max-w-[700px] space-y-8">
    <section>
      <h2 class="text-lg font-bold mb-4">
        More Courses by 
        <a href="#" class="text-[#5624d0] hover:text-[#401b9c]">EdYoda for Business</a>
      </h2>
      
      <div class="flex gap-3">
        <CourseCard 
          v-for="(course, index) in edYodaCourses" 
          :key="course.id"
          :image="getImageUrl(`more-ed-${index + 1}.jpg`)"
          :course="course"
          class="w-[200px]"
        />
      </div>
    </section>

    <section>
      <h2 class="text-lg font-bold mb-4">
        More Courses by 
        <a href="#" class="text-[#5624d0] hover:text-[#401b9c]">Ashish Pandey</a>
      </h2>
      
      <div class="flex gap-3">
        <CourseCard 
          v-for="(course, index) in ashishCourses" 
          :key="course.id"
          :image="getImageUrl(`more-ash-${index + 1}.jpg`)"
          :course="course"
          class="w-[200px]"
        />
      </div>
    </section>

    <button class="w-full py-3 text-[#1c1d1f] border border-[#1c1d1f] mt-4 hover:bg-[#1c1d1f]/5">
      Report abuse
    </button>
  </div>
</template>

<script setup>
import CourseCard from './CourseCard.vue'
import { getImageUrl } from '@/utils/imageUrls'

const edYodaCourses = [
  {
    id: 1,
    title: "React JS- Complete Guide for Frontend Web Development",
    instructor: "EdYoda for Business, Qaifi Khan",
    rating: 4.3,
    reviews: 5537,
    duration: "22 total hours",
    lectures: "202 lectures",
    level: "All Levels",
    price: 49.99
  },
  {
    id: 2,
    title: "The Complete ReactJs Course - Basics to Advanced",
    instructor: "EdYoda for Business, Qaifi Khan",
    rating: 4.2,
    reviews: 3967,
    duration: "3.5 total hours",
    lectures: "26 lectures",
    level: "Beginner",
    price: 44.99
  },
  {
    id: 3,
    title: "Master JavaScript from Basics to Advanced",
    instructor: "EdYoda for Business, Qaifi Khan",
    rating: 4.1,
    reviews: 4506,
    duration: "10 total hours",
    lectures: "87 lectures",
    level: "Beginner",
    price: 44.99
  }
]

const ashishCourses = [
  {
    id: 1,
    title: "Become a DevOps Pro - From basics to advanced topics",
    instructor: "EdYoda for Business, Ashish Pandey",
    rating: 3.5,
    reviews: 2692,
    duration: "2 total hours",
    lectures: "15 lectures",
    level: "Beginner",
    price: 22.99
  },
  {
    id: 2,
    title: "Introduction to Microservices",
    instructor: "EdYoda for Business, Ashish Pandey",
    rating: 4.3,
    reviews: 1109,
    duration: "1 total hour",
    lectures: "9 lectures",
    level: "Beginner",
    price: 19.99
  }
]
</script> 