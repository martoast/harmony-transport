<template>
  <div id="request-transport" class="bg-white">
    <div class="mx-auto max-w-7xl py-12 sm:px-6 sm:py-24 lg:px-8">
      <div
        class="relative isolate overflow-hidden bg-indigo-950 px-6 pb-6 shadow-2xl sm:rounded-3xl sm:px-16"
      >
        <h2 class="text-lg font-bold tracking-tight text-white sm:text-xl my-3">
          Medical Transportation Request
        </h2>

        <div class="mt-3 text-left">
          <form @submit.prevent="submitForm">
            <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-9">
              <div class="sm:col-span-3">
                <label
                  for="firstName"
                  class="block text-sm font-medium text-gray-300"
                  >First Name</label
                >
                <input
                  v-model="form.firstName"
                  required
                  type="text"
                  name="firstName"
                  id="firstName"
                  autocomplete="given-name"
                  class="mt-1 block w-full rounded-md border-gray-300 bg-white/5 py-1.5 text-white shadow-sm focus:border-red-500 focus:ring-white sm:text-sm"
                />
              </div>

              <div class="sm:col-span-3">
                <label
                  for="lastName"
                  class="block text-sm font-medium text-gray-300"
                  >Last Name</label
                >
                <input
                  v-model="form.lastName"
                  required
                  type="text"
                  name="lastName"
                  id="lastName"
                  autocomplete="family-name"
                  class="mt-1 block w-full rounded-md border-gray-300 bg-white/5 py-1.5 text-white shadow-sm focus:border-red-500 focus:ring-white sm:text-sm"
                />
              </div>

              <div class="sm:col-span-3">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-300"
                  >Email</label
                >
                <input
                  v-model="form.email"
                  required
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  class="mt-1 block w-full rounded-md border-gray-300 bg-white/5 py-1.5 text-white shadow-sm focus:border-red-500 focus:ring-white sm:text-sm"
                />
              </div>

              <div class="sm:col-span-3">
                <label
                  for="phone"
                  class="block text-sm font-medium text-gray-300"
                  >Phone Number</label
                >
                <input
                  v-model="form.phone"
                  required
                  type="tel"
                  name="phone"
                  id="phone"
                  autocomplete="tel"
                  class="mt-1 block w-full rounded-md border-gray-300 bg-white/5 py-1.5 text-white shadow-sm focus:border-red-500 focus:ring-white sm:text-sm"
                />
              </div>

              <div class="sm:col-span-9">
                <label class="block text-sm font-medium text-gray-300 mb-2"
                  >Services Needed</label
                >
                <div class="grid grid-cols-2 gap-4">
                  <div
                    v-for="service in services"
                    :key="service.value"
                    class="flex items-center"
                  >
                    <input
                      type="checkbox"
                      :id="service.value"
                      :value="service.value"
                      v-model="form.servicesNeeded"
                      class="h-4 w-4 rounded border-gray-300 text-red-500 focus:ring-red-500"
                    />
                    <label
                      :for="service.value"
                      class="ml-3 text-sm font-medium text-gray-300"
                      >{{ service.label }}</label
                    >
                  </div>
                </div>
              </div>

              <div class="sm:col-span-9">
    <label class="block text-sm font-medium text-gray-300 mb-2">EMS Services Needed</label>
    <div class="grid grid-cols-2 gap-4">
      <div
        v-for="service in emsServices"
        :key="service.value"
        class="flex items-center"
      >
        <input
          type="checkbox"
          :id="service.value"
          :value="service.value"
          v-model="form.emsServicesNeeded"
          class="h-4 w-4 rounded border-gray-300 text-red-500 focus:ring-red-500"
        />
        <label
          :for="service.value"
          class="ml-3 text-sm font-medium text-gray-300"
        >{{ service.label }}</label>
      </div>
    </div>
  </div>

              <div class="sm:col-span-4">
                <label
                  for="pickupLocation"
                  class="block text-sm font-medium text-gray-300"
                  >Pick up location</label
                >
                <div v-if="!form.pickupLocation.selected">
                  <ClientOnly fallback-tag="span" fallback="Loading address autocomple...">
                    <CustomPlacesAutoComplete
                    id="pickupLocation"
                    @updateAddress="handlePickupAddressUpdate"
                  />
                  </ClientOnly>
                  
                </div>
                <div v-else class="mt-2.5">
                  <p class="text-white">
                    {{ form.pickupLocation.fullAddress }}
                  </p>
                  <button
                    @click="resetPickupAddress"
                    type="button"
                    class="text-sm font-semibold leading-6 text-red-400 hover:text-red-300"
                  >
                    Change Address
                  </button>
                </div>
              </div>

              <div class="sm:col-span-4">
                <label
                  for="dropOffLocation"
                  class="block text-sm font-medium text-gray-300"
                  >Drop Off location</label
                >
                
                <div v-if="!form.dropOffLocation.selected">
                  <ClientOnly fallback-tag="span" fallback="Loading address autocomple...">
                    <CustomPlacesAutoComplete
                    id="dropoffLocation"
                    @updateAddress="handleDropOffAddressUpdate"
                  />
                  </ClientOnly>
                  
                </div>
                <div v-else class="mt-2.5">
                  <p class="text-white">
                    {{ form.dropOffLocation.fullAddress }}
                  </p>
                  <button
                    @click="resetDropOffAddress"
                    type="button"
                    class="text-sm font-semibold leading-6 text-red-400 hover:text-red-300"
                  >
                    Change Address
                  </button>
                </div>
              </div>

              <div class="sm:col-span-9">
                <label
                  for="specialEquipment"
                  class="block text-sm font-medium text-gray-300"
                  >Any special equipment necessary?</label
                >
                <textarea
                  v-model="form.specialEquipment"
                  id="specialEquipment"
                  name="specialEquipment"
                  rows="3"
                  class="mt-1 block w-full rounded-md border-gray-300 bg-white/5 py-1.5 text-white shadow-sm focus:border-red-500 focus:ring-white sm:text-sm"
                ></textarea>
              </div>

              <div class="sm:col-span-9">
                <label
                  for="comments"
                  class="block text-sm font-medium text-gray-300"
                  >Comments/Special Requests</label
                >
                <textarea
                  v-model="form.comments"
                  id="comments"
                  name="comments"
                  rows="4"
                  class="mt-1 block w-full rounded-md border-gray-300 bg-white/5 py-1.5 text-white shadow-sm focus:border-red-500 focus:ring-white sm:text-sm"
                ></textarea>
              </div>
            </div>

            <div class="mt-6 sm:col-span-9">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <input
                    v-model="form.termsAccepted"
                    required
                    id="terms"
                    name="terms"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-red-500 focus:ring-red-500"
                  />
                </div>
                <div class="ml-3">
                  <label for="terms" class="text-sm text-gray-300">
                    I understand and agree to the
                    <a
                      href="/privacy-policy"
                      class="text-red-500 hover:text-red-400 underline"
                      >Privacy Policy</a
                    >.
                  </label>
                </div>
              </div>
            </div>

            <div
              class="mt-10 flex flex-col sm:flex-row items-center sm:items-start justify-around gap-y-6 sm:gap-x-6"
            >
              <div class="text-center sm:text-left">
                <p class="text-gray-100 pb-3 italic">
                  Our medical transportation services are HIPAA compliant.
                </p>
              </div>
              <div class="mt-6 sm:mt-0">
                <button
                  type="submit"
                  :disabled="loading"
                  class="rounded-md bg-red-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {{loading ? 'Submitting...': 'Submit Request'}}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const services = ref([
  { value: "ambulatory", label: "Ambulatory Transports" },
  { value: "wheelchair", label: "Wheelchair Transports" },
  { value: "stretcher", label: "Stretcher Transports" },
  { value: "bariatric", label: "Bariatric Transportation" },
  { value: "hospice", label: "Hospice Transports" },
  { value: "long-distance", label: "Long-Distance Transports" },
]);

