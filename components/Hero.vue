<template>
  <section class="relative min-h-screen overflow-hidden">
    <!-- Dynamic background animation -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-800"></div>
      <div class="absolute inset-0 mix-blend-overlay opacity-40">
        <div
          v-for="i in 3"
          :key="i"
          class="absolute inset-0 blur-3xl"
          :class="`animate-pulse-slow-${i}`"
        >
          <div
            class="w-full h-full bg-white/10 rounded-full transform rotate-12 scale-150"
          ></div>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="relative h-screen flex flex-col justify-between">
      <!-- Hero Content -->
      <div class="flex-1 flex items-center pt-20 pb-10 px-4">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <!-- Text Content -->
            <div class="space-y-6 text-center lg:text-left order-2 lg:order-1">
              <!-- Badge -->
              <div class="inline-flex items-center px-4 py-2 bg-red-500/20 backdrop-blur-sm rounded-full">
                <div class="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
                <span class="ml-2 text-sm font-medium text-white">24/7 Emergency Medical Transport</span>
              </div>

              <!-- Heading with animation -->
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight split-words">
                <span class="block overflow-hidden">
                  <span class="slide-up inline-block">Professional</span>
                </span>
                <span class="block overflow-hidden">
                  <span class="slide-up inline-block delay-300">Medical Transport</span>
                </span>
                <span class="block overflow-hidden text-red-500">
                  <span class="slide-up inline-block delay-600">You Can Trust</span>
                </span>
              </h1>

              <!-- Description -->
              <p class="text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 fade-in-up delay-1000">
                Reliable, compassionate, and safe medical transport services delivered by highly trained professionals.
              </p>

              <!-- CTA Buttons -->
              <div class="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start fade-in-up delay-1200">
                <a
                  href="#request-transport"
                  class="inline-flex items-center justify-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/50"
                >
                  Request Transport
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <a
                
                  href="tel:+1(956)382-4168"
                  class="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm transition-all duration-300"
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
                  Emergency Call
                </a>
              </div>

              <!-- Trust Indicators -->
              <div class="hidden md:flex flex-wrap items-center gap-6 pt-8 justify-center lg:justify-start fade-in-up delay-1400">
                <div class="flex items-center text-white/90">
                  <svg 
                    class="w-5 h-5 mr-2 text-red-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Certified Professionals
                </div>
                <div class="flex items-center text-white/90">
                  <svg 
                    class="w-5 h-5 mr-2 text-red-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Licensed & Insured
                </div>
              </div>
            </div>

            <!-- 3D Ambulance Animation -->
            <div class="relative order-1 lg:order-2">
              <div class="w-full h-[300px] md:h-[400px] lg:h-[500px] relative mx-auto">
                <div ref="container" class="w-full h-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="relative pb-8 flex flex-col items-center">
        <span class="text-white/70 text-sm mb-2">Scroll to learn more</span>
        <div class="w-1 h-8 bg-white/20 rounded-full relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-full bg-red-500 animate-scroll"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const container = ref(null);
let cleanup = null;

onMounted(() => {
  if (container.value) {
    cleanup = initThree(container.value);
  }
});

onBeforeUnmount(() => {
  if (cleanup) {
    cleanup();
  }
});

const initThree = (container) => {
  let camera, scene, renderer, model, mixer;
  
  function init() {
    try {
      // Scene setup
      scene = new THREE.Scene();
      
      // Use transparent background to blend with the gradient
      scene.background = null;

      // Camera setup - use wider FOV for mobile
      const isMobile = window.innerWidth < 768;
      camera = new THREE.PerspectiveCamera(
        isMobile ? 60 : 45,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      
      // Adjust camera position based on screen size
      camera.position.set(0, 1, isMobile ? 7 : 5);
      camera.lookAt(0, 0, 0);
      
      // Lighting setup - enhanced for better visibility
      const ambientLight = new THREE.AmbientLight(0xffffff, 2.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);
      
      const secondaryLight = new THREE.DirectionalLight(0xffffff, 1.5);
      secondaryLight.position.set(-5, 3, -5);
      scene.add(secondaryLight);
      
      // Add a top light to highlight the ambulance roof
      const topLight = new THREE.DirectionalLight(0xffffff, 1);
      topLight.position.set(0, 8, 0);
      scene.add(topLight);
      
      // Add a bottom light for better underside visibility
      const bottomLight = new THREE.DirectionalLight(0xffffff, 0.7);
      bottomLight.position.set(0, -3, 0);
      scene.add(bottomLight);

      // Model loading
      const loader = new GLTFLoader();
      loader.load(
        '/scene.gltf',
        (gltf) => {
          model = gltf.scene;
          
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          
          // Center the model
          model.position.set(-center.x, -center.y, -center.z);
          
          // Make it bigger - scale up more on mobile
          const scale = isMobile ? 
            7 / Math.max(size.x, size.y, size.z) : 
            6 / Math.max(size.x, size.y, size.z);
          model.scale.setScalar(scale);
          
          scene.add(model);
          
          // Adjust initial rotation to show the side of the ambulance
          model.rotation.y = Math.PI / 4;
        },
        (progress) => {
          // Add loading indicator here if needed
        },
        (error) => {
          console.error('Error loading model:', error);
        }
      );

      // Renderer setup
      renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true // Important for transparent background
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);

      // OrbitControls setup - with auto-rotation
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableRotate = false;
      controls.enableDamping = true;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.8; // Slower rotation
      controls.target.set(0, 0, 0);
      controls.update();

      // Make the renderer canvas non-interactive
      renderer.domElement.style.pointerEvents = 'none';

      animate();
    } catch (error) {
      console.error('Three.js initialization error:', error);
    }
  }

  function onWindowResize() {
    if (!container) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }

  function animate() {
    requestAnimationFrame(animate);
    
    if (model) {
      // Very slow rotation for a more elegant look
      model.rotation.y += 0.002;
    }
    
    renderer.render(scene, camera);
  }

  init();

  const resizeObserver = new ResizeObserver(() => {
    onWindowResize();
  });
  resizeObserver.observe(container);

  return () => {
    resizeObserver.disconnect();
    if (renderer) renderer.dispose();
    if (scene) scene.clear();
  };
};
</script>

<style scoped>
/* Animation keyframes */
@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scroll {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

/* Animation classes */
.slide-up {
  animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  transform: translateY(100%);
}

.fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}

.animate-scroll {
  animation: scroll 1.5s ease-in-out infinite;
}

/* Delay utilities */
.delay-150 {
  animation-delay: 150ms;
}
.delay-300 {
  animation-delay: 300ms;
}
.delay-450 {
  animation-delay: 450ms;
}
.delay-600 {
  animation-delay: 600ms;
}
.delay-750 {
  animation-delay: 750ms;
}
.delay-1000 {
  animation-delay: 1000ms;
}
.delay-1200 {
  animation-delay: 1200ms;
}
.delay-1400 {
  animation-delay: 1400ms;
}

/* Background animation utilities */
.animate-pulse-slow-1 {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.animate-pulse-slow-2 {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  animation-delay: -2s;
}
.animate-pulse-slow-3 {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  animation-delay: -4s;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1) translate(0%, 0%);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2) translate(5%, -5%);
  }
}
</style>