<template>
  <div id="contact" class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
      <div class="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-400 to-red-600 opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact Us</h2>
      <p class="mt-2 text-lg/8 text-gray-600">Have questions about our services? We're here to help. Send us a message and we'll respond as soon as possible.</p>
    </div>
    
    <div class="mx-auto mt-16 max-w-xl sm:mt-20">
      <!-- Success Message -->
      <div v-if="success" class="mb-8 rounded-md bg-green-50 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-green-400">Thank you for your message! We'll be in touch soon.</p>
          </div>
          <div class="ml-auto pl-3">
            <div class="-mx-1.5 -my-1.5">
              <button @click="success = false" type="button" class="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50">
                <span class="sr-only">Dismiss</span>
                <XMarkIcon class="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Contact Information Cards -->
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 mb-12">
        <!-- Phone Card -->
        <div class="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-950/5 transition-all duration-300 hover:shadow-md">
          <div class="flex items-center">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500">
              <PhoneIcon class="h-6 w-6" aria-hidden="true" />
            </div>
            <div class="ml-4">
              <h3 class="text-base font-semibold text-gray-900">Call Us</h3>
              <a href="tel:+1(210)935-6600" class="mt-2 block text-base font-medium text-red-500 hover:text-red-600">(210)935-6600</a>
            </div>
          </div>
        </div>
        
        <!-- Email Card -->
        <div class="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-950/5 transition-all duration-300 hover:shadow-md">
          <div class="flex items-center">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500">
              <EnvelopeIcon class="h-6 w-6" aria-hidden="true" />
            </div>
            <div class="ml-4">
              <h3 class="text-base font-semibold text-gray-900">Email Us</h3>
              <p class="mt-1 text-sm text-gray-500">We'll respond within 24 hours</p>
              <a href="mailto:contact@apollo-mts.com" class="mt-2 block text-base font-medium text-red-500 hover:text-red-600">info@apollotransport.com</a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="relative rounded-2xl bg-white shadow-lg ring-1 ring-gray-950/5 p-6 sm:p-8">
        <form @submit.prevent="onSubmit" class="space-y-6">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label for="first-name" class="block text-sm font-semibold text-gray-900">First name</label>
              <div class="mt-2.5">
                <input 
                  v-model="formData.firstName" 
                  type="text" 
                  name="first-name" 
                  id="first-name" 
                  autocomplete="given-name" 
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" 
                />
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm font-semibold text-gray-900">Last name</label>
              <div class="mt-2.5">
                <input 
                  v-model="formData.lastName" 
                  type="text" 
                  name="last-name" 
                  id="last-name" 
                  autocomplete="family-name" 
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" 
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-semibold text-gray-900">Email</label>
              <div class="mt-2.5">
                <input 
                  v-model="formData.email" 
                  type="email" 
                  name="email" 
                  id="email" 
                  autocomplete="email" 
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" 
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="phone-number" class="block text-sm font-semibold text-gray-900">Phone number</label>
              <div class="mt-2.5">
                <input 
                  v-model="formData.phone" 
                  type="tel" 
                  name="phone-number" 
                  id="phone-number" 
                  autocomplete="tel" 
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" 
                  placeholder="(210)935-6600"
                />
              </div>
            </div>
            
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold text-gray-900">Message</label>
              <div class="mt-2.5">
                <textarea 
                  v-model="formData.message" 
                  name="message" 
                  id="message" 
                  rows="4" 
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>
            </div>
            <div class="sm:col-span-2 flex items-start">
              <div class="flex h-6 items-center">
                <Switch 
                  v-model="formData.agreed" 
                  :class="[formData.agreed ? 'bg-red-500' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2']"
                >
                  <span class="sr-only">Agree to policies</span>
                  <span 
                    aria-hidden="true" 
                    :class="[formData.agreed ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" 
                  />
                </Switch>
              </div>
              <div class="ml-3">
                <p class="text-sm text-gray-600">
                  By selecting this, you agree to our 
                  <a href="/privacy-policy" class="font-semibold text-red-500 hover:text-red-600">privacy policy</a>.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Error message if any -->
          <div v-if="error" class="rounded-md bg-red-50 p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <ExclamationCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-red-800">{{ error }}</p>
              </div>
            </div>
          </div>
          
          <div>
            <button 
              type="submit" 
              class="block w-full rounded-md bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 transition-all duration-300" 
              :disabled="!formData.agreed || loading"
              :class="{'opacity-70 cursor-not-allowed': !formData.agreed || loading, 'hover:shadow-lg transform hover:scale-[1.01]': formData.agreed && !loading}"
            >
              <span v-if="!loading">Send Message</span>
              <span v-else class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  ExclamationCircleIcon, 
  CheckCircleIcon, 
  XMarkIcon 
} from '@heroicons/vue/24/outline'
import { Switch } from '@headlessui/vue'

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  agreed: false
})

const loading = ref(false)
const error = ref(null)
const success = ref(false)

const onSubmit = async () => {
  try {
    loading.value = true
    error.value = null
    
    // Validate form
    if (!formData.value.firstName || !formData.value.lastName || 
        !formData.value.email || !formData.value.phone || !formData.value.message || 
        !formData.value.agreed) {
      throw new Error('Please fill out all required fields')
    }
    
    // Prepare payload for webhook
    const payload = {
      lead: {
        firstName: formData.value.firstName,
        lastName: formData.value.lastName,
        email: formData.value.email,
        phone: formData.value.phone,
        message: formData.value.message
      }
    }
    
    // Submit to webhook
    await $fetch('/api/contact-webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload
    })
    
    // Reset form and show success message
    formData.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      agreed: false
    }
    
    success.value = true
    
    // Scroll to top to show success message
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    
  } catch (err) {
    error.value = err.message || 'An error occurred while sending your message. Please try again.'
    console.error('Error sending message:', err)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Optional: Add custom styles here if needed */
.focus-ring {
  @apply focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none;
}

@media (max-width: 640px) {
  .sm\:grid-cols-2 {
    grid-template-columns: 1fr;
  }
}
</style>