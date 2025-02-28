<template>
  <section class="relative min-h-screen">
    <!-- Background Image and Overlay -->
    <div class="absolute inset-0 w-full h-full">
      <img
        src="/wallpaper.jpg"
        alt="Professional medical transport ambulance"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <!-- Gradient overlay for better text readability -->
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
    </div>

    <!-- Navbar -->
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
        <!-- Logo -->
        <div class="flex lg:flex-1">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Apollo</span>
            <img src="/logo.jpg" class="h-12 w-auto" alt="Apollo" />
          </a>
        </div>
        
        <!-- Mobile menu button -->
        <div class="flex lg:hidden">
          <button @click="mobileMenuOpen = true" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        
        <!-- Desktop nav links -->
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold text-white hover:text-red-400 transition-colors">
            {{ item.name }}
          </a>
        </div>
        
        <!-- Desktop quick action buttons -->
        <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <a href="tel:+1(956)382-4168" class="flex items-center text-white hover:text-red-400 transition-colors">
            <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span class="text-sm">(956) 382-4168</span>
          </a>
          <a href="sms:+1(956)382-4168" class="flex items-center text-white hover:text-red-400 transition-colors">
            <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span class="text-sm">Text Us</span>
          </a>
        </div>
      </nav>
      
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="lg:hidden">
        <div class="fixed inset-0 z-50"></div>
        <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/90 backdrop-blur-sm px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div class="flex items-center justify-between">
            <a href="/" class="-m-1.5 p-1.5">
              <span class="sr-only">Apollo</span>
              <img class="h-8 w-auto" src="/logo.png" alt="Apollo" />
            </a>
            <button @click="mobileMenuOpen = false" type="button" class="-m-2.5 rounded-md p-2.5 text-white">
              <span class="sr-only">Close menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <!-- Mobile menu links -->
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <!-- Navigation items -->
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href" 
                   class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/10">
                  {{ item.name }}
                </a>
              </div>
              
              <!-- Quick action items -->
              <div class="py-6 space-y-2">
                <a href="tel:+1(956)382-4168" class="-mx-3 flex items-center rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/10">
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us: (956) 382-4168
                </a>
                <a href="sms:+1(956)382-4168" class="-mx-3 flex items-center rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/10">
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Text Us
                </a>
                <a href="#request-transport" @click="mobileMenuOpen = false" class="-mx-3 flex items-center rounded-lg px-3 py-2 text-base font-semibold text-white bg-red-500 hover:bg-red-600">
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Request Transport
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Content -->
    <div class="relative h-screen flex items-center">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl">
          <!-- Main Content -->
          <div class="space-y-6">
            <!-- Badge -->
            <div class="inline-flex items-center px-4 py-2 bg-red-500/20 backdrop-blur-sm rounded-full">
              <div class="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
              <span class="ml-2 text-sm font-medium text-white">24/7 Emergency Medical Transport</span>
            </div>

            <!-- Heading -->
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Professional Medical Transportation
              <span class="block text-red-500">You Can Trust</span>
            </h1>

            <!-- Description -->
            <p class="text-xl md:text-2xl text-gray-200 max-w-2xl">
              Reliable, compassionate, and safe medical transport services delivered by highly trained professionals.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#request-transport"
                class="inline-flex items-center justify-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/50"
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
                href="tel:+1(956)382-4168"
                class="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm transition-all duration-300"
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

            <!-- Trust Indicators -->
            <div class="hidden md:flex flex-wrap items-center gap-6 pt-8">
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
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
      <span class="text-white/70 text-sm mb-2">Scroll to learn more</span>
      <div class="w-1 h-8 bg-white/20 rounded-full relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full bg-red-500 animate-scroll"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Navigation items
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'Coverage Areas', href: '#coverage' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

// Mobile menu state
const mobileMenuOpen = ref(false)
</script>

<style scoped>
@keyframes scroll {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

.animate-scroll {
  animation: scroll 1.5s ease-in-out infinite;
}
</style>