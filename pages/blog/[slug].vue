<!-- pages/blog/[slug].vue -->
<template>
    <div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-3xl">
        <!-- Loading state -->
        <div v-if="loading" class="flex flex-col items-center justify-center py-12">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-500 mb-4"></div>
          <p class="text-gray-500">Loading article...</p>
        </div>
        
        <!-- Error state -->
        <div v-else-if="!blog" class="text-center py-12">
          <svg class="mx-auto h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h2 class="mt-4 text-2xl font-bold text-gray-900">Blog post not found</h2>
          <p class="mt-2 text-gray-500">The article you're looking for doesn't exist or has been removed.</p>
          <NuxtLink to="/blog" class="mt-6 inline-flex items-center text-red-500 hover:text-red-700 font-medium">
            <svg class="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all articles
          </NuxtLink>
        </div>
        
        <!-- Blog post -->
        <article v-else>
          <!-- Top navigation -->
          <div class="mb-10">
            <NuxtLink to="/blog" class="inline-flex items-center text-red-500 hover:text-red-700 font-medium">
              <svg class="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to all articles
            </NuxtLink>
          </div>
          
          <!-- Category tag -->
          <p class="text-base font-semibold text-red-600 mt-8">{{ blog.category.title }}</p>
          
          <!-- Title -->
          <h1 class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            {{ blog.title }}
          </h1>
          
          <!-- Article meta -->
          <div class="mt-6 flex items-center gap-x-4">
            <img :src="blog.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50 object-cover" />
            <div>
              <p class="font-semibold text-gray-900">{{ blog.author.name }}</p>
              <div class="flex text-sm text-gray-500">
                <p>{{ blog.author.role }}</p>
                <span class="mx-2 text-gray-300">•</span>
                <time :datetime="blog.datetime">{{ blog.date }}</time>
              </div>
            </div>
          </div>
          
          <!-- Main description -->
          <p class="mt-8 text-xl/8 text-gray-700">{{ blog.description }}</p>
          
          <!-- Featured image -->
          <figure class="mt-12">
            <img :src="blog.imageUrl" alt="" class="aspect-video w-full rounded-xl object-cover" />
            
          </figure>
          
          <!-- Content section -->
          <div class="mt-12 max-w-2xl mx-auto text-base/7 text-gray-700">
            <!-- Render blog content with correct styles -->
            <div 
              class="prose prose-red prose-lg max-w-none" 
              v-html="enhancedContent"
            ></div>
            
            <!-- Share section -->
            <div class="mt-16 border-t border-gray-200 pt-8">
              <h3 class="text-lg font-semibold text-gray-900">Share this article</h3>
              <div class="mt-4 flex space-x-4">
                
                <a 
                  :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="rounded-full bg-gray-100 p-2 text-gray-500 hover:text-gray-700"
                >
                  <span class="sr-only">Share on Facebook</span>
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                  </svg>
                </a>
                <a 
                  :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="rounded-full bg-gray-100 p-2 text-gray-500 hover:text-gray-700"
                >
                  <span class="sr-only">Share on LinkedIn</span>
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z" />
                  </svg>
                </a>
                <button 
                  @click="copyToClipboard"
                  class="rounded-full bg-gray-100 p-2 text-gray-500 hover:text-gray-700"
                >
                  <span class="sr-only">Copy link</span>
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              <p v-if="copySuccess" class="mt-2 text-sm text-green-600">Link copied to clipboard!</p>
            </div>
            
            
          </div>
        </article>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useBlogsStore } from '~/stores/blogs'
  
  const route = useRoute()
  const slug = computed(() => route.params.slug)
  const blogsStore = useBlogsStore()
  const loading = computed(() => blogsStore.loading)
  const copySuccess = ref(false)
  
  // Get blog by slug
  const blog = computed(() => {
    return blogsStore.getBlogBySlug(slug.value)
  })
  
  // Get related articles (excluding current one)
  const relatedArticles = computed(() => {
    if (!blog.value) return []
    return blogsStore.getAllBlogs
      .filter(article => article.id !== blog.value.id)
      .filter(article => article.category.title === blog.value.category.title || Math.random() > 0.5)
      .slice(0, 2)
  })
  
  // Get current URL for sharing
  const shareUrl = computed(() => {
    if (process.client) {
      return window.location.href
    }
    return ''
  })
  
  // Copy URL to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl.value)
      copySuccess.value = true
      setTimeout(() => {
        copySuccess.value = false
      }, 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }
  
  // Enhanced content adds some styling to blockquotes and lists
  const enhancedContent = computed(() => {
    if (!blog.value || !blog.value.content) return ''
    
    // This is a simple enhancement, in production you might want to use a proper HTML parser
    let content = blog.value.content
    
    // Add styles to any blockquotes
    content = content.replace(
      /<blockquote>(.*?)<\/blockquote>/gs, 
      '<figure class="mt-10 border-l border-red-600 pl-9"><blockquote class="font-semibold text-gray-900">$1</blockquote></figure>'
    )
    
    return content
  })
  
  onMounted(async () => {
    if (blogsStore.getAllBlogs.length === 0) {
      await blogsStore.fetchBlogs()
    }
  })
  </script>
  
  <style>
  /* Additional prose styling to match the design */
  .prose blockquote {
    font-style: normal;
    color: #111827;
  }
  
  .prose blockquote p {
    font-weight: 600;
  }
  
  .prose h2 {
    color: #111827;
    font-weight: 600;
    font-size: 1.875rem;
    margin-top: 4rem;
    margin-bottom: 1.5rem;
  }
  
  .prose strong {
    color: #111827;
    font-weight: 600;
  }
  
  .prose ul {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  
  .prose li {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .prose p {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  </style>