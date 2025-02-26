<template>
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-32">
        <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently Asked Questions</h2>
          <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
            <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
              <dt>
                <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">
                  <span class="text-base font-semibold leading-7">{{ faq.question }}</span>
                  <span class="ml-6 flex h-7 items-center">
                    <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                    <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base leading-7 text-gray-600">{{ faq.answer }}</p>
              </DisclosurePanel>
            </Disclosure>
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'
  
  const faqs = [
    {
      question: "What are your hours of operation?",
      answer: "Our standard office hours are 6am – 8pm, Monday through Saturday. However, we provide transportation services 24/7. In most cases, we can be at your door within 1-2 hours of receiving a request."
    },
    {
      question: "How much do you charge for a transport?",
      answer: "Each transport is unique and depends on multiple factors such as distance, type of service required, and time of day. We encourage you to call us at (956) 382-4168 to get a personalized quote for your specific needs."
    },
    {
      question: "Can someone ride along during the transfer?",
      answer: "Yes, we encourage caregivers to ride along if it's convenient. One fully ambulatory person is welcome to accompany the patient at no additional charge."
    },
    {
      question: "How far in advance do I need to reserve a transport?",
      answer: "While we prefer 24-hour advance notice, we understand that medical needs can be unpredictable. We can accommodate most requests within a few hours, depending on availability."
    },
    {
      question: "Do you have bariatric equipment?",
      answer: "Yes, we are equipped to accommodate bariatric patients. We have the necessary equipment to provide safe and comfortable transport for patients of all sizes."
    },
    {
      question: "Will your Transport Specialist put patients into bed and arrange to transport belongings?",
      answer: "Yes! We offer a full-service transport. Our staff will transfer the patient from bed to bed if necessary. We will also handle and transfer small, portable personal belongings with the client."
    },
    {
      question: "What types of medical transportation services do you offer?",
      answer: "We provide a range of services including ambulatory transports, wheelchair transports, stretcher transports, bariatric transportation, hospice transports, and long-distance transports. Each service is tailored to meet the specific needs of our patients."
    },
    {
      question: "Are your drivers trained in medical care?",
      answer: "Our Transport Specialists are trained in patient care and safety procedures. While they are not medical professionals, they are equipped to handle non-emergency medical transportation needs and can respond appropriately to common situations that may arise during transport."
    }
  ]
  </script>