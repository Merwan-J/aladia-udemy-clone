<template>
  <div class="max-w-[700px] mb-8 mt-8">
    <h2 class="text-2xl font-bold text-[#1c1d1f] mb-6">Instructors</h2>
    
    <div class="space-y-8">
      <InstructorCard 
        v-for="instructor in instructors" 
        :key="instructor.id"
        :instructor="instructor"
      />
    </div>
  </div>
</template>

<script setup>
import InstructorCard from './InstructorCard.vue'

const instructors = [
  {
    id: 1,
    name: "EdYoda for Business",
    link: "https://www.edyoda.com",
    subtitle: "Join me on www.edyoda.com",
    avatar: "edyoda-logo.jpg",
    stats: {
      rating: 4.1,
      reviews: 47184,
      students: 1140310,
      courses: 15
    },
    description: [
      "EdYoda is re-imagining skill based education, educating on job-relevant real world skills.",
      "Edyoda courses are on job-relevant technical skills. We have professional team of instructors, some of the courses we specialize in are Web development, Mobile App Development, Cloud & DevOps, Machine Learning, Artificial Intelligence and Big Data.",
      "We believe that access to education and opportunities is the biggest enabler, and we are on a mission to enable the same for everyone across the world."
    ]
  },
  {
    id: 2,
    name: "Ashish Pandey",
    link: "#",
    subtitle: "Principal Consultant at zekeLabs (EdYoda)",
    avatar: "ashish-image.jpg",
    stats: {
      rating: 3.9,
      reviews: 6687,
      students: 372026,
      courses: 3
    },
    description: [
      "Ashish is working with zekeLabs as a principal consultant Cloud and DevOps and provides corporate training for Kubernetes, Docker, Microservices, AWS, Azure, and DevOps tools and processes.",
      "He has extensive experience in the software industry where he has worked as a senior developer and cloud and DevOps Consultant.",
      "As a corporate trainer and consultant, he has upskilled professionals from companies such as IBM, HCL, Carl Zeiss, Epsilon, Mitel Networks, Ribbon and many more.",
      "As a developer he worked with Cadence, Aricent Technology in Telecom domain and Guavus in Big Data domain."
    ]
  }
]
</script>
