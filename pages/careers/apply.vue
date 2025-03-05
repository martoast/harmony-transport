<template>
  <div class="bg-white px-6 py-24 sm:py-32 lg:px-8" v-if="job">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Apply for {{ job.role }}
      </h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">{{ job.description }}</p>
      <div class="mt-4 flex justify-center space-x-4">
        <div class="inline-flex items-center text-sm text-gray-500">
          <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          {{ job.location }}
        </div>
        <div class="inline-flex items-center text-sm text-gray-500">
          <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          {{ job.type }}
        </div>
      </div>
      <a
        :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-6 inline-block"
      >
        <div
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <svg
            class="h-5 w-5 mr-2"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
              clip-rule="evenodd"
            />
          </svg>
          Share on Facebook
        </div>
      </a>
    </div>
    <form
      @submit.prevent="submitApplication"
      class="mx-auto mt-16 max-w-xl sm:mt-20"
    >
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            for="first-name"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >First name</label
          >
          <div class="mt-2.5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              v-model="form.firstName"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
        <div>
          <label
            for="last-name"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Last name</label
          >
          <div class="mt-2.5">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              v-model="form.lastName"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="email"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Email</label
          >
          <div class="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              v-model="form.email"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="phone-number"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Phone number</label
          >
          <div class="relative mt-2.5">
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              autocomplete="tel"
              v-model="form.phone"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="resume"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Resume URL</label
          >
          <div class="mt-2.5">
            <input
              type="url"
              name="resume"
              id="resume"
              placeholder="https://docs.google.com/document/d/your-resume/"
              v-model="form.resume"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="cover-letter"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Cover Letter</label
          >
          <div class="mt-2.5">
            <textarea
              name="cover-letter"
              id="cover-letter"
              rows="4"
              v-model="form.coverLetter"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
              required
            ></textarea>
          </div>
        </div>
        <div class="flex gap-x-4 sm:col-span-2">
          <div class="flex h-6 items-center">
            <input
              type="checkbox"
              id="privacy-policy"
              v-model="form.agreeToPolicy"
              class="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
              required
            />
          </div>
          <label for="privacy-policy" class="text-sm leading-6 text-gray-600">
            By selecting this, you agree to our
            <a href="/privacy-policy" class="font-semibold text-red-500"
              >privacy&nbsp;policy</a
            >.
          </label>
        </div>
      </div>
      <div class="mt-10">
        <button
          type="submit"
          :disabled="loading || !isFormValid"
          class="block w-full rounded-md bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ loading ? "Submitting..." : "Submit Application" }}
        </button>
      </div>
      <div class="mt-4 text-sm text-gray-500">
        We are committed to protecting your privacy and handling your
        information in accordance with HIPAA. Your data is encrypted and HIPAA
        compliant. For more information, please read our
        <a href="/hipaa" class="text-red-500 hover:text-red-400 underline"
          >HIPAA Policy</a
        >.
      </div>
    </form>
    <div v-if="error" class="mt-4 text-center text-red-600">{{ error }}</div>
    <div v-if="success" class="mt-4 text-center text-green-600">
      Your application has been submitted successfully! We will contact you soon.
    </div>
  </div>
  <div v-else class="bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Job Not Found
      </h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">
        We couldn't find the job you're looking for. Please return to the careers page and try again.
      </p>
      <div class="mt-6">
        <NuxtLink to="/careers" class="text-red-500 font-medium">Back to Careers</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useJobsStore } from '~/stores/jobs'

// Get job ID from route
const route = useRoute()
const jobId = computed(() => parseInt(route.query.id) || null)

// Get job from store
const jobsStore = useJobsStore()
const job = computed(() => jobId.value ? jobsStore.getJobById(jobId.value) : null)

// Share URL
const shareUrl = computed(() => {
  if (process.client) {
    return window.location.href
  }
  return ''
})

// Form state
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  resume: '',
  coverLetter: '',
  agreeToPolicy: false,
  jobId: jobId
})

const loading = ref(false)
const error = ref(null)
const success = ref(false)

// Check if form is valid
const isFormValid = computed(() => {
  return form.value.firstName && 
         form.value.lastName && 
         form.value.email && 
         form.value.phone && 
         form.value.resume && 
         form.value.coverLetter && 
         form.value.agreeToPolicy &&
         isValidUrl(form.value.resume)
})

// Submit application
const submitApplication = async () => {
  try {
    loading.value = true
    error.value = null
    
    // Validate form
    if (!form.value.firstName || !form.value.lastName || !form.value.email || 
        !form.value.phone || !form.value.resume || !form.value.coverLetter || 
        !form.value.agreeToPolicy) {
      throw new Error('Please fill out all required fields')
    }
    
    // Validate resume URL
    if (!isValidUrl(form.value.resume)) {
      throw new Error('Please enter a valid URL for your resume')
    }
    
    // Prepare payload for webhook
    const payload = {
      lead: {
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        email: form.value.email,
        phone: form.value.phone,
        coverLetter: form.value.coverLetter,
        jobId: jobId.value,
        jobTitle: job.value.role,
        resume: form.value.resume // Send resume as URL string
      }
    }
    
    // Submit to webhook
    await $fetch('/api/apply-webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload
    })
    
    // Reset form and show success message
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      resume: '',
      coverLetter: '',
      agreeToPolicy: false,
      jobId: jobId
    }
    
    success.value = true
    
    // Scroll to success message
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }, 100)
    
  } catch (err) {
    error.value = err.message || 'An error occurred while submitting your application. Please try again.'
    console.error('Error submitting application:', err)
  } finally {
    loading.value = false
  }
}

// Helper function to validate URL
const isValidUrl = (url) => {
  if (!url) return false
  try {
    new URL(url)
    return true
  } catch (err) {
    return false
  }
}
</script>