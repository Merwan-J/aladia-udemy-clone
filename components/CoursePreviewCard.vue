<template>
  <div 
    :class="[
      'w-[340px] bg-white shadow-lg border border-white transition-opacity duration-300 z-[999]',
      { 
        'fixed top-8 mr-48 mt-5': isSticky,
        'absolute bottom-0': isSticky && reachedFooter
      }
    ]"
    :style="cardStyle"
  >
    <div v-if="!isSticky" class="relative">
      <img 
        src="/course-thumbnail.jpg" 
        alt="Course thumbnail" 
        class="w-full aspect-video object-cover"
      />
      <div class="absolute inset-0 bg-black/40">
        <div class="absolute inset-0 flex items-center justify-center cursor-pointer group">
          <div class="w-[72px] h-[72px] bg-white rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
            <div class="w-0 h-0 border-t-[12px] border-t-transparent border-l-[24px] border-l-black border-b-[12px] border-b-transparent ml-2"></div>
          </div>
        </div>
        <div class="absolute bottom-4 left-0 right-0 text-center">
          <span class="text-white text-[15px] font-extrabold">
            Preview this course
          </span>
        </div>
      </div>
    </div>

    <div class="p-6">
      <div class="flex items-baseline mb-4 text-[#1c1d1f]">
        <span class="text-[32px] font-bold">$19.99</span>
      </div>

      <BaseButton 
        variant="primary" 
        fullWidth 
        className="!bg-[#A435F0] !py-3 mb-2 font-bold"
      >
        Add to cart
      </BaseButton>
      
      <button class="w-full bg-white border border-black hover:bg-[#F7F9FA] text-black py-3.5 font-bold mb-3">
        Buy now
      </button>

      <div class="text-center text-[#1c1d1f] text-[12px] mb-4">
        30-Day Money-Back Guarantee
      </div>

      <div class="mb-4">
        <h2 class="font-bold text-[#1c1d1f] mb-2">This course includes:</h2>
        <ul class="space-y-2 text-[#1c1d1f] text-[14px]">
          <li class="flex items-center gap-3">
            <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            11 hours on-demand video
          </li>
          <li class="flex items-center gap-3">
            <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Access on mobile and TV
          </li>
          <li class="flex items-center gap-3">
            <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
            Full lifetime access
          </li>
          <li class="flex items-center gap-3">
            <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            Certificate of completion
          </li>
        </ul>
      </div>

      <div class="flex gap-4 items-center text-[14px] mb-4 font-semibold text-black underline">
        <button class="hover:text-[#401b9c] ">Share</button>
        <button class="hover:text-[#401b9c] ">Gift this course</button>
        <button class="hover:text-[#401b9c] ">Apply Coupon</button>
      </div>

      <div class="mb-4">
        <div v-if="appliedCoupon" class="border border-gray-300 rounded p-2.5 flex justify-between items-center mb-2">
          <div class="text-[13px] text-udemy-dark">
            <span class="font-bold">LETSLEARNNOW</span>
            <span class="text-gray-500"> is applied</span>
            <div class="text-[12px] text-gray-500">Udemy coupon</div>
          </div>
          <button 
            @click="removeCoupon" 
            class="text-udemy-link hover:text-udemy-link-hover"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="flex h-[40px]">
          <input 
            type="text" 
            placeholder="Enter Coupon" 
            class="flex-grow px-3 border border-gray-300 border-r-0 text-[14px] focus:border-udemy-dark focus:ring-1 focus:ring-udemy-dark outline-none"
          >
          <button 
            class="px-4 bg-udemy-dark text-white text-[14px] hover:bg-udemy-light transition-colors"
          >
            Apply
          </button>
        </div>
      </div>

      <div class="pt-4 border-t border-gray-300">
        <h3 class="font-bold text-[16px] mb-1 text-[#1c1d1f]">Training 5 or more people?</h3>
        <p class="text-[14px] text-[#1c1d1f] mb-3">
          Get your team access to 27,000+ top Udemy courses anytime, anywhere.
        </p>
        <button 
          class="w-full py-2.5 px-3 border border-[#1c1d1f] text-[#1c1d1f] text-center text-[14px] font-bold hover:bg-[#F7F9FA] transition-colors"
        >
          Try Udemy Business
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const appliedCoupon = ref(true) 
const removeCoupon = () => {
  appliedCoupon.value = false
}

const isSticky = ref(false)
const reachedFooter = ref(false)
const originalPosition = ref({ top: 0, right: 0 })

const cardStyle = computed(() => {
  if (!isSticky.value) return {}
  
  return {
    right: `${originalPosition.value.right}px`,
    ...(reachedFooter.value ? {} : { top: '2rem' })
  }
})

const checkPosition = () => {
  const headerElement = document.querySelector('.course-header')
  const footerElement = document.querySelector('footer')
  const contentContainer = document.querySelector('.max-w-\\[1340px\\]')
  
  if (headerElement && footerElement && contentContainer) {
    const headerRect = headerElement.getBoundingClientRect()
    const footerRect = footerElement.getBoundingClientRect()
    const containerRect = contentContainer.getBoundingClientRect()
    
    isSticky.value = headerRect.bottom <= 0
    
    reachedFooter.value = footerRect.top <= window.innerHeight
  }
}

const initializePosition = () => {
  const card = document.querySelector('.course-preview-card')
  if (card) {
    const rect = card.getBoundingClientRect()
    const documentWidth = document.documentElement.clientWidth
    originalPosition.value = {
      top: rect.top,
      right: documentWidth - rect.right
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkPosition)
  window.addEventListener('resize', initializePosition)
  initializePosition()
  checkPosition()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkPosition)
  window.removeEventListener('resize', initializePosition)
})
</script>
