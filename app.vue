<template>
  <AnnouncementBanner v-if="showBanner" @close="showBanner = false" />
  <Navbar />
  <CourseHeader />
  <StickyCourseHeader />
  <div class="max-w-[1340px] mx-auto pl-28 py-8">
      <CertificationBanner />
      <CourseOutcomes />
      <RelatedTopics />      
      <CourseContent />
      <StudentsBought />
      <FrequentlyBought />
      <Instructors />
      <Reviews />
      <MoreCourses />
  </div>
  <TheFooter />


</template>

<script setup>
import { ref } from 'vue'
import AnnouncementBanner from './components/AnnouncementBanner.vue'
import Navbar from './components/Navbar.vue'
import CourseHeader from '../components/CourseHeader.vue'
import StickyCourseHeader from '@/components/StickyCourseHeader.vue'
import CertificationBanner from '@/components/CertificationBanner.vue'
import CourseOutcomes from '@/components/CourseOutcomes.vue'
import RelatedTopics from '@/components/RelatedTopics.vue'
import TheFooter from '@/components/TheFooter.vue'
import CourseContent from '@/components/CourseContent.vue'
import StudentsBought from '@/components/StudentsBought.vue'
import Instructors from '@/components/Instructors.vue'
import Reviews from '@/components/Reviews.vue'
import MoreCourses from '@/components/MoreCourses.vue'





const showBanner = ref(true)
</script>