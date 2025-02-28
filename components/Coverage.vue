<template>
  <div id="coverage" class="overflow-hidden bg-gray-50 py-16 lg:py-24">
    <div class="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
      <!-- Decorative SVGs -->
      <svg class="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
        <defs>
          <pattern id="coverage-dots-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#coverage-dots-pattern)" />
      </svg>
      
      <div class="relative">
        <div>
          <h2 class="text-center md:text-3xl font-bold leading-8 tracking-tight text-gray-900 text-2xl">Service Coverage</h2>
          <p class="mx-auto mt-4 max-w-4xl text-center text-xl text-gray-500">
            Our services are available throughout San Antonio, New Braunfels, Schertz, Cibolo, and Boerne, 
            providing reliable medical transportation whenever you need it.
          </p>
        </div>
      </div>

      <!-- Map Section -->
      <div class="relative mt-12 w-full h-[500px] md:h-[600px] lg:h-[700px]">
        <!-- Map Container -->
        <div id="map" class="absolute inset-0 w-full h-full rounded-lg shadow-md"></div>
        
        <!-- Map Controls & Legend -->
        <div class="absolute bottom-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg max-w-[150px] md:max-w-none">
          <div class="flex items-center justify-between">
            <h4 class="font-medium text-sm text-gray-800">Service Areas</h4>
            <button class="md:hidden text-gray-500" @click="toggleLegend">
              {{ showLegend ? '−' : '+' }}
            </button>
          </div>
          <div class="space-y-2 mt-2" v-if="showLegend || !isMobile">
            <div class="flex items-center">
              <div class="w-4 h-4 rounded bg-red-600 opacity-50 mr-2"></div>
              <span class="text-xs text-gray-700">Active Coverage</span>
            </div>
            <div class="flex items-center">
              <div class="w-4 h-4 flex items-center justify-center">
                <div class="w-2 h-2 rounded-full bg-red-600"></div>
              </div>
              <span class="text-xs text-gray-700 ml-2">Service Centers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const nuxtApp = useNuxtApp()
const config = useRuntimeConfig()
const access_token = config.public.MAPBOX_API_TOKEN
const mapboxgl = nuxtApp.mapboxgl
let map = {}

// Mobile detection and responsive state
const isMobile = ref(false)
const showLegend = ref(false)

// Toggle legend on mobile
const toggleLegend = () => {
  showLegend.value = !showLegend.value
}

// Map configuration - centered on San Antonio area
const mapConfig = {
  style: "mapbox://styles/mapbox/streets-v12",
  zoom: 9,
  pitch: 0,
  bearing: 0,
  center: [-98.4936, 29.4241], // San Antonio coordinates
  dragPan: true,
}

// States where we provide service - only Texas now
const serviceStates = [
  { id: "48", name: "Texas", color: "#bb2b2b" }
]

// Service center locations
const serviceCenters = [
  { name: "San Antonio", coordinates: [-98.4936, 29.4241] },
  { name: "New Braunfels", coordinates: [-98.1242, 29.7030] },
  { name: "Schertz", coordinates: [-98.2701, 29.5522] },
  { name: "Boerne", coordinates: [-98.7320, 29.7947] }
]

// Create pulsing dot icon
const createPulsingDotImage = () => {
  const size = 200;
  
  // This implements StyleImageInterface to draw a pulsing dot icon
  const pulsingDot = {
    width: size,
    height: size,
    data: new Uint8Array(size * size * 4),
    
    // When the layer is added to the map, get the rendering context for the map canvas
    onAdd: function() {
      const canvas = document.createElement('canvas');
      canvas.width = this.width;
      canvas.height = this.height;
      this.context = canvas.getContext('2d');
    },
    
    // Call once before every frame where the icon will be used
    render: function() {
      const duration = 1000;
      const t = (performance.now() % duration) / duration;
      const radius = (size / 2) * 0.3;
      const outerRadius = (size / 2) * 0.7 * t + radius;
      const context = this.context;
      
      // Draw the outer circle
      context.clearRect(0, 0, this.width, this.height);
      context.beginPath();
      context.arc(
        this.width / 2,
        this.height / 2,
        outerRadius,
        0,
        Math.PI * 2
      );
      context.fillStyle = `rgba(187, 43, 43, ${1 - t})`;
      context.fill();
      
      // Draw the inner circle
      context.beginPath();
      context.arc(
        this.width / 2,
        this.height / 2,
        radius,
        0,
        Math.PI * 2
      );
      context.fillStyle = 'rgba(187, 43, 43, 1)';
      context.strokeStyle = 'white';
      context.lineWidth = 2 + 4 * (1 - t);
      context.fill();
      context.stroke();
      
      // Update this image's data with data from the canvas
      this.data = context.getImageData(
        0,
        0,
        this.width,
        this.height
      ).data;
      
      // Continuously repaint the map, resulting in smooth animation
      map.triggerRepaint();
      
      // Return true to let the map know that the image was updated
      return true;
    }
  };
  
  return pulsingDot;
}

