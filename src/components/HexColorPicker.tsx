// import React, { useCallback, useState } from "react"
// import { ColorInput } from "./common/ColorInput"

// import { ColorPicker } from "./common/ColorPicker"
import { useState } from 'react'
import './styles.css'

export const HexColorPicker = () => {
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const handleMoveStart = (e: any) => {
    console.log('-=-=', e)
  }
  const handleMove = (event: MouseEvent | TouchEvent) => {
    console.log('evnet', event)
  }

  const toggleDocumentEvents = () => {

  }

  return (<div>
    <div className="picker" onTouchStart={handleMoveStart} onMouseDown={handleMoveStart}>
      <div className='pointer' style={{top, left}}></div>
    </div>
    <div className='hue'></div>
  </div>)
}

/**
 * TODO can learn
 * 1. 如果判断有没有 touch 事件
 * 2. Typescript 的 is 关键词的使用
 * 3. mousemove 事件的使用
 * 4. 元素聚焦的使用 dom.focus
 */