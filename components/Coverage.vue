<template>
    <section class="relative">
      <!-- Mobile-only Title Header -->
      <div class="md:hidden bg-white py-4 px-4 border-b border-gray-100 shadow-sm">
        <span class="inline-block px-3 py-1 bg-red-100 text-red-600 font-medium rounded-full text-xs mb-2">
          Service Coverage
        </span>
        <h2 class="text-2xl font-bold text-gray-900 mb-2">
          Extensive Coverage Across <span class="text-red-600">Multiple States</span>
        </h2>
        <p class="text-sm text-gray-600">
          Our services are available throughout Texas, Florida, Arizona, Alabama, and California.
        </p>
      </div>
  
      <!-- Full-width Map Background -->
      <div class="w-full h-[500px] md:h-[700px] lg:h-[800px] relative">
        <!-- Map Container -->
        <div id="map" class="absolute inset-0 w-full h-full"></div>
        
        <!-- Map Overlay Gradient -->
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none"></div>
        
        <!-- Map Controls & Legend -->
        <div class="absolute bottom-4 right-4 md:top-4 md:bottom-auto z-10 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg max-w-[150px] md:max-w-none">
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
              <div class="w-4 h-4 rounded bg-white border border-red-300 mr-2"></div>
              <span class="text-xs text-gray-700">Coming Soon</span>
            </div>
            <div class="flex items-center">
              <div class="w-4 h-4 flex items-center justify-center">
                <div class="w-2 h-2 rounded-full bg-red-600"></div>
              </div>
              <span class="text-xs text-gray-700 ml-2">Service Centers</span>
            </div>
          </div>
        </div>
        
        <!-- Desktop-only Floating Title Card -->
        <div class="hidden md:block absolute top-8 left-0 z-10 max-w-lg">
          <div class="bg-white/90 backdrop-blur-sm p-6 rounded-r-lg shadow-lg ml-0">
            <span class="inline-block px-4 py-1 bg-red-100 text-red-600 font-medium rounded-full text-sm mb-3">
              Service Coverage
            </span>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Extensive Coverage Across <span class="text-red-600">Multiple States</span>
            </h2>
            <p class="text-sm md:text-base text-gray-600">
              Our services are available throughout Texas, Florida, Arizona, Alabama, and California, 
              providing reliable medical transportation whenever and wherever you need it.
            </p>
          </div>
        </div>
      </div>
  
      <!-- Coverage Benefits Section -->
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-0 z-10 relative -mt-20">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div class="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="w-12 h-12 flex items-center justify-center bg-red-100 text-red-600 rounded-full mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Multi-State Coverage</h3>
            <p class="text-gray-600">Seamless transportation across state lines with proper licensing and certification in all covered areas.</p>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="w-12 h-12 flex items-center justify-center bg-red-100 text-red-600 rounded-full mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Rapid Response Times</h3>
            <p class="text-gray-600">Strategic locations throughout our service areas ensure faster response times when medical transport is needed.</p>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="w-12 h-12 flex items-center justify-center bg-red-100 text-red-600 rounded-full mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Local Expertise</h3>
            <p class="text-gray-600">Our teams include professionals familiar with local medical facilities, routes, and requirements in each service area.</p>
          </div>
        </div>
        
        <!-- Call to Action -->
        <div class="mt-16 mb-20 text-center">
          <a href="#request-transport" class="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/30">
            Request Transportation
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
  
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
  
  // Map configuration
  const mapConfig = {
    style: "mapbox://styles/mapbox/streets-v12",
    zoom: 3,
    pitch: 0,
    bearing: 0,
    center: [-100.486052, 37.830348],
    dragPan: true,
  }
  
  // States where we provide service
  const serviceStates = [
    { id: "06", name: "California", color: "#bb2b2b" },
    { id: "48", name: "Texas", color: "#bb2b2b" },
    { id: "12", name: "Florida", color: "#bb2b2b" },
    { id: "01", name: "Alabama", color: "#bb2b2b" },
    { id: "04", name: "Arizona", color: "#bb2b2b" }
  ]
  
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
      mapConfig.zoom = 2.8
      mapConfig.pitch = 0
      mapConfig.center = [-100.486052, 35.830348] // Slight adjustment to center
    } else {
      mapConfig.zoom = 3.2
      mapConfig.pitch = 15
      mapConfig.center = [-100.486052, 37.830348]
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
    
    // Add controls for better usability - bottom right on mobile, top right on desktop
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
          "fill-opacity": 0.3,
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
          "line-width": 2,
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
            0.5,
            0
          ]
        },
        filter: ["in", "STATE_ID", ...stateIds],
      })
      
      // Add state labels - smaller on mobile
      map.addLayer({
        id: "state-labels",
        type: "symbol",
        source: "states",
        layout: {
          "text-field": ["get", "STATE_NAME"],
          "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
          "text-size": isMobileView ? 11 : 14,
          "text-transform": "uppercase",
          "text-letter-spacing": 0.05,
          "text-anchor": "center",
        },
        paint: {
          "text-color": "#333333",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1.5,
        },
        filter: ["in", "STATE_ID", ...stateIds],
      })
      
      // Add hover interaction
      let hoveredStateId = null
      
      map.on("mousemove", "state-fills", (e) => {
        if (e.features.length > 0) {
          if (hoveredStateId !== null) {
            map.setFeatureState(
              { source: "states", id: hoveredStateId },
              { hover: false }
            )
          }
          hoveredStateId = e.features[0].id
          map.setFeatureState(
            { source: "states", id: hoveredStateId },
            { hover: true }
          )
          
          // Change cursor to pointer when hovering over states
          map.getCanvas().style.cursor = 'pointer'
        }
      })
      
      map.on("mouseleave", "state-fills", () => {
        if (hoveredStateId !== null) {
          map.setFeatureState(
            { source: "states", id: hoveredStateId },
            { hover: false }
          )
        }
        hoveredStateId = null
        
        // Reset cursor
        map.getCanvas().style.cursor = ''
      })
      
      // Add service centers as points (example locations)
      const serviceCenters = [
        { name: "San Antonio", coordinates: [-98.4936, 29.4241] },
        { name: "McAllen", coordinates: [-98.2300, 26.2034] },
        { name: "Phoenix", coordinates: [-112.0740, 33.4484] },
        { name: "Orlando", coordinates: [-81.3792, 28.5383] },
        { name: "Los Angeles", coordinates: [-118.2437, 34.0522] }
      ]
      
      // Add service center points
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
      
      // Add glowing effect for service points
      map.addLayer({
        id: "service-points-glow",
        type: "circle",
        source: "service-centers",
        paint: {
          "circle-radius": isMobileView ? 8 : 12,
          "circle-color": "#bb2b2b",
          "circle-opacity": 0.3,
          "circle-blur": 0.5
        }
      })
      
      // Add point markers
      map.addLayer({
        id: "service-points",
        type: "circle",
        source: "service-centers",
        paint: {
          "circle-radius": isMobileView ? 4 : 6,
          "circle-color": "#ffffff",
          "circle-stroke-width": 2,
          "circle-stroke-color": "#bb2b2b"
        }
      })
      
      // Add service center labels - smaller on mobile
      map.addLayer({
        id: "service-labels",
        type: "symbol",
        source: "service-centers",
        layout: {
          "text-field": ["get", "name"],
          "text-font": ["Open Sans SemiBold", "Arial Unicode MS Bold"],
          "text-size": isMobileView ? 10 : 12,
          "text-offset": [0, 1.8],
          "text-anchor": "top"
        },
        paint: {
          "text-color": "#333333",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1.5
        }
      })
      
      // Add click event for service centers
      map.on('click', 'service-points', (e) => {
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
      map.on('mouseenter', 'service-points', () => {
        map.getCanvas().style.cursor = 'pointer';
      });
      
      map.on('mouseleave', 'service-points', () => {
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
          map.setZoom(2.8)
          map.setPitch(0)
          map.setCenter([-100.486052, 35.830348])
        } else {
          map.setZoom(3.2)
          map.setPitch(15)
          map.setCenter([-100.486052, 37.830348])
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
  
  /* Add shine effect to CTA button */
  .hover\:scale-105:hover {
    box-shadow: 0 10px 25px -5px rgba(220, 38, 38, 0.3);
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