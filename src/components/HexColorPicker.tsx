// import React, { useCallback, useState } from "react"
// import { ColorInput } from "./common/ColorInput"

// import { ColorPicker } from "./common/ColorPicker"
import { useRef, useState } from 'react'
import './styles.css'

// const isTouch = (event: MouseEvent | TouchEvent): event is TouchEvent => "touches" in event

export const HexColorPicker = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [top] = useState(0)
  const [left] = useState(0)
  const handleMoveStart = (e: any) => {
    console.log('-=-=', e)
  }
  const handleMove = (event: any) => {
    console.log('event', event)
  }

  const handleMoveEnd = () => toggleDocumentEvents(false);
  
  const toggleDocumentEvents = (state?:boolean) => {
    const el = containerRef.current
    if (el) {
      const toggleEvent = state ? el.addEventListener : el.removeEventListener
      toggleEvent('mousemove', handleMove)
      toggleEvent('mouseup', handleMoveEnd)
    }
  }



  return (<div>
    <div ref={containerRef} className="picker" onTouchStart={handleMoveStart} onMouseDown={handleMoveStart} onMouseMove={handleMove}>
      <div className='pointer' style={{ top, left }}></div>
    </div>
    <div className='hue'></div>
  </div>)
}

/**
 * TODO can learn
 * 1. 如果判断有没有 touch 事件
 * 2. Typescript 的 is 关键词的使用
 *      类型约束、保护函数 中有用到！
 * 3. mousemove 事件的使用
 * 4. 元素聚焦的使用 dom.focus
 */