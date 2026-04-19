'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const images = [
  '/kids3.jpg',
  '/kids2.webp',
  '/kids1.webp',
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-3000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={img}
            alt="Hero background"
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">
          Lighting the Path of Children and Youth
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl">
          Mahtot Children and Youth Empowerment (MCYE) works to ensure healthy minds and healthy futures for children and youth through inclusive, evidence-based, and sustainable interventions.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition">
            Donate Now
          </button>

          <button className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}