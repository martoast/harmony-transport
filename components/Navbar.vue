<template>
    <header class="absolute inset-x-0 top-0 z-50" :class="isHomePage ? '' : 'bg-white shadow-sm'">
      <nav class="flex items-center justify-between p-4 xl:px-8" aria-label="Global">
        <!-- Logo -->
        <div class="flex xl:flex-1">
          <Logo/>
        </div>
        
        <!-- Mobile menu button -->
        <div class="flex xl:hidden">
          <button 
            @click="mobileMenuOpen = true" 
            type="button" 
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors"
            :class="isHomePage ? 'text-white hover:bg-white/10 active:bg-white/20' : 'text-gray-700 hover:bg-gray-100 active:bg-gray-200'"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <!-- Desktop nav links -->
        <div class="hidden xl:flex xl:gap-x-8">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name" 
            :to="item.href" 
            class="text-sm font-semibold transition-colors relative group"
            :class="[
              isHomePage 
                ? 'text-white hover:text-red-400' 
                : 'text-gray-700 hover:text-red-600',
              { 
                'text-red-400': isHomePage && isActivePath(item.href),
                'text-red-600': !isHomePage && isActivePath(item.href)
              }
            ]"
          >
            {{ item.name }}
            <span 
              class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 ease-in-out"
              :class="[
                isHomePage ? 'bg-red-400' : 'bg-red-600',
                {
                  'w-full': isActivePath(item.href)
                }
              ]"
            ></span>
          </NuxtLink>
        </div>
        
        <!-- Desktop quick action buttons -->
        <div class="hidden xl:flex xl:flex-1 xl:justify-end xl:gap-x-4">
          <NuxtLink 
            to="tel:+1(830)590-1183" 
            class="flex items-center transition-colors"
            :class="isHomePage ? 'text-white hover:text-red-400' : 'text-gray-700 hover:text-red-600'"
          >
            <PhoneIcon class="w-5 h-5 mr-1" aria-hidden="true" />
            <span class="text-sm">(830)590-1183</span>
          </NuxtLink>
          
          <NuxtLink 
            to="#request-transport" 
            class="ml-4 inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 active:bg-red-700 rounded-lg shadow transition-colors"
          >
            <BoltIcon class="w-4 h-4 mr-1" aria-hidden="true" />
            Request Transport
          </NuxtLink>
        </div>
      </nav>
      
      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="mobileMenuOpen" class="xl:hidden">
          <div 
            class="fixed inset-0 z-50 backdrop-blur-sm" 
            :class="isHomePage ? 'bg-black/20' : 'bg-gray-800/10'"
            @click="mobileMenuOpen = false"
          ></div>
          <div 
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1"
            :class="isHomePage 
              ? 'bg-black/90 backdrop-blur-sm sm:ring-white/10' 
              : 'bg-white sm:ring-gray-900/10'"
          >
            <div class="flex items-center justify-between">
              <Logo/>
              <button 
                @click="mobileMenuOpen = false" 
                type="button" 
                class="-m-2.5 rounded-md p-2.5 transition-colors"
                :class="isHomePage 
                  ? 'text-white hover:bg-white/10 active:bg-white/20' 
                  : 'text-gray-700 hover:bg-gray-100 active:bg-gray-200'"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            <!-- Mobile menu links -->
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y" :class="isHomePage ? 'divide-gray-500/10' : 'divide-gray-200'">
                <!-- Navigation items -->
                <div class="space-y-2 py-6">
                  <NuxtLink 
                    v-for="item in navigation" 
                    :key="item.name" 
                    :to="item.href" 
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold transition-colors"
                    :class="[
                      isHomePage 
                        ? 'text-white hover:bg-white/10 active:bg-white/20' 
                        : 'text-gray-900 hover:bg-gray-50 active:bg-gray-100',
                      isHomePage && isActivePath(item.href) ? 'bg-white/10' : '',
                      !isHomePage && isActivePath(item.href) ? 'bg-gray-50' : ''
                    ]"
                    @click="mobileMenuOpen = false"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </div>
                
                <!-- Quick action items -->
                <div class="py-6 space-y-3">
                  <NuxtLink 
                    to="tel:+1(830)590-1183" 
                    class="-mx-3 flex items-center rounded-lg px-3 py-3 text-base font-semibold transition-colors"
                    :class="isHomePage 
                      ? 'text-white hover:bg-white/10 active:bg-white/20' 
                      : 'text-gray-900 hover:bg-gray-50 active:bg-gray-100'"
                  >
                    <PhoneIcon class="w-5 h-5 mr-3" aria-hidden="true" />
                    Call Us: (830)590-1183
                  </NuxtLink>
                  <NuxtLink 
                    to="sms:+1(830)590-1183" 
                    class="-mx-3 flex items-center rounded-lg px-3 py-3 text-base font-semibold transition-colors"
                    :class="isHomePage 
                      ? 'text-white hover:bg-white/10 active:bg-white/20' 
                      : 'text-gray-900 hover:bg-gray-50 active:bg-gray-100'"
                  >
                    <ChatBubbleLeftIcon class="w-5 h-5 mr-3" aria-hidden="true" />
                    Text Us
                  </NuxtLink>
                  <NuxtLink 
                    to="#request-transport" 
                    class="-mx-3 flex items-center justify-center rounded-lg px-3 py-3.5 text-base font-semibold text-white bg-red-500 hover:bg-red-600 active:bg-red-700 transition-colors shadow-lg"
                    @click="mobileMenuOpen = false"
                  >
                    <BoltIcon class="w-5 h-5 mr-2" aria-hidden="true" />
                    Request Transport
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </header>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { 
    Bars3Icon, 
    XMarkIcon, 
    PhoneIcon, 
    ChatBubbleLeftIcon,
    BoltIcon
  } from '@heroicons/vue/24/outline'
  
  // Get current route
  const route = useRoute()
  
  // Mobile menu state
  const mobileMenuOpen = ref(false)
  
  // Check if we're on the homepage
  const isHomePage = computed(() => {
    return route.path === '/' || route.path === ''
  })
  
  // Navigation items
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Coverage Areas', href: '/#coverage' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Careers', href: '/careers/' },
    { name: 'Blog', href: '/blog/' },
    { name: 'Contact', href: '/contact' },
  ]
  
  // Check if path is active (for highlighting current page/section)
  const isActivePath = (path) => {
    if (typeof window === 'undefined') return false
    
    const currentPath = window.location.pathname
    const currentHash = window.location.hash
    
    if (path === '/') {
      return currentPath === '/' && !currentHash
    } else if (path.startsWith('/#')) {
      return currentHash === path.substring(1)
    } else {
      return currentPath === path
    }
  }
  </script>