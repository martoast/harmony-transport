<template>
  <div id="servicios" class="overflow-hidden bg-gray-50 py-16 lg:py-24">
    <div class="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
      <!-- Decorative SVGs -->
      <svg class="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
        <defs>
          <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
      </svg>
      
      <div class="relative">
        <div>
          <h2 class="text-center md:text-3xl font-bold leading-8 tracking-tight text-gray-900 text-2xl">Medical Transportation Services</h2>
          <p class="mx-auto mt-4 max-w-4xl text-center text-xl text-gray-500">
            We offer a comprehensive range of medical transportation services to meet the diverse needs of our patients. Our team is dedicated to providing safe, comfortable, and reliable transportation for all medical situations.
          </p>
        </div>
      </div>

      <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
        <div class="relative">
          <h3 class="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">Our Services</h3>
          <p class="mt-3 text-lg text-gray-500">
            We pride ourselves on our ability to cater to a wide range of transportation needs, from basic ambulatory services to specialized care for hospice patients. Our experienced team ensures that each transport is handled with the utmost care and professionalism.
          </p>

          <dl class="mt-10 space-y-10">
            <div v-for="service in services.slice(0, 3)" :key="service.id" class="relative">
              <dt>
                <div class="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white">
                  <component :is="service.icon" class="h-8 w-8" aria-hidden="true" />
                </div>
                <p class="ml-16 text-lg font-medium leading-6 text-gray-900">{{ service.name }}</p>
              </dt>
              <dd class="ml-16 mt-2 text-base text-gray-500">{{ service.description }}</dd>
            </div>
          </dl>
        </div>

        <div class="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
          <img src="/ambulance.jpeg" class="rounded-lg" alt="Ambulance Service"/>
        </div>
      </div>

      <div class="relative mt-12 sm:mt-16 lg:mt-24">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
          <div class="lg:col-start-2">
            <dl class="mt-10 space-y-10">
              <div v-for="service in services.slice(3)" :key="service.id" class="relative">
                <dt>
                  <div class="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white">
                    <component :is="service.icon" class="h-8 w-8" aria-hidden="true" />
                  </div>
                  <p class="ml-16 text-lg font-medium leading-6 text-gray-900">{{ service.name }}</p>
                </dt>
                <dd class="ml-16 mt-2 text-base text-gray-500">{{ service.description }}</dd>
              </div>
            </dl>
          </div>

          <div class="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
            <img src="/ambulance-transport.jpg" class="rounded-lg" alt="Medical Transportation"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  UserGroupIcon,
  UserIcon,
  TruckIcon,
  HeartIcon,
  GlobeAltIcon,
  HandRaisedIcon
} from '@heroicons/vue/24/outline'

const services = [
  {
    id: 1,
    name: 'Ambulatory Transports',
    description: 'Non-emergency transport for patients who are able to walk on their own or with driver\'s assistance. Ideal for medical appointments or transfers between facilities.',
    icon: UserIcon,
  },
  {
    id: 2,
    name: 'Wheelchair Transports',
    description: 'Specialized transportation for individuals who require wheelchair assistance. Our vehicles are equipped with secure wheelchair lifts and tie-downs to ensure safe and comfortable travel.',
    icon: HandRaisedIcon,
  },
  {
    id: 3,
    name: 'Stretcher Transports',
    description: 'For patients who need to remain in a lying position during transport. We use fully automated Ferno Power-Flex stretchers for smooth, level vertical lifts, ensuring patient comfort and safety.',
    icon: TruckIcon,
  },
  {
    id: 4,
    name: 'Bariatric Transportation',
    description: 'Specialized transport for bariatric patients using reinforced frames, heavy-duty motors, and wider seats to ensure comfort and safety during transit.',
    icon: UserGroupIcon,
  },
  {
    id: 5,
    name: 'Hospice Transports',
    description: 'Compassionate and sensitive transportation for hospice patients. Our staff is specially trained to handle these transports with the care and respect they require.',
    icon: HeartIcon,
  },
  {
    id: 6,
    name: 'Long-Distance Transports',
    description: 'Non-emergency long-distance transportation services throughout the United States. We offer competitive rates for inter-state medical transports.',
    icon: GlobeAltIcon,
  },
]
</script>