import * as THREE from 'three'
import { APP } from './index'

import { stats } from './add-stats'

const OrbitControls = require('three-orbit-controls')(THREE)

const initRender = (container) => {
  APP.renderer = new THREE.WebGLRenderer({
    canvas: container,
    alpha: true,
    antialias: true
  })
  APP.renderer.setPixelRatio(2)

  const size = APP.renderer.getSize()

  APP.scene = new THREE.Scene()
  APP.camera = new THREE.PerspectiveCamera(45, size.x / size.y, 0.1, 10000) // в скобочках (угол обзора, порпорции экрана, параметры видимоcти обекта)
  APP.camera.position.set(0, 250, 300)

  APP.controls = new OrbitControls(APP.camera, APP.renderer.domElement)

  const animate = () => {
    window.requestAnimationFrame(animate)
    stats.begin()
    render()
    stats.end()
  }

  const render = () => {
    APP.renderer.render(APP.scene, APP.camera)
  }

  animate()
}

export { initRender }
