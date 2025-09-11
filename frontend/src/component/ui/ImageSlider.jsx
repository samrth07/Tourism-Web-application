import img1 from '../../assets/img1.avif'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.avif'

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const images = [
    { src: img1, alt: "Mountain Landscape", title: "Majestic Mountains" },
    { src: img2, alt: "Ocean Sunset", title: "Ocean Paradise" },
    { src: img3, alt: "Forest Nature", title: "Enchanted Forest" },
    { src: img4, alt: "City Skyline", title: "Urban Lights" },
    { src: img5, alt: "Desert Dunes", title: "Golden Desert" }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length])

  const pauseAutoPlayTemporarily = () => {
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
    pauseAutoPlayTemporarily()
  }

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length)
    pauseAutoPlayTemporarily()
  }

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % images.length)
    pauseAutoPlayTemporarily()
  }

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 h-screen relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-white text-3xl font-bold mb-2">{image.title}</h3>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-1 bg-white rounded-full"></div>
                <span className="text-white/80 text-sm">
                  {index + 1} of {images.length}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-3 rounded-full shadow-lg backdrop-blur-sm transition hover:scale-110 z-10"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-3 rounded-full shadow-lg backdrop-blur-sm transition hover:scale-110 z-10"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === currentIndex ? "w-12 bg-white" : "w-3 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-4 right-4">
        <div
          className={`w-3 h-3 rounded-full shadow-lg ${
            isAutoPlaying ? "bg-green-400" : "bg-gray-400"
          }`}
        />
      </div>
    </div>
  )
}
