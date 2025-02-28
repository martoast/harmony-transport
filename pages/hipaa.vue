<template>
  <div class="bg-white px-6 py-32 lg:px-8">
    <!-- Back button -->
    
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <NuxtLink to="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-red-500 mb-8">
      <ArrowLeftIcon class="mr-2 h-4 w-4" />
      Back to home
    </NuxtLink>
    
      <p class="text-base font-semibold leading-7 text-red-500">Important Information</p>
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">HIPAA: Health Insurance Portability and Accountability Act</h1>
      <p class="mt-6 text-xl leading-8">HIPAA is Federal legislation that was made law by Congress in 1996. It provides Federal privacy protections for individually identifiable health information.</p>
      <div class="mt-10 max-w-2xl">
        <p>The HIPAA Privacy Rule, effective April 14, 2003, establishes a foundation for Federal protections for the privacy of Protected Health Information (PHI). The HIPAA Security Rule, effective April 20, 2005, calls for protection of PHI in electronic formats.</p>
        <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
          <li class="flex gap-x-3">
            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
            <span><strong class="font-semibold text-gray-900">Privacy Rule:</strong> Safeguards the privacy of residents through increased accountability in privacy and security.</span>
          </li>
          <li class="flex gap-x-3">
            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
            <span><strong class="font-semibold text-gray-900">Security Rule:</strong> Provides specific protection for PHI in electronic formats.</span>
          </li>
          <li class="flex gap-x-3">
            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
            <span><strong class="font-semibold text-gray-900">Compliance:</strong> Required for certain Apollo Ambulance Service Inc Senior Living communities and offices that transmit resident health information electronically.</span>
          </li>
        </ul>
        <p class="mt-8">Apollo Ambulance Service Inc Senior Living already practices confidentiality and respect for resident privacy. The Privacy and Security Rule provides an even greater opportunity to monitor the safe keeping of our resident's Protected Health Information (PHI).</p>
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Covered Entities and Notice of Privacy Practices</h2>
        <p class="mt-6">Certain Apollo Ambulance Service Inc Senior Living communities and offices are considered Covered Entities under HIPAA. If you have any questions regarding a community and its applicability under the HIPAA Privacy Rule, please contact the Privacy Officer at 414-918-5211.</p>
        <figure class="mt-10 border-l border-red-500 pl-9">
          <blockquote class="font-semibold text-gray-900">
            <p>"Compliance with the HIPAA Privacy Rule is required for certain Apollo Ambulance Service Inc Senior Living communities and offices because they transmit resident health information electronically related to health care claims, payment or coordination of benefits."</p>
          </blockquote>
        </figure>
        <p class="mt-10">Below are important links and documents related to HIPAA compliance:</p>
        <ul class="mt-4 list-disc list-inside text-gray-600">
          <li><a href="/content/dam/Apollo Ambulance Service Inc/en/documents/hipaa/Apollo Ambulance Service IncHIPAACoveredEntities-09032024.pdf" class="text-gray-800 hover:text-indigo-500">List of Apollo Ambulance Service Inc's Covered Entities</a></li>
          <li><a href="/content/dam/Apollo Ambulance Service Inc/en/documents/HIPPA_Policy_2013.pdf" class="text-gray-800 hover:text-indigo-500">Notice of Privacy Practices (English)</a></li>
        </ul>
      </div>
      <div class="mt-16 max-w-2xl">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Contact Information</h2>
        <p class="mt-6">If you have any questions or comments regarding the Notice of Privacy Practices, please feel free to contact Apollo Ambulance Service Inc's Privacy Officer at 956-382-4168.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/vue/20/solid'
</script>