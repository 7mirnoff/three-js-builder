import { initRender } from './init-render'
const APP = {}

const canvas = document.getElementById('scene')
APP.viewPortWidth = window.innerWidth
APP.viewPortHeight = window.innerHeight

const setSizeCanvas = () => {
  canvas.width = APP.viewPortWidth
  canvas.height = APP.viewPortHeight
}

setSizeCanvas()

initRender(canvas)

export { APP }
