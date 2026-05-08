'use client'

import Image from 'next/image'
import { Heart, Shield, BookOpen, Home, Users, Megaphone } from 'lucide-react'

const strategicAreas = [
  {
    id: 1,
    title: 'Mental Health',
    subtitle: 'Well-being First',
    description: 'Comprehensive mental health services and emotional support for children and youth',
    icon: Heart,
    bgImage: '/MentalHealth.avif', 
  },
  {
    id: 2,
    title: 'GBV & SRHR',
    subtitle: 'Protection & Rights',
    description: 'Gender equality initiatives and sexual and reproductive health rights programs',
    icon: Shield,
    bgImage: '/GBV&SRHR.webp', 
  },
  {
    id: 3,
    title: 'Child & Youth Empowerment',
    subtitle: 'Building Futures',
    description: 'Capacity building, training, and mentorship to help youth reach their full potential',
    icon: BookOpen,
    bgImage: '/kids1.webp', 
  },
  {
    id: 4,
    title: 'Parenting & Family Support',
    subtitle: 'Family Strength',
    description: 'Strengthening families through parenting education and support services',
    icon: Home,
    bgImage: '/Parenting & Family Support.jpg',
  },
  {
    id: 5,
    title: 'Advocacy & Awareness',
    subtitle: 'Voice for Change',
    description: 'Promoting policy change and community awareness for youth rights.',
    icon: Megaphone,
    bgImage: '/Advocacy&Awareness.png',
  },
  {
    id: 6,
    title: 'Community Engagement',
    subtitle: 'Stronger Together',
    description: 'Working with local leaders to build supportive environments.',
    icon: Users,
    bgImage: '/CommunityEngagement.avif',
  },
]

export function WhatWeDo() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E5AA8] font-serif mb-4">
            Our Strategic Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            MCYE focuses on six key strategic areas to create sustainable impact and improve well-being for children and youth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategicAreas.map((area) => {
            const IconComponent = area.icon
            
            return (
              <div
                key={area.id}
                className="relative h-[390px] rounded-3xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Image Layer */}
                <Image
                  src={area.bgImage}
                  alt={area.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay: Gradient for text readability */}
                {/* This creates a shadow at the bottom but keeps the top relatively clear */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content Layer */}
                <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                  {/* Floating Icon with Backdrop Blur */}
                  <div className="mb-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-xl">
                      <IconComponent className="w-7 h-7" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-white font-serif mb-2">
                    {area.title}
                  </h3>
                  
                  <p className="text-[#F4A62A] text-sm font-bold uppercase tracking-wider mb-4">
                    {area.subtitle}
                  </p>

                  <p className="text-gray-200 text-base leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {area.description}
                  </p>

                  {/* Animated Bottom Accent Line */}
                  <div className="mt-6 h-1 w-12 bg-[#F4A62A] rounded-full transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}