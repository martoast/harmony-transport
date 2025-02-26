<template>
    <div ref="container" class="w-full h-[300px] md:h-[400px] lg:h-[500px] relative mx-auto">
      <!-- Three.js container -->
      <div ref="threeContainer" class="w-full h-full"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
  
  const { $initThree } = useNuxtApp()
  const container = ref(null)
  const threeContainer = ref(null)
  let cleanup = null
  
  onMounted(async () => {
    // Short delay to ensure DOM is fully rendered
    await nextTick()
    
    if (threeContainer.value) {
      try {
        cleanup = $initThree(threeContainer.value)
      } catch (error) {
        console.error('Error initializing Three.js:', error)
      }
    }
  })
  
  onBeforeUnmount(() => {
    if (cleanup) {
      cleanup()
    }
  })
  </script>