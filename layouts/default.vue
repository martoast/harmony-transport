<template>
  <div>
    <Navbar/>
    
    <slot />
    
    <!-- Chatbot with toggle button -->
    <div class="chatbot-wrapper">
      <!-- Chat button -->
      <button 
        @click="toggleChat" 
        class="chat-toggle-button"
        :class="{ 'active': isChatOpen }"
      >
        <ChatBubbleLeftRightIcon v-if="!isChatOpen" class="h-6 w-6" />
        <XMarkIcon v-else class="h-6 w-6" />
      </button>
      
      <!-- Chatbot iframe -->
      <div 
        v-show="isChatOpen" 
        class="chatbot-container"
      >
        <iframe 
          src="https://app.fastbots.ai/embed/cm7th0gwg07ats5k4lvc30l05"
          class="chatbot-iframe">
        </iframe>
      </div>
    </div>
    
    <Footer/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/vue/24/solid'

// Chatbot toggle state
const isChatOpen = ref(false)

// Toggle chat visibility
const toggleChat = () => {
  isChatOpen.value = !isChatOpen.value
}

useSeoMeta({
  title: 'Apollo Ambulance Service: Professional Medical Transportation',
  ogTitle: 'Apollo Ambulance Service: Professional Medical Transportation You Can Trust',
  author: 'Apollo Medical Transportation',
  charset: 'utf-8',
  description: "Apollo provides reliable 24/7 emergency medical transportation services including ambulatory, wheelchair, stretcher, bariatric, and hospice transports. Our professional, compassionate team ensures safe and comfortable transport for all medical needs.",
  ogDescription: "Apollo provides reliable 24/7 emergency medical transportation services including ambulatory, wheelchair, stretcher, bariatric, and hospice transports. Our professional, compassionate team ensures safe and comfortable transport for all medical needs.",
  robots: 'index, follow',
  googleSiteVerification: '',
  appleMobileWebAppCapable: 'yes',
  mobileWebAppCapable: 'yes',
  ogImage: '/logo.jpg',
  ogUrl: 'https://apollo-mts.com/',
  ogLocaleAlternate: ['en_US'],
  ogType: 'website'
})
</script>

<style>
.chatbot-wrapper {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  pointer-events: none; /* This allows clicks to pass through the wrapper itself */
}

.chat-toggle-button {
  background-color: #3b82f6;
  color: white;
  border-radius: 9999px;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
  margin-top: 10px;
  pointer-events: auto; /* Enable clicks on the button */
}

.chat-toggle-button:hover {
  background-color: #2563eb;
  transform: scale(1.05);
}

.chat-toggle-button.active {
  background-color: #1e40af;
}

.chatbot-container {
  width: 400px;
  height: 600px;
  margin-bottom: 10px;
  pointer-events: auto; /* Enable interaction with the iframe */
  -webkit-overflow-scrolling: touch; /* Improve scrolling on iOS */
}

.chatbot-iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background-color: white;
}

/* Make chatbot responsive on mobile */
@media (max-width: 640px) {
  .chatbot-container {
    width: 320px;
    height: 500px;
    bottom: 80px;
    position: fixed;
    right: 0;
    left: 0;
    margin: 0 auto;
  }
  
  .chatbot-iframe {
    transform: translateZ(0); /* Force hardware acceleration on mobile */
  }
}
</style>