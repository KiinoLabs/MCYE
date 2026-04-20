'use client'

import { Users, Lock, Scale, Heart, Handshake } from 'lucide-react'

const coreValues = [
  { name: 'Inclusiveness', icon: Users },
  { name: 'Integrity', icon: Lock },
  { name: 'Accountability', icon: Scale },
  { name: 'Serving', icon: Heart },
  { name: 'Collaboration', icon: Handshake },
]

export function Partners() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-[#1E5AA8] font-serif mb-6">
            Our Core Values Drive Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We engage actively
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-transparent to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-transparent to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Track */}
          <div className="flex w-max py-8 animate-marquee">
            {/* First Set */}
            <div className="flex gap-20 px-10">
              {coreValues.map((value, index) => (
                <ValueCard key={`set1-${index}`} value={value} />
              ))}
            </div>
            {/* Duplicate Set for Seamless Loop */}
            <div className="flex gap-20 px-10">
              {coreValues.map((value, index) => (
                <ValueCard key={`set2-${index}`} value={value} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Move exactly half of the total track width */
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

// Sub-component for cleaner code
function ValueCard({ value }: { value: typeof coreValues[0] }) {
  const IconComponent = value.icon
  return (
    <div className="flex-shrink-0 flex flex-col items-center justify-center group cursor-pointer">
      <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[#2C6B8D] to-[#4FA64E] flex items-center justify-center mb-6 group-hover:shadow-2xl transition-all duration-300 shadow-lg">
        <IconComponent size={56} className="text-white group-hover:scale-125 transition-transform duration-300" />
      </div>
      <p className="text-center text-gray-900 font-bold text-base leading-tight max-w-32 group-hover:text-[#2C6B8D] transition-colors duration-300">
        {value.name}
      </p>
    </div>
  )
}