// Initialize the map with our coverage areas
const initMap = () => {
  // Update mobile state
  isMobile.value = window.innerWidth <= 768
  
  // Configure mapbox
  mapboxgl.accessToken = access_token
  
  // Adjust zoom based on screen width
  const screenWidth = window.innerWidth
  const isMobileView = screenWidth <= 768
  
  // Mobile-specific adjustments for better viewing
  if (isMobileView) {
    mapConfig.zoom = 8
    mapConfig.pitch = 0
    mapConfig.center = [-98.4936, 29.4241]
  } else {
    mapConfig.zoom = 9
    mapConfig.pitch = 15
    mapConfig.center = [-98.4936, 29.4241]
  }
  
  // Create the map
  map = new mapboxgl.Map({
    container: "map",
    style: mapConfig.style,
    zoom: mapConfig.zoom,
    pitch: mapConfig.pitch,
    bearing: 0,
    center: mapConfig.center,
    dragPan: true,
    antialias: true,
  })
  
  // Disable scroll zoom for better UX
  map.scrollZoom.disable()
  
  // Add controls for better usability
  if (isMobileView) {
    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'bottom-left')
  } else {
    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'bottom-right')
  }
  
  // Get state IDs for highlighting
  const stateIds = serviceStates.map(state => state.id)
  
  // When map loads, add our data layers
  map.on("load", () => {
    // Add states data source
    map.addSource("states", {
      type: "geojson",
      data: "https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson",
    })
    
    // Add filled areas for service states
    map.addLayer({
      id: "state-fills",
      type: "fill",
      source: "states",
      layout: {},
      paint: {
        "fill-color": [
          "match",
          ["get", "STATE_ID"],
          ...stateIds.flatMap((id) => [id, "#bb2b2b"]),
          "transparent",
        ],
        "fill-opacity": 0.1,
      },
    })
    
    // Add borders for service states
    map.addLayer({
      id: "state-borders",
      type: "line",
      source: "states",
      layout: {},
      paint: {
        "line-color": "#bb2b2b",
        "line-width": 1,
      },
    })
    
    // Add hover effect for better interactivity
    map.addLayer({
      id: "state-fills-hover",
      type: "fill",
      source: "states",
      layout: {},
      paint: {
        "fill-color": "#bb2b2b",
        "fill-opacity": [
          "case",
          ["boolean", ["feature-state", "hover"], false],
          0.3,
          0
        ]
      },
      filter: ["in", "STATE_ID", ...stateIds],
    })
    
    // Add the pulsing dot image
    map.addImage('pulsing-dot', createPulsingDotImage(), { pixelRatio: 2 });
    
    // Add service center points source
    map.addSource("service-centers", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: serviceCenters.map(center => ({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: center.coordinates
          },
          properties: {
            name: center.name
          }
        }))
      }
    })
    
    // Add service center pulsing dots
    map.addLayer({
      id: "service-points-pulsing",
      type: "symbol",
      source: "service-centers",
      layout: {
        "icon-image": "pulsing-dot",
        "icon-size": isMobileView ? 0.4 : 0.8,
        "icon-allow-overlap": true
      }
    });
    
    // Add service center labels
    map.addLayer({
      id: "service-labels",
      type: "symbol",
      source: "service-centers",
      layout: {
        "text-field": ["get", "name"],
        "text-font": ["Open Sans SemiBold", "Arial Unicode MS Bold"],
        "text-size": isMobileView ? 12 : 14,
        "text-offset": [0, 2.5],
        "text-anchor": "top",
        "text-allow-overlap": false
      },
      paint: {
        "text-color": "#333333",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5
      }
    });
    
    // Add click event for service centers
    map.on('click', 'service-points-pulsing', (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const name = e.features[0].properties.name;
      
      // Create popup content
      const popupContent = `
        <div class="p-2">
          <h4 class="font-bold">${name} Service Center</h4>
          <p class="text-sm mt-1">Providing 24/7 ambulance services</p>
          <a href="#request-transport" class="text-red-600 text-sm font-medium mt-2 inline-block">Request Transportation</a>
        </div>
      `;
      
      // Create popup
      new mapboxgl.Popup({
        closeButton: true,
        closeOnClick: true,
        className: 'custom-popup',
        maxWidth: isMobileView ? '200px' : '300px'
      })
        .setLngLat(coordinates)
        .setHTML(popupContent)
        .addTo(map);
    });
    
    // Change cursor when hovering over service points
    map.on('mouseenter', 'service-points-pulsing', () => {
      map.getCanvas().style.cursor = 'pointer';
    });
    
    map.on('mouseleave', 'service-points-pulsing', () => {
      map.getCanvas().style.cursor = '';
    });
  });
}

// Handle window resize
const handleResize = () => {
  if (map && map.resize) {
    map.resize()
    
    // Update mobile state
    const newIsMobile = window.innerWidth <= 768
    if (isMobile.value !== newIsMobile) {
      isMobile.value = newIsMobile
      
      // Adjust zoom and pitch based on screen size
      if (isMobile.value) {
        map.setZoom(8)
        map.setPitch(0)
        map.setCenter([-98.4936, 29.4241])
      } else {
        map.setZoom(9)
        map.setPitch(15)
        map.setCenter([-98.4936, 29.4241])
      }
    }
  }
}

onMounted(() => {
  // Initialize map with coverage
  nextTick(() => {
    initMap()
  })
  
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  // Remove event listeners
  window.removeEventListener('resize', handleResize)
  
  // Cleanup map resources
  if (map && map.remove) {
    map.remove()
  }
})
</script>

<style scoped>
/* Customize popup styling */
:deep(.custom-popup) {
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: none;
  overflow: hidden;
}

:deep(.mapboxgl-popup-content) {
  padding: 12px;
  border-radius: 8px;
}

:deep(.mapboxgl-popup-close-button) {
  font-size: 16px;
  color: #666;
  padding: 4px;
}

/* Mobile styling optimizations */
@media (max-width: 768px) {
  :deep(.mapboxgl-popup) {
    max-width: 80% !important;
  }
  
  :deep(.mapboxgl-ctrl-group) {
    opacity: 0.8;
  }
}
</style>