import { AnyColor, ColorPickerBaseProps } from "../tyles";

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
  return (
    <div></div>
  )
}