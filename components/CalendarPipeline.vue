<template>
    <div class="calendar-pipeline-container">
      <div 
        ref="bookingContainer" 
        class="booking-wrapper"
      >
        <!-- The iframe will be inserted here by the script -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const bookingContainer = ref(null)
  
  onMounted(() => {
    if (bookingContainer.value) {
      // Create the iframe element
      const iframe = document.createElement('iframe')
      
      // Set all the attributes from your iframe
      iframe.src = 'https://api.leadconnectorhq.com/widget/booking/2LVcTj72B29WeIU5jaJC'
      iframe.style.width = '100%'
      iframe.style.border = 'none'
      iframe.style.overflow = 'hidden'
      iframe.scrolling = 'no'
      iframe.id = '2LVcTj72B29WeIU5jaJC_1741132386312'
      
      // Append the iframe to the container
      bookingContainer.value.appendChild(iframe)
      
      // Add a line break
      const br = document.createElement('br')
      bookingContainer.value.appendChild(br)
      
      // Create and add the script element
      const script = document.createElement('script')
      script.src = 'https://link.msgsndr.com/js/form_embed.js'
      script.type = 'text/javascript'
      
      // Add the script after the iframe
      document.body.appendChild(script)
    }
  })
  </script>
  
  <style scoped>
  .calendar-pipeline-container {
    width: 100%;
    position: relative;
  }
  
  .booking-wrapper {
    position: relative;
    width: 100%;
    min-height: 600px; /* You might want to adjust this based on your calendar's height */
  }
  </style>