// three.js.plugin.js
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default defineNuxtPlugin(() => {
  console.log('Three.js Plugin: Initializing plugin')
  
  const initThree = (container) => {
    let camera, scene, renderer, model, clock
    
    function init() {
      try {
        // Initialize clock for animations
        clock = new THREE.Clock()
        
        // Create scene with transparent background
        scene = new THREE.Scene()
        scene.background = null
        
        // Responsive camera setup
        const isMobile = window.innerWidth < 768
        camera = new THREE.PerspectiveCamera(
          isMobile ? 60 : 45,
          container.clientWidth / container.clientHeight,
          0.1,
          1000
        )
        camera.position.set(0, 1, isMobile ? 7 : 5)
        camera.lookAt(0, 0, 0)
        
        // Simple lighting setup
        const ambientLight = new THREE.AmbientLight(0xffffff, 2)
        scene.add(ambientLight)
        
        // Main directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
        directionalLight.position.set(5, 5, 5)
        scene.add(directionalLight)
        
        // Secondary light from the opposite direction
        const secondaryLight = new THREE.DirectionalLight(0xffffff, 1.5)
        secondaryLight.position.set(-5, 3, -5)
        scene.add(secondaryLight)
        
        // Model loading with simple loading indicator
        loadModel()
        
        // Renderer setup
        setupRenderer()
        
        // Auto-rotation setup
        setupControls()
        
        animate()
      } catch (error) {
        console.error('Three.js Plugin: Error in init function:', error)
      }
    }
    
    function loadModel() {
      // Create loading indicator
      const loadingElement = document.createElement('div')
      loadingElement.style.position = 'absolute'
      loadingElement.style.top = '50%'
      loadingElement.style.left = '50%'
      loadingElement.style.transform = 'translate(-50%, -50%)'
      loadingElement.style.color = 'white'
      loadingElement.style.fontSize = '16px'
      loadingElement.style.fontWeight = 'bold'
      loadingElement.style.textShadow = '0 2px 4px rgba(0,0,0,0.5)'
      loadingElement.textContent = 'Loading ambulance...'
      container.appendChild(loadingElement)
      
      const loader = new GLTFLoader()
      loader.load(
        '/scene.gltf',
        (gltf) => {
          model = gltf.scene
          
          // Center and scale the model
          const box = new THREE.Box3().setFromObject(model)
          const center = box.getCenter(new THREE.Vector3())
          const size = box.getSize(new THREE.Vector3())
          
          // Center the model
          model.position.set(-center.x, -center.y, -center.z)
          
          // Responsive scaling
          const isMobile = window.innerWidth < 768
          const scale = isMobile ? 
            7 / Math.max(size.x, size.y, size.z) : 
            6 / Math.max(size.x, size.y, size.z)
          model.scale.setScalar(scale)
          
          // Initial rotation
          model.rotation.y = Math.PI / 4
          
          scene.add(model)
          
          // Remove loading indicator
          container.removeChild(loadingElement)
        },
        (progress) => {
          // Update loading progress
          const percentComplete = Math.round((progress.loaded / progress.total) * 100)
          loadingElement.textContent = `Loading ambulance... ${percentComplete}%`
        },
        (error) => {
          console.error('Error loading model:', error)
          loadingElement.textContent = 'Error loading model'
        }
      )
    }
    
    function setupRenderer() {
      // Create renderer with transparent background
      renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true
      })
      
      // Set pixel ratio with a cap for performance
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(container.clientWidth, container.clientHeight)
      
      // Style the canvas for integration with the background
      renderer.domElement.style.position = 'absolute'
      renderer.domElement.style.top = '0'
      renderer.domElement.style.left = '0'
      renderer.domElement.style.width = '100%'
      renderer.domElement.style.height = '100%'
      renderer.domElement.style.pointerEvents = 'none' // Disable interaction
      
      container.style.position = 'relative'
      container.appendChild(renderer.domElement)
    }
    
    function setupControls() {
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableZoom = false
      controls.enablePan = false
      controls.enableRotate = false
      controls.enableDamping = true
      controls.autoRotate = true
      controls.autoRotateSpeed = 0.5 // Slow rotation for elegance
      controls.target.set(0, 0, 0)
      controls.update()
    }
    
    function onWindowResize() {
      if (!container) return
      
      // Update camera aspect ratio
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      
      // Update renderer size
      renderer.setSize(container.clientWidth, container.clientHeight)
      
      // Adjust for mobile/desktop
      const isMobile = window.innerWidth < 768
      camera.position.z = isMobile ? 7 : 5
    }
    
    function animate() {
      requestAnimationFrame(animate)
      
      const elapsedTime = clock.getElapsedTime()
      
      // Very subtle floating animation for the model
      if (model) {
        // Slow rotation
        model.rotation.y += 0.002
        
        // Very subtle floating movement
        model.position.y = Math.sin(elapsedTime * 0.5) * 0.03
      }
      
      renderer.render(scene, camera)
    }
    
    init()
    
    // Handle window resizing
    const resizeObserver = new ResizeObserver(() => {
      onWindowResize()
    })
    resizeObserver.observe(container)
    
    // Handle visibility changes for better performance
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        clock.stop()
      } else {
        clock.start()
      }
    })
    
    // Cleanup function
    return () => {
      resizeObserver.disconnect()
      document.removeEventListener('visibilitychange', () => {})
      
      if (renderer) renderer.dispose()
      if (scene) {
        scene.traverse((object) => {
          if (object.geometry) object.geometry.dispose()
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose())
            } else {
              object.material.dispose()
            }
          }
        })
        scene.clear()
      }
    }
  }
  
  return {
    provide: {
      initThree
    }
  }
})