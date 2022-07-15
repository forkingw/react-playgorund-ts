// import React, { useCallback, useState } from "react"
// import { ColorInput } from "./common/ColorInput"

// import { ColorPicker } from "./common/ColorPicker"
import React, { useRef, useState } from 'react'
import './styles.css'

// const isTouch = (event: MouseEvent | TouchEvent): event is TouchEvent => "touches" in event

export const HexColorPicker = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [top] = useState(0)
  const [left] = useState(0)
  const handleMoveStart = (e: React.MouseEvent | React.TouchEvent) => {
    // 1. 需要记录当前值， 然后 设定当前 小圆点 位置
    // 点击的事件
    console.log('handleMoveStart e', e)

    // console.log('handleMoveStart nativeEvent', nativeEvent)
    // const offsetX =  nativeEvent.offsetX
    // const offsetY =  nativeEvent.offsetY
    // console.log('offsetX  offsetY', offsetX, offsetY)
  
    
    // 2. 绑定事件 移动事件、点击结束事件（触摸结束 事件）
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
    {/*  onMouseDown={handleMoveStart} onMouseMove={handleMove} */}
    <div ref={containerRef} className="picker" onTouchStart={handleMoveStart} onMouseDown={handleMoveStart}>
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

/**
 * TODO
 * 
 */
