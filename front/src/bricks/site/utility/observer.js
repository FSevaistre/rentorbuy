if (typeof window !== 'undefined') {
  require('intersection-observer')
}

const callback = entries => {
  entries.forEach(entry => {
    const imageWithBackground = entry.target.querySelector('.imageWithBackground')
    const imageWithSrc = entry.target.querySelector('.imageWithSrc')
    if (imageWithBackground && entry.intersectionRatio > 0)
      imageWithBackground.style.backgroundImage = `url('${imageWithBackground.getAttribute('data-src')}')`

    if (imageWithSrc && entry.intersectionRatio > 0) imageWithSrc.src = imageWithSrc.getAttribute('data-src')
  })
}

export const observer = typeof window !== 'undefined' && new IntersectionObserver(callback)
