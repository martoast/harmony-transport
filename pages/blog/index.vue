<!-- pages/blog.vue -->
<template>
    <div class="bg-gray-50" style="padding-top: 8rem; padding-bottom: 8rem;">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Blog</h1>
            <p class="mt-2 max-w-xl text-xl text-gray-600 mb-8">
              Medical transportation insights and industry news
            </p>
            <!-- Search input -->
            <div class="mb-8 max-w-xl">
              <label for="search" class="sr-only">Search articles</label>
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
                  placeholder="Search for articles by title, content, or category..."
                >
              </div>
            </div>
            
            <!-- Category filter -->
            <div class="mb-8 max-w-xl flex space-x-4 items-center">
              <div class="w-2/3">
                <select
                  v-model="selectedCategory"
                  class="block w-full p-3 pl-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500"
                >
                  <option value="">All Categories</option>
                  <option v-for="category in categories" :key="category" :value="category">
                    {{ category }}
                  </option>
                </select>
              </div>
              <button
                v-if="searchTerm || selectedCategory"
                @click="clearFilters"
                class="inline-flex items-center px-4 py-3 text-sm font-medium rounded-md text-red-600 bg-red-50 hover:bg-red-100"
              >
                Clear filters
              </button>
            </div>
            
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">
              <span class="text-red-500">{{ filteredBlogs.length }}</span> Articles Found
            </h2>
          </div>
        </div>
        
        <!-- Loading state -->
        <div v-if="loading" class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-500"></div>
          <p class="mt-2 text-gray-500">Loading blog posts...</p>
        </div>
        
        <!-- Error state -->
        <div v-else-if="error" class="text-center py-12 bg-red-50 rounded-xl">
          <svg class="mx-auto h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h3 class="mt-2 text-lg font-medium text-gray-900">Error loading blog posts</h3>
          <p class="mt-1 text-sm text-gray-500">{{ error }}</p>
        </div>
        
        <!-- No results -->
        <div v-else-if="filteredBlogs.length === 0" class="text-center py-12 bg-white rounded-xl shadow-lg">
          <div class="p-6">
            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
            </svg>
            <h3 class="mt-2 text-lg font-medium text-gray-900">No results found</h3>
            <p class="mt-1 text-sm text-gray-500">
              We couldn't find any blog posts matching your criteria. Try adjusting your filters or search term.
            </p>
            <div class="mt-6">
              <button
                @click="clearFilters"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Clear filters
              </button>
            </div>
          </div>
        </div>
        
        <!-- Blog posts with card design -->
        <div v-else class="grid grid-cols-1 gap-12 mt-8">
          <div 
            v-for="post in displayedBlogs" 
            :key="post.id"
            class="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div class="grid md:grid-cols-3 gap-4">
              <!-- Blog image -->
              <div class="md:col-span-1 relative">
                <div class="absolute top-0 left-0 bg-red-500 text-white text-sm font-bold px-4 py-1 rounded-br-lg z-10">
                  {{ post.category.title }}
                </div>
                <img 
                  :src="post.imageUrl" 
                  :alt="post.title"
                  class="w-full h-full object-cover md:h-72"
                  loading="lazy"
                />
              </div>
              
              <!-- Blog details -->
              <div class="p-6 md:p-8 md:col-span-2">
                <div class="flex flex-col h-full">
                  <div>
                    <div class="flex items-center text-sm text-gray-500 mb-2">
                      <time :datetime="post.datetime">{{ post.date }}</time>
                    </div>
                    
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">
                      <NuxtLink :to="`/blog/${post.slug}`" class="hover:text-red-500 transition-colors">
                        {{ post.title }}
                      </NuxtLink>
                    </h3>
                    
                    <p class="text-gray-600 mb-6">{{ post.description }}</p>
                  </div>
                  
                  <!-- Author -->
                  <div class="mt-auto pt-4 border-t border-gray-100">
                    <div class="flex items-center">
                      <img 
                        :src="post.author.imageUrl" 
                        :alt="post.author.name" 
                        class="w-10 h-10 rounded-full mr-4 object-cover"
                      />
                      <div class="ml-3">
                        <p class="font-semibold text-gray-900">{{ post.author.name }}</p>
                        <p class="text-sm text-gray-500">{{ post.author.role }}</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Read more link -->
                  <div class="mt-6">
                    <NuxtLink 
                      :to="`/blog/${post.slug}`" 
                      class="inline-flex items-center text-red-500 hover:text-red-600 font-medium text-sm transition-colors"
                    >
                      Read full article
                      <svg 
                        class="ml-2 w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          stroke-width="2" 
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Pagination -->
        <div v-if="totalPages > 1" class="mt-12 flex items-center justify-between">
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            type="button"
            aria-label="Go to previous page"
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span class="text-sm text-gray-700">
            Page {{ currentPage }} of {{ totalPages }}
          </span>
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            type="button"
            aria-label="Go to next page"
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch, onMounted } from 'vue'
  import { useBlogsStore } from '~/stores/blogs'
  
  // Get store and blogs data
  const blogsStore = useBlogsStore()
  const blogs = computed(() => blogsStore.getAllBlogs)
  const loading = computed(() => blogsStore.loading)
  const error = computed(() => blogsStore.error)
  
  // Search and filter state
  const searchTerm = ref('')
  const selectedCategory = ref('')
  const currentPage = ref(1)
  const itemsPerPage = 3 // Showing fewer items per page since cards are larger
  
  // Get all unique categories from blogs
  const categories = computed(() => {
    if (!blogs.value.length) return []
    const categorySet = new Set(blogs.value.map(blog => blog.category.title))
    return Array.from(categorySet).sort()
  })
  
  // Filter blogs based on search term and category
  const filteredBlogs = computed(() => {
    let filtered = blogs.value
    
    // Filter by search term
    if (searchTerm.value) {
      const searchLower = searchTerm.value.toLowerCase()
      filtered = filtered.filter(blog => 
        blog.title.toLowerCase().includes(searchLower) || 
        blog.description.toLowerCase().includes(searchLower) ||
        (blog.content && blog.content.toLowerCase().includes(searchLower)) ||
        blog.category.title.toLowerCase().includes(searchLower)
      )
    }
    
    // Filter by selected category
    if (selectedCategory.value) {
      filtered = filtered.filter(blog => 
        blog.category.title === selectedCategory.value
      )
    }
    
    return filtered
  })
  
  // Get paginated blogs for display
  const displayedBlogs = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return filteredBlogs.value.slice(start, end)
  })
  
  // Calculate total pages
  const totalPages = computed(() => Math.max(1, Math.ceil(filteredBlogs.value.length / itemsPerPage)))
  
  // Clear all filters
  const clearFilters = () => {
    searchTerm.value = ''
    selectedCategory.value = ''
    currentPage.value = 1
  }
  
  // Pagination controls
  const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--
    // Scroll to top of content
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++
    // Scroll to top of content
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  // Reset page when filters change
  watch([searchTerm, selectedCategory], () => {
    currentPage.value = 1
  })
  
  // Check if current page is still valid after filtering
  watch(totalPages, (newTotalPages) => {
    if (currentPage.value > newTotalPages && newTotalPages > 0) {
      currentPage.value = newTotalPages
    }
  })
  
  // Fetch blogs on component mount
  onMounted(async () => {
    if (blogs.value.length === 0) {
      await blogsStore.fetchBlogs()
    }
  })
  </script>