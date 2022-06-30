import { HexColorPicker } from 'react-colorful'
import { PickerPreview } from './PickerPreview'

export const DevTools = (): JSX.Element => {
  return (<div>
    <PickerPreview<string> title="HEX" PickerComponent={HexColorPicker} initialColor="#406090" />
  </div>)
}