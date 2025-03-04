<template>
  <section class="relative min-h-screen overflow-hidden">
    <!-- Simple blue gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-800"></div>

    <!-- Main content -->
    <div class="relative h-screen flex flex-col justify-between">
      <!-- Hero Content -->
      <div class="flex-1 flex items-center pt-16 md:pt-20 pb-8 md:pb-10 px-4">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <!-- Text Content - Full width on mobile -->
            <div class="space-y-5 md:space-y-6 text-center lg:text-left col-span-1 lg:col-span-1 order-1">
              <!-- Badge -->
              <div class="inline-flex items-center px-4 py-2 bg-red-500/20 backdrop-blur-sm rounded-full">
                <div class="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
                <span class="ml-2 text-sm font-medium text-white">24/7 Emergency Medical Transport</span>
              </div>

              <!-- Heading with animation -->
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight split-words">
                <span class="block overflow-hidden">
                  <span class="slide-up inline-block">Professional</span>
                </span>
                <span class="block overflow-hidden">
                  <span class="slide-up inline-block delay-300">Medical Transport</span>
                </span>
                <span class="block overflow-hidden text-red-500">
                  <span class="slide-up inline-block delay-600">You Can Trust</span>
                </span>
              </h1>

              <!-- Description - Shorter on mobile -->
              <p class="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 fade-in-up delay-1000">
                Reliable, compassionate, and safe medical transport services delivered by highly trained professionals.
              </p>

              <!-- CTA Buttons - Larger on mobile, row layout for better prominence -->
              <div class="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start fade-in-up delay-1200">
                <a
                  href="#request-transport"
                  class="inline-flex items-center justify-center px-6 py-4 md:px-8 md:py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/50 text-lg"
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <a
                  href="tel:+1(830)590-1183"
                  class="inline-flex items-center justify-center px-6 py-4 md:px-8 md:py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 text-lg"
                >
                  <svg 
                    class="mr-2 w-5 h-5" 
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
                  Emergency Call
                </a>
              </div>

              <!-- Trust Indicators - Show on all devices, but simplified -->
              <div class="flex flex-wrap items-center gap-6 pt-6 justify-center lg:justify-start fade-in-up delay-1400">
                <div class="flex items-center text-white/90">
                  <svg 
                    class="w-5 h-5 mr-2 text-red-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Certified Professionals
                </div>
                <div class="flex items-center text-white/90">
                  <svg 
                    class="w-5 h-5 mr-2 text-red-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Licensed & Insured
                </div>
              </div>
            </div>

            <!-- 3D Ambulance Animation - HIDDEN ON MOBILE (Only visible on lg screens and up) -->
            <div class="hidden lg:block relative order-2">
              <AmbulanceModel />
            </div>

            <!-- Static Ambulance Image - ONLY SHOWN ON MOBILE (Hidden on lg screens and up) -->
            <div class="relative order-2 lg:hidden mt-4">
              <img 
                src="/ambulance3.jpg" 
                alt="Medical Transport Ambulance" 
                class="w-full max-w-sm mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="relative pb-8 flex flex-col items-center">
        <span class="text-white/70 text-sm mb-2">Scroll to learn more</span>
        <div class="w-1 h-8 bg-white/20 rounded-full relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-full bg-red-500 animate-scroll"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AmbulanceModel from './AmbulanceModel.vue';
</script>

<style scoped>
/* Animation keyframes */
@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scroll {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

/* Animation classes */
.slide-up {
  animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  transform: translateY(100%);
}

.fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}

.animate-scroll {
  animation: scroll 1.5s ease-in-out infinite;
}

/* Delay utilities */
.delay-150 {
  animation-delay: 150ms;
}
.delay-300 {
  animation-delay: 300ms;
}
.delay-450 {
  animation-delay: 450ms;
}
.delay-600 {
  animation-delay: 600ms;
}
.delay-750 {
  animation-delay: 750ms;
}
.delay-1000 {
  animation-delay: 1000ms;
}
.delay-1200 {
  animation-delay: 1200ms;
}
.delay-1400 {
  animation-delay: 1400ms;
}
</style>