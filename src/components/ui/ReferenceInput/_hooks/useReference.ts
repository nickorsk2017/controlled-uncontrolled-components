import { useEffect, useRef } from 'react'

export function useReference({ callback }) {
  const inputRef = useRef(null)

  const onChangeReference = (e) => {
    callback(e.target.value)
  }
  const updateValueThrottle = (value) => {
    if (inputRef && inputRef.current && value !== inputRef.current.value) {
      inputRef.current.value = value
    }
    return inputRef
  }

  return { onChangeReference, updateValueThrottle }
}
