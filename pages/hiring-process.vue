<template>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base font-semibold leading-7 text-red-500">Join Our Team</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Hiring Process</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">We've designed our hiring process to be straightforward and informative. Here's what you can expect when you apply to join our team.</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div v-for="step in hiringSteps" :key="step.name" class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500">
                  <component :is="step.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {{ step.name }}
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">{{ step.description }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { DocumentTextIcon, UserGroupIcon, ChatBubbleLeftRightIcon, DocumentCheckIcon, ClipboardDocumentCheckIcon, PhoneIcon, BriefcaseIcon } from '@heroicons/vue/24/outline'
  
  const hiringSteps = [
    {
      name: "Apply Online",
      description: "Select \"Apply Now\" on the job that interests you. Take 5-10 minutes to complete the application and submit. You'll receive a confirmation email shortly after.",
      icon: DocumentTextIcon,
    },
    {
      name: "Application Review",
      description: "Every application is given due consideration. If your experience and skills align with the job requirements, we'll contact you to schedule an interview.",
      icon: UserGroupIcon,
    },
    {
      name: "Interviews & Assessments",
      description: "Your interview will be conducted by phone or in person. This process may include additional interviews, reference checks and skill assessments.",
      icon: ChatBubbleLeftRightIcon,
    },
    {
      name: "Offer Letter",
      description: "If selected, you'll receive an offer by phone and email. The email will include a letter to sign electronically and return to us.",
      icon: DocumentCheckIcon,
    },
    {
      name: "Post-Offer Process",
      description: "You'll receive all necessary forms and instructions. This process may include a background check and/or a drug screen.",
      icon: ClipboardDocumentCheckIcon,
    },
    {
      name: "Team Check-ins",
      description: "As we await screening results, we'll provide updates and let you know what to expect for your first day on the job.",
      icon: PhoneIcon,
    },
    {
      name: "First Day & Onboarding",
      description: "On your first day, you'll typically meet coworkers, take a workplace tour and begin any required training.",
      icon: BriefcaseIcon,
    },
  ]
  </script>