<template>
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="inline-block px-4 py-1 bg-red-100 text-red-600 font-medium rounded-full text-sm mb-3">
            Service Coverage
          </span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Extensive Coverage Across <span class="text-red-600">Multiple States</span>
          </h2>
          <p class="text-lg text-gray-600">
            Our services are available throughout Texas, Florida, Arizona, Alabama, and California, 
            providing reliable medical transportation whenever and wherever you need it.
          </p>
        </div>
  
        <!-- Coverage Map Container -->
        <div class="rounded-2xl overflow-hidden shadow-lg mx-auto max-w-4xl mb-16">
          <div class="bg-white p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Our Service Areas</h3>
            <p class="text-gray-600 mb-4">Highlighted regions show our current coverage</p>
            
            <!-- Map Container -->
            <div id="map" class="h-[500px] rounded-lg border border-gray-200"></div>
            
            <!-- Legend -->
            <div class="flex items-center justify-center mt-4 space-x-6">
              <div class="flex items-center">
                <div class="w-4 h-4 rounded bg-red-600 opacity-50 mr-2"></div>
                <span class="text-sm text-gray-700">Service Area</span>
              </div>
              <div class="flex items-center">
                <div class="w-4 h-4 rounded bg-white border border-red-300 mr-2"></div>
                <span class="text-sm text-gray-700">Coming Soon</span>
              </div>
              <div class="flex items-center">
                <div class="w-4 h-4 flex items-center justify-center">
                  <div class="w-2 h-2 rounded-full bg-red-600"></div>
                </div>
                <span class="text-sm text-gray-700 ml-2">Service Centers</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Coverage Benefits -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="bg-white p-6 rounded-xl shadow-md">
            <div class="w-12 h-12 flex items-center justify-center bg-red-100 text-red-600 rounded-full mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Multi-State Coverage</h3>
            <p class="text-gray-600">Seamless transportation across state lines with proper licensing and certification in all covered areas.</p>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-md">
            <div class="w-12 h-12 flex items-center justify-center bg-red-100 text-red-600 rounded-full mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Rapid Response Times</h3>
            <p class="text-gray-600">Strategic locations throughout our service areas ensure faster response times when medical transport is needed.</p>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-md">
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
        <div class="mt-16 text-center">
          <a href="#request-transport" class="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/30">
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
  import { onMounted, onBeforeUnmount } from 'vue'
  
  const nuxtApp = useNuxtApp()
  const config = useRuntimeConfig()
  const access_token = config.public.MAPBOX_API_TOKEN
  const mapboxgl = nuxtApp.mapboxgl
  let map = {}
  
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
    // Configure mapbox
    mapboxgl.accessToken = access_token
    
    // Adjust zoom based on screen width
    const screenWidth = window.innerWidth
    const isMobile = screenWidth <= 768
    mapConfig.zoom = isMobile ? 2 : 3
    
    // Create the map
    map = new mapboxgl.Map({
      container: "map",
      style: mapConfig.style,
      zoom: mapConfig.zoom,
      pitch: mapConfig.pitch,
      bearing: mapConfig.bearing,
      center: mapConfig.center,
      dragPan: true,
      antialias: true,
    })
    
    // Disable scroll zoom for better UX
    map.scrollZoom.disable()
    
    // Add controls for better usability
    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
    
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
      
      // Add state labels
      map.addLayer({
        id: "state-labels",
        type: "symbol",
        source: "states",
        layout: {
          "text-field": ["get", "STATE_NAME"],
          "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
          "text-size": 12,
          "text-transform": "uppercase",
          "text-letter-spacing": 0.05,
          "text-anchor": "center",
        },
        paint: {
          "text-color": "#333333",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1,
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
      
      // Add point markers
      map.addLayer({
        id: "service-points",
        type: "circle",
        source: "service-centers",
        paint: {
          "circle-radius": 6,
          "circle-color": "#ffffff",
          "circle-stroke-width": 2,
          "circle-stroke-color": "#bb2b2b"
        }
      })
      
      // Add service center labels
      map.addLayer({
        id: "service-labels",
        type: "symbol",
        source: "service-centers",
        layout: {
          "text-field": ["get", "name"],
          "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
          "text-size": 11,
          "text-offset": [0, 1.5],
          "text-anchor": "top"
        },
        paint: {
          "text-color": "#333333",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1
        }
      })
    })
  }
  
  // Handle window resize
  const handleResize = () => {
    if (map && map.resize) {
      map.resize()
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
  /* Add subtle animation to the map container */
  #map {
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  
  #map:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  </style>