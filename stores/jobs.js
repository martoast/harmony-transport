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
        salary: '$40,000 - $55,000'
      },
      {
        id: 2,
        role: 'Paramedic',
        description: 'Provide advanced emergency medical care for critical and emergent patients who access the emergency medical system.',
        location: 'New Braunfels, TX',
        type: 'Full-time',
        salary: '$60,000 - $80,000'
      },
      {
        id: 3,
        role: 'Medical Transportation Driver',
        description: 'Transport patients to and from healthcare facilities in a safe and timely manner, assisting with mobility as needed.',
        location: 'Schertz, TX',
        type: 'Part-time',
        salary: '$35,000 - $45,000'
      },
      {
        id: 4,
        role: 'Wheelchair Van Driver',
        description: 'Operate wheelchair-accessible vehicles to transport patients with mobility challenges to medical appointments and other destinations.',
        location: 'Cibolo, TX',
        type: 'Full-time',
        salary: '$38,000 - $48,000'
      },
      {
        id: 5,
        role: 'Dispatcher',
        description: 'Coordinate and dispatch medical transportation vehicles, responding to requests and optimizing routes for efficient service.',
        location: 'San Antonio, TX',
        type: 'Full-time',
        salary: '$42,000 - $55,000'
      },
      {
        id: 6,
        role: 'Customer Service Representative',
        description: 'Serve as the first point of contact for patients and healthcare facilities, scheduling transportation and addressing inquiries.',
        location: 'Remote',
        type: 'Full-time',
        salary: '$38,000 - $48,000'
      },
      {
        id: 7,
        role: 'Operations Manager',
        description: 'Oversee daily operations of the medical transportation service, ensuring compliance with regulations and high-quality service delivery.',
        location: 'San Antonio, TX',
        type: 'Full-time',
        salary: '$70,000 - $90,000'
      },
      {
        id: 8,
        role: 'Maintenance Technician',
        description: 'Perform regular maintenance and repairs on the ambulance fleet to ensure operational readiness and safety compliance.',
        location: 'Boerne, TX',
        type: 'Full-time',
        salary: '$45,000 - $60,000'
      },
      {
        id: 9,
        role: 'Billing Specialist',
        description: 'Process medical transportation claims, verifying insurance coverage and ensuring accurate billing for services provided.',
        location: 'Remote',
        type: 'Full-time',
        salary: '$40,000 - $55,000'
      },
      {
        id: 10,
        role: 'Stretcher Transport Specialist',
        description: 'Provide safe transport for non-ambulatory patients who require stretcher services between healthcare facilities.',
        location: 'New Braunfels, TX',
        type: 'Full-time',
        salary: '$38,000 - $52,000'
      },
      {
        id: 11,
        role: 'EMT - Bariatric Transport',
        description: 'Specialize in the safe and dignified transport of bariatric patients, utilizing specialized equipment and techniques.',
        location: 'San Antonio, TX',
        type: 'Full-time',
        salary: '$45,000 - $60,000'
      },
      {
        id: 12,
        role: 'Long-Distance Transport Coordinator',
        description: 'Arrange and coordinate long-distance medical transports, ensuring appropriate staffing, equipment, and patient comfort.',
        location: 'San Antonio, TX',
        type: 'Full-time',
        salary: '$50,000 - $65,000'
      }
    ]
  }),
  getters: {
    getAllJobs: (state) => state.jobs,
    getJobById: (state) => (id) => state.jobs.find(job => job.id === id)
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