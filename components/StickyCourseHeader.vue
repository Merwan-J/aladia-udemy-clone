<template>
  <div 
    class="fixed top-0 left-0 right-0 bg-[#1C1D1F] transform transition-all duration-300 z-50 border-b border-gray-700"
    :class="[isVisible ? 'translate-y-0' : '-translate-y-full']"
  >
    <div class="pl-6 py-2">
      <h1 class="text-[1.1rem] font-bold text-white">
        AWS Services for Solutions Architect Associate
      </h1>
      <div class="flex items-center gap-2 text-sm mt-1">
        <span class="text-[#f3ca8c] font-bold">4.4</span>
        <span class="text-[#f3ca8c]">★</span>
        <a href="#" class="text-[#C0C4FC] hover:text-[#A435F0] underline">(2,886 ratings)</a>
        <span class="text-white">236,960 students</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const NAVBAR_HEIGHT = 100 

const handleScroll = () => {
  window.requestAnimationFrame(() => {
    isVisible.value = window.scrollY > NAVBAR_HEIGHT
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll() 
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
