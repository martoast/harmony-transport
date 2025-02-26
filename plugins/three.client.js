import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default defineNuxtPlugin(() => {
  console.log('Three.js Plugin: Initializing plugin')
  
  const initThree = (container) => {
    container.style.height = '400px'
    
    let camera, scene, renderer, model, startTime
    
    function init() {
      try {
        scene = new THREE.Scene()
        scene.background = new THREE.Color(0xffffff)

        camera = new THREE.PerspectiveCamera(
          45,
          container.clientWidth / container.clientHeight,
          0.1,
          1000
        )
        camera.position.set(0, 1, 5)
        camera.lookAt(0, 0, 0)
        
        const ambientLight = new THREE.AmbientLight(0xffffff, 2)
        scene.add(ambientLight)

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5)
        directionalLight.position.set(5, 5, 5)
        scene.add(directionalLight)
        
        // Add a second directional light from a different angle
        const secondaryLight = new THREE.DirectionalLight(0xffffff, 1)
        secondaryLight.position.set(-5, 3, -5)
        scene.add(secondaryLight)

        const loader = new GLTFLoader()
        loader.load(
          '/scene.gltf',
          (gltf) => {
            model = gltf.scene
            
            const box = new THREE.Box3().setFromObject(model)
            const center = box.getCenter(new THREE.Vector3())
            const size = box.getSize(new THREE.Vector3())
            
            model.position.set(0, 0, 0)
            
            const scale = 5 / Math.max(size.x, size.y, size.z)
            model.scale.setScalar(scale)
            
            scene.add(model)
          },
          (progress) => {
            console.log('Loading progress:', (progress.loaded / progress.total) * 100 + '%')
          },
          (error) => {
            console.error('Error loading model:', error)
          }
        )

        renderer = new THREE.WebGLRenderer({ 
          antialias: true,
          alpha: true
        })
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(container.clientWidth, container.clientHeight)
        container.appendChild(renderer.domElement)

        // Remove all user interactions but keep auto-rotation
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableZoom = false
        controls.enablePan = false
        controls.enableRotate = false // Disable manual rotation
        controls.enableDamping = true
        controls.autoRotate = true
        controls.autoRotateSpeed = 1
        controls.target.set(0, 0, 0)
        controls.update()

        // Disable pointer events on the canvas
        renderer.domElement.style.pointerEvents = 'none'

        startTime = Date.now()
        animate()
      } catch (error) {
        console.error('Three.js Plugin: Error in init function:', error)
      }
    }

    function onWindowResize() {
      if (!container) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }

    function animate() {
      requestAnimationFrame(animate)
      if (model) {
        model.rotation.y += 0.003
      }
      renderer.render(scene, camera)
    }

    init()

    const resizeObserver = new ResizeObserver(() => {
      onWindowResize()
    })
    resizeObserver.observe(container)

    return () => {
      resizeObserver.disconnect()
      renderer.dispose()
      scene.clear()
    }
  }

  return {
    provide: {
      initThree
    }
  }
})