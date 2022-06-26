import { useRef } from "react"
import useThrottledEffect from 'use-throttled-effect'
const ICON_SIZE = 64;
const OUTLINE_RADIUS = 28;
const POINTER_RADIUS = 22;

function createCanvas(): HTMLCanvasElement {
  const canvas = document.createElement("canvas")
  canvas.width = ICON_SIZE
  canvas.height = ICON_SIZE
  return canvas
}

function createBackgroundCanvas(): HTMLCanvasElement {
  const canvas = createCanvas()
  const ctx = canvas.getContext("2d")
  
  if (!ctx) return canvas

  ctx.beginPath()
  ctx.arc(ICON_SIZE * 0.5, ICON_SIZE * 0.5, OUTLINE_RADIUS, 0, 2 * Math.PI, false)
  ctx.closePath()

  ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
  ctx.shadowOffsetY = 1;
  ctx.shadowBlur = 6;
  ctx.fillStyle = "#fff";
  ctx.fill();

  return canvas
}

export const useFaviconColor = (color: string):void => {
  const faviconNode = useRef<HTMLLinkElement>()
  const canvas = useRef<HTMLCanvasElement>()
  const backgroundCanvas = useRef<HTMLCanvasElement>()

  if (!canvas.current) {
    canvas.current = createCanvas();
    backgroundCanvas.current = createBackgroundCanvas()
  }

  const shouldReplace = () => {
    if (window.innerWidth < 768 && faviconNode.current) {
      return false
    }
    return true
  }

  const replaceFavicon = (pointerColor: string) => {
    if (!canvas.current || !backgroundCanvas.current) {
      return;
    }

    const ctx = canvas.current.getContext("2d")
    if (!ctx) {
      return
    }

    ctx.clearRect(0, 0, ICON_SIZE, ICON_SIZE)

    ctx.drawImage(backgroundCanvas.current, 0, 0)

    ctx.beginPath()
    ctx.arc(ICON_SIZE * 0.5, ICON_SIZE * 0.5, POINTER_RADIUS, 0, 2 * Math.PI, false)
    ctx.closePath()
    ctx.fillStyle = pointerColor
    ctx.fill()

     const link = document.createElement("link")
     link.rel = "shortcut icon";
     link.href = canvas.current.toDataURL("image/x-icon");

     if (faviconNode.current) {
      document.head.removeChild(faviconNode.current)
     }

     document.head.appendChild(link)
     faviconNode.current = link
  }

  useThrottledEffect(
    () => {
      if (shouldReplace()) {
        replaceFavicon(color)
      }
    },
    500,
    [color]
  )
}
