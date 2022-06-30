import React, { useState } from "react";
import { HexColorInput } from "react-colorful";
import Frame from 'react-frame-component'
import { PreviewContainer, PreviewDemo, PreviewOutput, PreviewTitle } from "../styles";
import { AnyColor, ColorPickerBaseProps } from "../../tyles";

interface Props<T extends AnyColor> {
  title: string;
  frame?: boolean;
  PickerComponent: React.ComponentType<Partial<ColorPickerBaseProps<T>>>
  initialColor?: T
}

export function PickerPreview <T extends AnyColor> ({
  title,
  frame,
  PickerComponent,
  initialColor  
}: Props<T>):JSX.Element {
  const [color, setColor] = useState(initialColor)
  const handleChange = (color: T) => {
    setColor(color)
  }

  const Wrapper = frame ? Frame : React.Fragment
  
  return (
    <PreviewContainer>
      <PreviewTitle>{ title }</PreviewTitle>
      <PreviewDemo>
        <Wrapper>
          <PickerComponent color={color} onChange={handleChange}></PickerComponent>
        </Wrapper>
        {/* @ts-ignore */}
        {title === "HEX" && <HexColorInput color={color} onChange={handleChange} prefixed alpha />}
      </PreviewDemo>
      <PreviewOutput>{JSON.stringify(color)}</PreviewOutput>
    </PreviewContainer>
  )
}