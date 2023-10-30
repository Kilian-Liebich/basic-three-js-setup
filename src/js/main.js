import '../scss/main.scss'
// import gsap from "gsap";
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
	width: 400,
	height: 200,
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
	canvas,
})
renderer.setSize(sizes.width, sizes.height)

// Clock
const clock = new THREE.Clock()

// Animation
const animate = () => {
	// Clock
	const elepsedTime = clock.getElapsedTime()

	// Update object
	mesh.rotation.y = elepsedTime * Math.PI * 0.6
	mesh.rotation.x = elepsedTime * Math.PI * 0.1

	// Render
	renderer.render(scene, camera)

	window.requestAnimationFrame(animate)
}

animate()
