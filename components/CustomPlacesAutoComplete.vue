<template>
    <div>
        <mapbox-search-box
                :access-token="access_token"
                placeholder="Search address"
                :options="{
                  country: 'US',
                  limit:6,
                  bbox: [-171.791110603, 18.91619, -66.96466, 71.3577635769],
                }"
                types="address"
                @retrieve="handleRetrieve"
                proximity="ip"
              >
            </mapbox-search-box>
    </div>
</template>


<script setup>


const config = useRuntimeConfig()

const access_token = config.public.MAPBOX_API_TOKEN;

const emit = defineEmits(['updateAddress'])

const handleRetrieve = async (event) => {
  if (event.detail.features.length) {
    const latitude = event.detail.features[0].properties.coordinates.latitude;
    const longitude = event.detail.features[0].properties.coordinates.longitude;
    const address = event.detail.features[0].properties.full_address;

    emit('updateAddress', { latitude, longitude, address });
  } else {
    alert('You must search a location and select from the dropdown menu.');
  }
};

</script>