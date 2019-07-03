import { useState, useEffect } from 'react'

export const useWebpSupport = defaultExtenstion => {
  const [ext, setExt] = useState('.webp')

  useEffect(() => {
    useWebpSupport.supportWebp.then(supported => {
      if (!supported) {
        setExt(defaultExtenstion)
      }
    })
  }, [])

  return ext
}

useWebpSupport.supportWebp = new Promise(resolve => {
  if (typeof window === 'undefined') {
    return resolve(false)
  }

  const image = new window.Image()

  image.onerror = () => resolve(false)
  image.onload = () => resolve(image.width === 1)
  image.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAQAcJaQAA3AA/v3AgAA='
})
