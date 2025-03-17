<template>
    <div id="video-section" class="overflow-hidden bg-gray-50 py-16 lg:py-24">
      <div class="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <!-- Decorative SVGs -->
        <svg class="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
          <defs>
            <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
        </svg>
        
       <!-- YouTube Video Container -->
       <div class="mx-auto mt-4 max-w-4xl">
        <div class="mt-16 sm:mt-24 relative w-full overflow-hidden rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10" style="padding-top: 56.25%">
            <iframe
              :src="`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=0&rel=0`"
              class="absolute top-0 left-0 w-full h-full"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
       </div>
  
      </div>
    </div>
  </template>
  
  <script setup>
 
  
  const youtubeVideoId = ref("iTE7KqSLixc?si=r30NmUHARUl9mBx6")

  </script>