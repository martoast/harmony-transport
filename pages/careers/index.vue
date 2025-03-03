<template>
  <div class="bg-white" style="padding-top: 10rem; padding-bottom: 8rem;">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Career Search</h1>
          <p class="mt-2 max-w-xl text-xl text-gray-600 mb-8">
            If you have a heart for serving others and want to make a meaningful difference in the lives of others, we'd love to welcome you to our family.
          </p>
          <!-- Search input -->
          <div class="mb-8 max-w-xl">
            <label for="search" class="sr-only">Search jobs</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input
                type="search"
                id="search"
                v-model="searchTerm"
                class="block w-full p-4 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500"
                placeholder="Search for jobs by role or location..."
              >
            </div>
          </div>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">
            <span class="text-red-500">{{ filteredJobs.length }}</span> Live Results
          </h2>
        </div>
      </div>
      
      <!-- Job listings -->
      <ul role="list" class="divide-y divide-gray-200 mt-8">
        <li 
          v-for="job in displayedJobs" 
          :key="job.id" 
          class="py-6 hover:bg-gray-50 transition duration-150 ease-in-out rounded-lg"
        >
          <div class="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
            <div class="flex-1 min-w-0">
              <h3 class="text-lg font-medium text-gray-900">
                {{ job.role }}
              </h3>
              <p class="mt-1 text-gray-500">{{ job.description }}</p>
              <!-- <div class="mt-2 flex items-center text-sm text-gray-500">
                <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                {{ job.location }}
              </div> -->
              <div class="mt-2 flex items-center text-sm text-gray-500">
                <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                {{ job.type }}
              </div>
            </div>
            <div class="flex flex-col items-start sm:items-end">
              <p class="text-lg font-semibold text-gray-900">{{ job.hourlyRate }}</p>
              <a :href="'/careers/apply?id=' + job.id" class="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Apply now
              </a>
            </div>
          </div>
        </li>
      </ul>
      <!-- Pagination -->
      <div v-if="totalPages > 1" class="mt-8 flex items-center justify-between">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
        >
          Previous
        </button>
        <span class="text-sm text-gray-700">
          Page {{ currentPage }} of {{ totalPages }}
        </span>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useJobsStore } from '~/stores/jobs'

// Get jobs from the store
const jobsStore = useJobsStore()
const jobs = computed(() => jobsStore.getAllJobs)

// Search and pagination
const searchTerm = ref('')
const currentPage = ref(1)
const itemsPerPage = 5

// Filter jobs based on search term
const filteredJobs = computed(() => {
  if (!searchTerm.value) return jobs.value
  
  const lowercaseSearch = searchTerm.value.toLowerCase()
  return jobs.value.filter(job => 
    (job.type && job.type.toLowerCase().includes(lowercaseSearch)) ||
    (job.location && job.location.toLowerCase().includes(lowercaseSearch)) ||
    (job.role && job.role.toLowerCase().includes(lowercaseSearch))
  )
})

// Calculate total pages based on filtered results
const totalPages = computed(() => Math.max(1, Math.ceil(filteredJobs.value.length / itemsPerPage)))

// Get jobs for current page
const displayedJobs = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredJobs.value.slice(start, end)
})

// Pagination controls
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}
</script>