import { Vector } from '../math/Vector'

let canvas: HTMLCanvasElement | undefined
let ctx: CanvasRenderingContext2D | undefined

const dpi = window.devicePixelRatio || 1
export const width = window.innerWidth
export const height = window.innerHeight

export function initCanvas(canvasArg: HTMLCanvasElement) {
  canvas = canvasArg
  canvas.width = width * dpi
  canvas.height = height * dpi
  ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  return { width, height, canvas, ctx }
}

export function clear() {
  if (!ctx) return
  ctx.clearRect(0, 0, width * dpi, height * dpi)
}

export function drawDot(p: Vector, hue: number = 100, size: number = 6) {
  if (!ctx) return
  ctx.fillStyle = `hsl(${(hue % 360) + 1}, 70%, 60%)`
  ctx.beginPath()
  ctx.arc(p.x * dpi, p.y * dpi, size, 0, Math.PI * 2, true)
  ctx.fill()
}

export function drawProgress(prog: number) {
  if (!ctx) return
  ctx.fillStyle = `#99f`
  ctx.beginPath()
  ctx.rect(0, 0, width * dpi * prog, 3 * dpi)
  ctx.fill()
}

export function drawZone(center: Vector, r: number) {
  if (!ctx) return
  ctx.strokeStyle = 'rgba(0,0,0,0.15)'
  ctx.beginPath()
  ctx.arc(center.x * dpi, center.y * dpi, r, 0, Math.PI * 2, true)
  ctx.stroke()
}
