<template>
  <section class="bg-gray-50 pt-16 overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Text content first -->
      <div class="mx-auto max-w-3xl text-center mb-12">
        <hgroup>
          <h2 class="text-base/7 font-semibold text-red-600">Need Medical Transportation?</h2>
          <p class="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Professional Medical Transport When You Need It Most</p>
        </hgroup>
        <p class="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600">Reliable, compassionate, and safe medical transport services delivered by highly trained professionals across San Antonio, New Braunfels, Schertz, Cibolo, and Boerne.</p>
        
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
          <!-- <a 
            href="tel:+1(210)935-6600" 
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
            (210)935-6600
          </a> -->
        </div>
        
        <!-- Social Media Links -->
        <div class="mt-6 flex flex-col items-center">
          <p class="text-sm font-medium text-gray-600 mb-3">Follow Us For Updates</p>
          <div class="flex gap-4">
            <a 
              href="https://www.facebook.com/profile.php?id=61573706578890" 
              class="group flex items-center gap-2 px-5 py-2.5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg class="h-5 w-5 text-[#1877F2] group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path 
                  fill-rule="evenodd" 
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" 
                  clip-rule="evenodd"
                />
              </svg>
              <span class="font-medium text-gray-700 group-hover:text-black">Facebook</span>
            </a>
            <a 
              href="https://www.instagram.com/apollo.ems?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              class="group flex items-center gap-2 px-5 py-2.5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-pink-300 transition-all duration-300 transform hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg class="h-5 w-5 text-[#E4405F] group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path 
                  fill-rule="evenodd" 
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" 
                  clip-rule="evenodd"
                />
              </svg>
              <span class="font-medium text-gray-700 group-hover:text-black">Instagram</span>
            </a>
          </div>
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