import { useCallback, useState } from "react"

export const ColorInput = () => {
  const [value, setValue] = useState('')
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value
      setValue(inputValue)
    },
    []
  )
  return <input value={value} onChange={handleChange} />
}