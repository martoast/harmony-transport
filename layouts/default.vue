<template>
  <div>
    <Navbar/>
    
    <slot />
    
    <!-- Chat Widget Container -->
    <div class="chat-widget-wrapper">
      <!-- Chat Button -->
      <button 
        @click="toggleChat" 
        class="chat-toggle-button"
        :class="{ 'active': isChatOpen }"
      >
        <ChatBubbleLeftRightIcon v-if="!isChatOpen" class="h-6 w-6" />
        <XMarkIcon v-else class="h-6 w-6" />
      </button>
      
      <!-- Chat Widget Container -->
      <div 
        v-show="isChatOpen" 
        class="chat-container"
      >
        <div class="chat-instructions">
          <p>Click on the assistant icon below to start chatting</p>
          <div class="instructions-arrow">↓</div>
        </div>
        <iframe 
          src="https://iframes.ai/o/1741039334750x182653902329741300?color=1610a3&icon="
          allow="microphone"
          class="chat-iframe"
          ref="assistantFrame"
        ></iframe>
      </div>
    </div>
    
    <Footer/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/vue/24/solid'

// Chat toggle state
const isChatOpen = ref(false)
const assistantFrame = ref(null)

// Toggle chat visibility
const toggleChat = () => {
  isChatOpen.value = !isChatOpen.value
  
  // Check microphone permissions when opening
  if (isChatOpen.value && assistantFrame.value) {
    checkMicrophonePermissions()
  }
}

// Check microphone permissions
const checkMicrophonePermissions = () => {
  if (navigator.permissions) {
    navigator.permissions.query({ name: 'microphone' })
      .then(result => {
        if (result.state === 'granted') {
          console.log('Microphone access already granted')
        } else if (result.state === 'prompt') {
          console.log('User will be prompted for microphone access')
        }
      })
      .catch(err => {
        console.error('Error checking microphone permissions:', err)
      })
  }
}

// Check permissions when frame loads
onMounted(() => {
  if (assistantFrame.value) {
    assistantFrame.value.addEventListener('load', checkMicrophonePermissions)
  }
})

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
.chat-widget-wrapper {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  pointer-events: none;
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
  pointer-events: auto;
}

.chat-toggle-button:hover {
  background-color: #2563eb;
  transform: scale(1.05);
}

.chat-toggle-button.active {
  background-color: #1e40af;
}

.chat-container {
  width: 400px;
  height: 500px;
  margin-bottom: 10px;
  pointer-events: auto;
  -webkit-overflow-scrolling: touch;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.chat-instructions {
  padding: 12px;
  text-align: center;
  background-color: #f3f4f6;
  border-bottom: 1px solid #e5e7eb;
}

.chat-instructions p {
  margin: 0;
  font-size: 14px;
  color: #4b5563;
  font-weight: 500;
}

.instructions-arrow {
  font-size: 18px;
  color: #6b7280;
  margin-top: 2px;
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
}

.chat-iframe {
  width: 100%;
  flex: 1;
  border: none;
  transform: translateZ(0);
}

/* Make chat responsive on mobile */
@media (max-width: 640px) {
  .chat-container {
    width: 320px;
    height: 400px;
    position: fixed;
    bottom: 80px;
    right: 20px;
    margin: 0;
  }
  
  .chat-instructions {
    padding: 8px;
  }
  
  .chat-instructions p {
    font-size: 12px;
  }
}
</style>