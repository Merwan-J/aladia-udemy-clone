<template>
  <nav class="border-b border-gray-200 px-5 py-4 relative">
    <div class="flex items-center justify-between">
      <!-- Left section -->
      <div class="flex items-center gap-4">
        <img src="../public/udemy-logo.svg" alt="Udemy" class="h-8" />
        <div class="relative group">
          <button class="text-sm hover:text-purple-600">Categories</button>
          
          <div class="absolute top-full left-0 hidden group-hover:block z-50">
            <div class="flex">
              <!-- Main Categories -->
              <div class="w-[260px] bg-white shadow-lg">
                <div v-for="(category, index) in categories" 
                     :key="category.name" 
                     class="relative group/sub"
                >
                  <div class="px-6 py-3 flex items-center justify-between hover:bg-gray-50 cursor-pointer">
                    <span class="text-[15px] text-[#1c1d1f]">{{ category.name }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>

                  <!-- Sub Categories -->
                  <div class="absolute left-[260px] top-0 w-[260px] bg-white shadow-lg hidden group-hover/sub:block">
                    <div v-for="subCategory in category.subCategories" 
                         :key="subCategory.name"
                         class="relative group/topic">
                      <div class="px-6 py-3 flex items-center justify-between hover:bg-gray-50 cursor-pointer">
                        <span class="text-[15px] text-[#1c1d1f]">{{ subCategory.name }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>

                      <!-- Popular Topics -->
                      <div class="absolute left-[260px] top-0 w-[260px] bg-white shadow-lg hidden group-hover/topic:block">
                        <div class="p-6">
                          <h3 class="font-bold text-[16px] text-[#1c1d1f] mb-4">Popular topics</h3>
                          <div class="space-y-1">
                            <div v-for="topic in popularTopics" 
                                 :key="topic"
                                 class="text-[15px] py-2 hover:bg-gray-50 cursor-pointer text-[#1c1d1f]">
                              {{ topic }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Search bar -->
      <div class="flex-1 mx-6">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="search"
            class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-gray-50 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600"
            placeholder="Search for anything"
          >
        </div>
      </div>

      <div class="flex items-center gap-3">
        <a href="#" class="text-sm hover:text-purple-600">Udemy Business</a>
        <a href="#" class="text-sm hover:text-purple-600">Teach on Udemy</a>
        <button class="text-gray-600 hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 font-bold text-black">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

        </button>
        <BaseButton variant="secondary">Log in</BaseButton>
      <BaseButton variant="dark">Sign up</BaseButton>
<BaseButton variant="secondary" class="px-2">          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
</BaseButton>
      </div>
    </div>
  </nav>
</template>

<script setup>
import BaseButton from './BaseButton.vue'

const categories = [
  {
    name: 'Development',
    subCategories: [
      { name: 'Web Development' },
      { name: 'Mobile Development' },
      { name: 'Game Development' },
      { name: 'Database Design & Development' },
      { name: 'Software Testing' },
      { name: 'Software Engineering' },
      { name: 'Software Development Tools' },
      { name: 'No-Code Development' }
    ]
  },
  {
    name: 'Business',
    subCategories: [
      { name: 'Web Development' },
      { name: 'Mobile Development' },
      { name: 'Game Development' }
    ]
  },
  {
    name: 'Finance & Accounting',
    subCategories: [
      { name: 'Web Development' },
      { name: 'Mobile Development' },
      { name: 'Game Development' }
    ]
  },
  {
    name: 'IT & Software',
    subCategories: [
      { name: 'Web Development' },
      { name: 'Mobile Development' },
      { name: 'Game Development' }
    ]
  },
  {
    name: 'Office Productivity',
    subCategories: [
      { name: 'Web Development' },
      { name: 'Mobile Development' },
      { name: 'Game Development' }
    ]
  },
  {
    name: 'Personal Development',
    subCategories: [
      { name: 'Web Development' },
      { name: 'Mobile Development' },
      { name: 'Game Development' }
    ]
  },
  {
    name: 'Design',
    subCategories: [
      { name: 'Web Development' },
      { name: 'Mobile Development' },
      { name: 'Game Development' }
    ]
  },
  {
    name: 'Marketing',
    subCategories: [
      { name: 'Web Development' },
      { name: 'Mobile Development' },
      { name: 'Game Development' }
    ]
  },
  {
    name: 'Lifestyle',
    subCategories: [
      { name: 'Web Development' },
      { name: 'Mobile Development' },
      { name: 'Game Development' }
    ]
  },
  {
    name: 'Photography & Video',
    subCategories: [
      { name: 'Web Development' },
      { name: 'Mobile Development' },
      { name: 'Game Development' }
    ]
  },
  {
    name: 'Health & Fitness',
    subCategories: [
      { name: 'Web Development' },
      { name: 'Mobile Development' },
      { name: 'Game Development' }
    ]
  },
  {
    name: 'Music',
    subCategories: [
      { name: 'Web Development' },
      { name: 'Mobile Development' },
      { name: 'Game Development' }
    ]
  },
  {
    name: 'Teaching & Academics',
    subCategories: [
      { name: 'Web Development' },
      { name: 'Mobile Development' },
      { name: 'Game Development' }
    ]
  }
]

const popularTopics = [
  'JavaScript',
  'React JS',
  'Angular',
  'CSS',
  'Next.js',
  'HTML',
  'ASP.NET Core',
  'Node.Js'
]
</script>

<style scoped>
.group:hover .group-hover\:block,
.group\/sub:hover .group-hover\/sub\:block,
.group\/topic:hover .group-hover\/topic\:block {
  display: block;
  animation: fadeIn 0.15s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
