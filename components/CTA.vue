<template>
    <section class="bg-gray-50 pt-16 overflow-hidden">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <!-- Text content first -->
        <div class="mx-auto max-w-3xl text-center mb-12">
          <hgroup>
            <h2 class="text-base/7 font-semibold text-red-600">Need Medical Transportation?</h2>
            <p class="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Professional Medical Transport When You Need It Most</p>
          </hgroup>
          <p class="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600">Reliable, compassionate, and safe medical transport services delivered by highly trained professionals across Texas, Florida, Arizona, Alabama, and California.</p>
          
          <!-- CTA buttons -->
          <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#request-transport" 
              class="rounded-lg bg-red-500 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-red-600 transition-colors duration-200 flex items-center justify-center"
            >
              Request Transport
              <svg 
                class="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
            <a 
              href="tel:+1(956)742-4341" 
              class="rounded-lg bg-white border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
            >
              <svg 
                class="mr-2 w-5 h-5 text-red-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (956) 382-4168
            </a>
          </div>
        </div>
        
        <!-- 3D model always below text -->
        <div class="mx-auto max-w-3xl relative">
          <!-- The 3D model with no overlays -->
          <ThreeAnimation />
  
          <!-- Optional simple frame instead of gradient -->
          <div class="absolute inset-0 pointer-events-none border-2 border-white/5 rounded-xl"></div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { defineAsyncComponent } from 'vue'
  
  // Dynamically import the ThreeAnimation component
  const ThreeAnimation = defineAsyncComponent(() => 
    import('@/components/ThreeAnimation.vue')
  )
  </script>