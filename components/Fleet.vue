<template>
  <section id="fleet" class="py-24 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Section header -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Advanced Fleet</h2>
        <p class="text-lg text-gray-600">Our vehicles are equipped with the latest technology and staffed by highly trained professionals to ensure the highest level of care during transport.</p>
      </div>
      
      <!-- Fleet cards -->
      <div class="grid grid-cols-1 gap-12">
        <div 
          v-for="(vehicle, index) in fleetData" 
          :key="index"
          class="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <div class="grid md:grid-cols-3 gap-4">
            <!-- Vehicle image -->
            <div class="md:col-span-1 relative">
              <div class="absolute top-0 left-0 bg-red-500 text-white text-sm font-bold px-4 py-1 rounded-br-lg">
                {{ vehicle.type }}
              </div>
              <img 
                :src="vehicle.image" 
                :alt="vehicle.title"
                class="w-full h-full object-cover md:h-72"
                loading="lazy"
              />
            </div>
            
            <!-- Vehicle details -->
            <div class="p-6 md:p-8 md:col-span-2">
              <div class="flex flex-col h-full">
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ vehicle.title }}</h3>
                  <p class="text-gray-600 mb-6">{{ vehicle.description }}</p>
                </div>
                
                <!-- Feature grid -->
                <div class="mt-auto">
                  <h4 class="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4">Vehicle Features</h4>
                  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div 
                      v-for="feature in features" 
                      :key="feature.key"
                      :class="[
                        vehicle.features[feature.key] ? 'text-gray-900' : 'text-gray-400',
                        'flex items-start space-x-2 group'
                      ]"
                    >
                      <div class="mt-0.5 flex-shrink-0">
                        <div 
                          :class="[
                            vehicle.features[feature.key] ? 'bg-red-500' : 'bg-gray-200',
                            'flex items-center justify-center w-5 h-5 rounded-full transition-colors duration-200'
                          ]"
                        >
                          <svg 
                            v-if="vehicle.features[feature.key]" 
                            class="w-3 h-3 text-white" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              stroke-linecap="round" 
                              stroke-linejoin="round" 
                              stroke-width="3" 
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <svg 
                            v-else 
                            class="w-3 h-3 text-white" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              stroke-linecap="round" 
                              stroke-linejoin="round" 
                              stroke-width="3" 
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      </div>
                      <span class="text-sm">{{ feature.label }}</span>
                    </div>
                  </div>
                </div>
                
                <!-- Request button for this specific vehicle type -->
                <div class="mt-8">
                  <NuxtLink 
                    to="#request-transport" 
                    class="inline-flex items-center text-red-500 hover:text-red-600 font-medium text-sm transition-colors"
                  >
                    Request this vehicle
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
      
      <!-- CTA section -->
      <div class="mt-16 text-center">
        <p class="text-gray-600 mb-6">Need help choosing the right vehicle for your needs?</p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="tel:+1(830)590-1183" 
            class="inline-flex items-center justify-center px-6 py-3 bg-white text-red-500 border border-red-500 font-medium rounded-lg hover:bg-red-50 transition-colors"
          >
            <svg 
              class="mr-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call now: (830)590-1183
          </a>
          <NuxtLink 
            to="#request-transport" 
            class="inline-flex items-center justify-center px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors"
          >
            Request Transport Services
            <svg 
              class="ml-2 w-5 h-5" 
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
  </section>
</template>

<script setup>
const fleetData = ref([
  {
    title: "Mobile Intensive Care Unit (MICU)",
    type: "MICU",
    image: "/IMG_9376.png",
    description: "Our MICU team is highly trained in advanced airway management, respiratory care, cardiac care, emergency trauma, stroke care, and other life-threatening medical conditions. All vehicles are equipped with advanced features and necessary medical supplies for critical care transport.",
    features: {
      hydraulicStretcher: true,
      oxygen: true,
      generalMedications: true,
      intraosseousAccess: true,
      cardiacMonitoring: true,
      multiLineInfusion: true,
      mobileVentilator: true,
      narcotics: true
    }
  },
  {
    title: "Advanced Life Support (ALS)",
    type: "ALS",
    image: "/sideview.png",
    description: "ALS transport is provided by at least 2 state-trained staff who are authorized to operate all lifesaving equipment on board. An EMT-Intermediate or EMT-Paramedic with enhanced skills is present to administer additional interventions and medications when necessary.",
    features: {
      hydraulicStretcher: true,
      oxygen: true,
      generalMedications: true,
      intraosseousAccess: true,
      cardiacMonitoring: true,
      multiLineInfusion: false,
      mobileVentilator: false,
      narcotics: false
    }
  },
  {
    title: "Basic Life Support (BLS)",
    type: "BLS",
    image: "/fleet.png",
    description: "BLS transport is provided by at least 2 state-trained staff authorized to operate essential lifesaving equipment. An EMT is present to perform basic techniques and administer a limited set of medications if necessary. Ideal for stable patients requiring medical supervision.",
    features: {
      hydraulicStretcher: true,
      oxygen: true,
      generalMedications: true,
      intraosseousAccess: false,
      cardiacMonitoring: false,
      multiLineInfusion: false,
      mobileVentilator: false,
      narcotics: false
    }
  },
])

const features = ref([
  { key: 'hydraulicStretcher', label: 'Hydraulic Stretcher' },
  { key: 'oxygen', label: 'Oxygen' },
  { key: 'generalMedications', label: 'General Medications' },
  { key: 'intraosseousAccess', label: 'Intraosseous Access (EZ IO)' },
  { key: 'cardiacMonitoring', label: 'Cardiac Monitoring System' },
  { key: 'multiLineInfusion', label: 'Multi-Line Infusion Pump' },
  { key: 'mobileVentilator', label: 'Mobile Ventilator' },
  { key: 'narcotics', label: 'Administration of Narcotics' }
])
</script>