<template>
  <div class="max-w-[700px] mb-8">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-2xl font-bold text-[#1c1d1f]">Course content</h2>
    </div>

    <div class="text-sm text-[#1c1d1f] mb-4 flex items-center justify-between mb-4">
      <p>9 sections • 67 lectures • 10h 53m total length </p>
            <button 
        @click="toggleAllSections"
        class="text-[#5624D0] font-bold text-sm hover:text-[#401b9c]"
      >
        Expand all sections
      </button>
    </div>

    <div class="border border-[#d1d7dc] rounded-lg">
      <div v-for="(section, index) in sections" :key="index"
        class="border-b border-[#d1d7dc] last:border-b-0"
      >
        <button 
          class="w-full px-6 py-4 flex items-center justify-between bg-[#F7F9FA] hover:bg-[#F7F9FA]/80"
          @click="section.isOpen = !section.isOpen"
        >
          <div class="flex items-center gap-4">
            <svg 
              class="w-4 h-4 text-[#1c1d1f] transition-transform"
              :class="{ 'rotate-180': section.isOpen }"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            <span class="font-bold text-[#1c1d1f] text-left">{{ section.title }}</span>
          </div>
          <span class="text-[#6a6f73] text-sm">{{ section.duration }}</span>
        </button>

        <div v-if="section.isOpen" class="border-t border-[#d1d7dc] bg-white">
          <div v-for="(lecture, lectureIndex) in section.lectures" :key="lectureIndex"
            class="flex items-center justify-between px-6 py-3 hover:bg-[#F7F9FA]"
          >
            <div class="flex items-center gap-4">
              <svg class="w-4 h-4 text-[#1c1d1f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-[#1c1d1f] text-sm">{{ lecture.title }}</span>
            </div>
            <div class="flex items-center gap-4">
              <a v-if="lecture.preview" 
                href="#" 
                class="text-[#5624D0] text-sm font-bold hover:text-[#401b9c] underline"
              >
                Preview
              </a>
              <span class="text-[#6a6f73] text-sm">{{ lecture.duration }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <h2 class="text-2xl font-bold text-[#1c1d1f] mb-4">Requirements</h2>
      <ul class="list-disc pl-8 space-y-2">
        <li class="text-[#1c1d1f]">Basic knowledge of Linux commands</li>
        <li class="text-[#1c1d1f]">Common IT knowledge</li>
      </ul>
    </div>

    <div class="mt-8">
      <h2 class="text-2xl font-bold text-[#1c1d1f] mb-4">Description</h2>
      
      <p class="font-bold mb-6 text-[#1c1d1f]">
        ***UPDATE: New Content ALERT!!! Around 50+ video content added to the course!***
      </p>

      <div class="relative">
        <div 
          class="space-y-4 text-[#1c1d1f]"
          :class="{ 'max-h-[300px] overflow-hidden': !isDescriptionExpanded }"
        >
          <h3 class="font-bold text-xl mb-2">Who's teaching you in this course?</h3>
          <p>
            I have been working with zekeLabs as a corporate trainer for AWS, Azure, DevOps, Git, Chef, Docker. I had extensive experience in the software industry where I have worked as a senior developer and cloud and DevOps Consultant. As a developer, I worked with Cadence, Aricent Technology in the Telecom domain, and Guavus in the Big Data domain. I was in 2007 batch Computer Science Graduate from NIT Allahabad. I am passionate about technology and education. I have shared my knowledge that gonna guide you to understand the core of Aws.
          </p>

          <div v-show="isDescriptionExpanded">
            <p class="mt-6">
              <span class="font-bold">Amazon Web Services (AWS)</span> began offering IT infrastructure services to businesses in the form of web services -- now commonly known as cloud computing. One of the key benefits of cloud computing is the opportunity to replace up-front capital infrastructure expenses with low variable costs that scale with your business they can instantly spin up hundreds or thousands of servers in minutes and deliver results faster. Today, Amazon Web Services provides a highly reliable, scalable, low-cost infrastructure platform in the cloud that powers hundreds of thousands of businesses in 190 countries around the world. With data center locations in the U.S., Europe, Brazil, Singapore, Japan, and Australia, customers across all industries are taking advantage of the following benefits:
            </p>

            <ul class="list-disc pl-8 space-y-4 mt-4">
              <li>
                <span class="font-bold">Low Cost:</span> AWS offers low, pay-as-you-go pricing with no up-front expenses or long-term commitments. A global infrastructure at scale, and pass the cost-saving benefits onto you in the form of lower prices.
              </li>
              <li>
                <span class="font-bold">Agility and Instant Elasticity:</span> AWS provides a massive global cloud infrastructure that allows you to quickly innovate, experiment, and iterate. whether you need them for a few hours or 24/7, you still only pay for what you use.
              </li>
              <li>
                <span class="font-bold">Open and Flexible:</span> AWS is a language and operating system agnostic platform. You choose the development platform or programming model that makes the most sense for your business.
              </li>
              <li>
                <span class="font-bold">Secure:</span> AWS is secure, services and data centers have multiple layers of operational and physical security to ensure the integrity and safety of your data. Visit the Security Center to learn more.
              </li>
            </ul>

            <p class="mt-4">Get started with the Amazon Web Services (AWS)</p>

            <p class="mt-6">Enroll Now!! see you in class.</p>

            <p class="mt-4">Happy learning</p>
            <p>Team Edyoda</p>

            <div class="mt-6">
              <h3 class="font-bold text-xl mb-2">Who this course is for:</h3>
              <ul class="list-disc pl-8 space-y-2">
                <li>Beginners who want to start their journey in cloud domain</li>
                <li>IT professionals who want to become cloud practitioners</li>
                <li>Developers who want to deploy an application on AWS</li>
                <li>Candidates preparing for various AWS certifications such as AWS Solutions Architect, AWS SysOps Associate and AWS Developer Associates</li>
              </ul>
            </div>
          </div>
        </div>

        <div 
          v-if="!isDescriptionExpanded"
          class="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-white to-transparent"
        ></div>

      </div>
    </div>
    <div class="mt-4">
          <button 
            @click="isDescriptionExpanded = !isDescriptionExpanded"
            class="text-[#5624D0] font-bold text-sm hover:text-[#401b9c] flex items-center gap-2"
          >
            {{ isDescriptionExpanded ? 'Show less' : 'Show more' }}
            <svg 
              class="w-4 h-4"
              :class="{ 'rotate-180': isDescriptionExpanded }"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const defaultLectures = [
  {
    title: 'About this series',
    duration: '03:53',
    preview: true
  },
  {
    title: 'What is Cloud Computing?',
    duration: '09:51',
    preview: true
  },
  {
    title: 'Introduction to AWS',
    duration: '03:54',
    preview: true
  },
  {
    title: 'Create an AWS Account',
    duration: '05:10',
    preview: true
  },
  {
    title: 'AWS Global Infrastructure',
    duration: '05:11',
    preview: true
  }
]

const sections = ref([
  {
    title: 'AWS Introduction',
    duration: '5 lectures • 28min',
    isOpen: false,
    lectures: defaultLectures
  },
  {
    title: 'AWS Simple Storage (S3)',
    duration: '9 lectures • 1hr 10min',
    isOpen: false,
    lectures: defaultLectures
  },
  {
    title: 'AWS Security',
    duration: '6 lectures • 1hr',
    isOpen: false,
    lectures: defaultLectures
  },
  {
    title: 'AWS Compute Services (EC2)',
    duration: '14 lectures • 2hr 3min',
    isOpen: false,
    lectures: defaultLectures
  },
  {
    title: 'Programmatic Access to AWS',
    duration: '2 lectures • 26min',
    isOpen: false,
    lectures: defaultLectures
  },
  {
    title: 'AWS Storage and Databases',
    duration: '5 lectures • 1hr 3min',
    isOpen: false,
    lectures: defaultLectures
  },
  {
    title: 'Designing a Fault Tolerant and Scalable Infrastructure',
    duration: '6 lectures • 1hr 15min',
    isOpen: false,
    lectures: defaultLectures
  },
  {
    title: 'AWS Networking',
    duration: '10 lectures • 1hr 44min',
    isOpen: false,
    lectures: defaultLectures
  },
  {
    title: 'Other Important AWS services',
    duration: '10 lectures • 1hr 44min',
    isOpen: false,
    lectures: defaultLectures
  }
])

const isDescriptionExpanded = ref(false)

// Add function to handle expand all
const toggleAllSections = () => {
  const allClosed = sections.value.every(section => !section.isOpen)
  sections.value.forEach(section => section.isOpen = allClosed)
}
</script>
