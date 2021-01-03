import { useMemo } from 'react'

export const useCountRender = () => {
  return useMemo(() => {
    let count = 0
    const counter = () => {
      return count++
    }
    const getCountRender = () => {
      return count
    }
    return { getCountRender, counter }
  }, [])
}
