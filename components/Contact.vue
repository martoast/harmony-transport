<template>
    <div id="contact" class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
        <div class="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-400 to-red-600 opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Request Transport</h2>
        <p class="mt-2 text-lg/8 text-gray-600">Fill out the form below to schedule a medical transport or to request more information about our services.</p>
      </div>
      <form @submit.prevent="onSubmit" class="mx-auto mt-16 max-w-xl sm:mt-20">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">First name</label>
            <div class="mt-2.5">
              <input v-model="formData.firstName" type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-500" />
            </div>
          </div>
          <div>
            <label for="last-name" class="block text-sm/6 font-semibold text-gray-900">Last name</label>
            <div class="mt-2.5">
              <input v-model="formData.lastName" type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-500" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm/6 font-semibold text-gray-900">Email</label>
            <div class="mt-2.5">
              <input v-model="formData.email" type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-500" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="phone-number" class="block text-sm/6 font-semibold text-gray-900">Phone number</label>
            <div class="mt-2.5">
              <div class="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-red-500">
                <div class="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select v-model="formData.country" id="country" name="country" autocomplete="country" aria-label="Country" class="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-500 sm:text-sm/6">
                    <option>US</option>
                    <option>CA</option>
                    <option>MX</option>
                  </select>
                  <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" aria-hidden="true" />
                </div>
                <input v-model="formData.phone" type="text" name="phone-number" id="phone-number" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="(956) 382-4168" />
              </div>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="service-type" class="block text-sm/6 font-semibold text-gray-900">Type of Service Needed</label>
            <div class="mt-2.5">
              <select v-model="formData.serviceType" id="service-type" name="service-type" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-500">
                <option value="">Select a service</option>
                <option value="ambulatory">Ambulatory Transport</option>
                <option value="wheelchair">Wheelchair Transport</option>
                <option value="stretcher">Stretcher Transport</option>
                <option value="bariatric">Bariatric Transport</option>
                <option value="hospice">Hospice Transport</option>
                <option value="long-distance">Long-Distance Transport</option>
                <option value="other">Other (Please specify in message)</option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="date-needed" class="block text-sm/6 font-semibold text-gray-900">Date Needed (Optional)</label>
            <div class="mt-2.5">
              <input v-model="formData.dateNeeded" type="date" name="date-needed" id="date-needed" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-500" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm/6 font-semibold text-gray-900">Additional Details</label>
            <div class="mt-2.5">
              <textarea v-model="formData.message" name="message" id="message" rows="4" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-500" placeholder="Please include any special requirements or questions you may have."></textarea>
            </div>
          </div>
          <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
            <div class="flex h-6 items-center">
              <Switch v-model="formData.agreed" :class="[formData.agreed ? 'bg-red-500' : 'bg-gray-200', 'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500']">
                <span class="sr-only">Agree to policies</span>
                <span aria-hidden="true" :class="[formData.agreed ? 'translate-x-3.5' : 'translate-x-0', 'size-4 transform rounded-full bg-white ring-1 shadow-xs ring-gray-900/5 transition duration-200 ease-in-out']" />
              </Switch>
            </div>
            <SwitchLabel class="text-sm/6 text-gray-600">
              By selecting this, you agree to our
              {{ ' ' }}
              <a href="#" class="font-semibold text-red-500 hover:text-red-600">privacy&nbsp;policy</a>.
            </SwitchLabel>
          </SwitchGroup>
        </div>
        <div class="mt-10">
          <button type="submit" class="block w-full rounded-lg bg-red-500 px-3.5 py-3 text-center text-sm font-semibold text-white shadow-lg hover:bg-red-600 hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">
            Submit Request
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { ChevronDownIcon } from '@heroicons/vue/20/solid'
  import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
  
  const formData = ref({
    firstName: '',
    lastName: '',
    email: '',
    country: 'US',
    phone: '',
    serviceType: '',
    dateNeeded: '',
    message: '',
    agreed: false
  })
  
  const onSubmit = () => {
    console.log('Form submitted with data:', formData.value)
    // Here you would typically send the data to your backend
    // For now, we're just logging it to the console
  }
  </script>