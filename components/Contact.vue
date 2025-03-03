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
              <p class="mt-1 text-sm text-gray-500">Mon-Fri, 8am-6pm</p>
              <a href="tel:+19563824168" class="mt-2 block text-base font-medium text-red-500 hover:text-red-600">(956) 382-4168</a>
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
                  placeholder="(956) 382-4168" 
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="subject" class="block text-sm font-semibold text-gray-900">Subject</label>
              <div class="mt-2.5">
                <select 
                  v-model="formData.subject" 
                  id="subject" 
                  name="subject" 
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="service">Service Information</option>
                  <option value="quote">Request a Quote</option>
                  <option value="billing">Billing Question</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
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
          <div>
            <button 
              type="submit" 
              class="block w-full rounded-md bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 transition-all duration-300" 
              :disabled="!formData.agreed"
              :class="{'opacity-70 cursor-not-allowed': !formData.agreed, 'hover:shadow-lg transform hover:scale-[1.01]': formData.agreed}"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>

    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
import { Switch } from '@headlessui/vue'

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  agreed: false
})

const onSubmit = () => {
  console.log('Form submitted with data:', formData.value)
  // Here you would typically send the data to your backend
  // For now, we're just logging it to the console
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