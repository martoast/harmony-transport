// stores/jobs.js
import { defineStore } from 'pinia'

export const useJobsStore = defineStore('jobs', {
  state: () => ({
    jobs: [
      {
        id: 1,
        role: 'EMT - Basic',
        description: 'Provide basic emergency medical care and transportation for patients who require ambulance service.',
        location: 'San Antonio, TX',
        type: 'Full-time',
        salary: '$40,000 - $55,000',
        hourlyRate: '$15.50/hour',
        shifts: '18 hours',
        alternateNames: ['EMT-B']
      },
      {
        id: 2,
        role: 'Paramedic',
        description: 'Provide advanced emergency medical care for critical and emergent patients who access the emergency medical system.',
        location: 'New Braunfels, TX',
        type: 'Full-time',
        salary: '$60,000 - $80,000',
        hourlyRate: '$25 - $30 DOE',
        shifts: '18 hours'
      }
    ]
  }),
  getters: {
    getAllJobs: (state) => state.jobs,
    getJobById: (state) => (id) => state.jobs.find(job => job.id === id),
    getEMTJobs: (state) => state.jobs.filter(job => job.role.toUpperCase().includes('EMT')),
    getParamedicJobs: (state) => state.jobs.filter(job => job.role.toUpperCase().includes('PARAMEDIC'))
  },
  actions: {
    addJob(job) {
      this.jobs.push({
        id: this.jobs.length + 1,
        ...job
      })
    },
    updateJob(updatedJob) {
      const index = this.jobs.findIndex(job => job.id === updatedJob.id)
      if (index !== -1) {
        this.jobs[index] = updatedJob
      }
    },
    removeJob(id) {
      this.jobs = this.jobs.filter(job => job.id !== id)
    }
  }
})