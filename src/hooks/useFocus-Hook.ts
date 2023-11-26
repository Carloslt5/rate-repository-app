import { useState } from 'react'

export const useFocus = () => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(!isFocused)
  }

  return {
    isFocused,
    setIsFocused,
    handleFocus
  }
}
