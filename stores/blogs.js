// stores/blogs.js
import { defineStore } from 'pinia'

export const useBlogsStore = defineStore('blogs', {
  state: () => ({
    blogs: [],
    loading: false,
    error: null
  }),
  getters: {
    getAllBlogs: (state) => state.blogs,
    getBlogBySlug: (state) => (slug) => state.blogs.find(blog => blog.slug === slug)
  },
  actions: {
    async fetchBlogs() {
      this.loading = true
      this.error = null
      try {
        // In a real app, we'd fetch from an API
        // For now, we'll load the JSON files directly
        const blog1 = await fetch('/blog1.json').then(res => res.json())
        const blog2 = await fetch('/blog2.json').then(res => res.json())
        const blog3 = await fetch('/blog3.json').then(res => res.json())
        
        this.blogs = [blog1, blog2, blog3]
      } catch (error) {
        this.error = error.message || 'Failed to fetch blogs'
        console.error('Error fetching blogs:', error)
      } finally {
        this.loading = false
      }
    }
  }
})