const emsServices = [
  { value: 'basic-life-support', label: 'Basic Life Support' },
  { value: 'advanced-life-support', label: 'Advanced Life Support' },
  { value: 'critical-care', label: 'Critical Care' },
  { value: 'neonatal', label: 'Neonatal' },
  { value: 'bariatric', label: 'Bariatric' },
  { value: 'other', label: 'Other' },
]


const loading = ref(false);


const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  servicesNeeded: [],
  emsServicesNeeded: [],
  pickupLocation: {
    fullAddress: "",
    latitude: null,
    longitude: null,
    selected: false,
  },
  dropOffLocation: {
    fullAddress: "",
    latitude: null,
    longitude: null,
    selected: false,
  },
  specialEquipment: "",
  comments: "",
  termsAccepted: false,
});

const handlePickupAddressUpdate = (addressData) => {
  form.pickupLocation = {
    fullAddress: addressData.address,
    latitude: addressData.latitude,
    longitude: addressData.longitude,
    selected: true,
  };
};

const handleDropOffAddressUpdate = (addressData) => {
  form.dropOffLocation = {
    fullAddress: addressData.address,
    latitude: addressData.latitude,
    longitude: addressData.longitude,
    selected: true,
  };
};

const resetPickupAddress = () => {
  form.pickupLocation = {
    fullAddress: "",
    latitude: null,
    longitude: null,
    selected: false,
  };
};

const resetDropOffAddress = () => {
  form.dropOffLocation = {
    fullAddress: "",
    latitude: null,
    longitude: null,
    selected: false,
  };
};

const submitForm = async () => {
  loading.value = true;
  const payload = {
    lead: { ...form }
  };

  try {
    await $fetch('/api/transport-webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload
    });

    // Reset form after successful submission
    Object.keys(form).forEach(key => {
      if (Array.isArray(form[key])) {
        form[key] = [];
      } else if (typeof form[key] === 'object' && form[key] !== null) {
        if (key === 'pickupLocation' || key === 'dropOffLocation') {
          form[key] = {
            fullAddress: "",
            latitude: null,
            longitude: null,
            selected: false,
          };
        } else {
          form[key] = {};
        }
      } else if (typeof form[key] === 'boolean') {
        form[key] = false;
      } else {
        form[key] = '';
      }
    });

    alert('Submitted!!! We will be in touch.');
  } catch (error) {
    console.error('Error submitting form', error);
    const errors = error.response?._data?.errors || { general: 'An error occurred while submitting the form' };
    // You might want to handle these errors in your UI
    console.error('Form submission errors:', errors);
    alert('An error occurred while submitting the form. Please try again.');
  }
  loading.value = false;
};

</script>
