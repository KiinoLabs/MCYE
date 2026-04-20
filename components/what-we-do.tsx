'use client'

import Image from 'next/image'
import { Heart, Shield, BookOpen, Home, Users, Megaphone } from 'lucide-react'

const strategicAreas = [
  {
    id: 1,
    title: 'Mental Health',
    description: 'Comprehensive mental health services and emotional support for children and youth',
    type: 'dark',
    icon: Heart,
    subtitle: 'Well-being First',
  },
  {
    id: 2,
    title: 'GBV & SRHR',
    description: 'Gender equality initiatives and sexual and reproductive health rights programs',
    type: 'light',
    icon: Shield,
    subtitle: 'Protection & Rights',
  },
  {
    id: 3,
    type: 'image',
    image: '/kids1.webp',
  },
  {
    id: 4,
    title: 'Child & Youth Empowerment',
    description: 'Capacity building, training, and mentorship to help youth reach their full potential',
    type: 'dark',
    icon: BookOpen,
    subtitle: 'Building Futures',
  },
  {
    id: 5,
    type: 'image',
    image: '/Parenting & Family Support.jpg',
  },
  {
    id: 6,
    title: 'Parenting & Family Support',
    description: 'Strengthening families through parenting education and support services',
    type: 'light',
    icon: Home,
    subtitle: 'Family Strength',
  },
]

export function WhatWeDo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E5AA8] font-serif mb-4">
            Our Strategic Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            MCYE focuses on six key strategic areas to create sustainable impact and improve well-being for children and youth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strategicAreas.map((area) => {
            if (area.type === 'image') {
              return (
                <div
                  key={area.id}
                  className="relative h-96 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                >
                  <Image
                    src={area.image!}
                    alt="Strategic area"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              )
            }

            const IconComponent = area.icon!
            const isDark = area.type === 'dark'

            return (
              <div
                key={area.id}
                className={`relative h-96 rounded-3xl p-8 flex flex-col justify-between overflow-hidden group cursor-pointer transition-all duration-300 ${
                  isDark
                    ? 'bg-gradient-to-br from-[#1E5AA8] to-[#0d3f6d] text-white hover:shadow-2xl'
                    : 'bg-gradient-to-br from-white to-blue-50 border-2 border-[#1E5AA8] text-gray-800 hover:shadow-2xl'
                }`}
              >
                {/* Decorative Background Element */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-10 ${
                    isDark ? 'bg-white' : 'bg-[#1E5AA8]'
                  }`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 ${
                        isDark
                          ? 'bg-white/20 group-hover:bg-[#F4A62A]'
                          : 'bg-[#4FA64E] group-hover:bg-[#F4A62A]'
                      }`}
                    >
                      <IconComponent
                        className={`w-7 h-7 ${
                          isDark ? 'text-white' : 'text-white'
                        }`}
                      />
                    </div>
                  </div>

                  <h3
                    className={`text-3xl font-bold font-serif mb-2 transition-all duration-300 ${
                      isDark ? 'text-white' : 'text-[#1E5AA8]'
                    }`}
                  >
                    {area.title}
                  </h3>
                  <p
                    className={`text-sm font-semibold mb-4 ${
                      isDark ? 'text-[#F4A62A]' : 'text-[#4FA64E]'
                    }`}
                  >
                    {area.subtitle}
                  </p>
                </div>

                <p
                  className={`relative z-10 text-base leading-relaxed ${
                    isDark ? 'text-blue-100' : 'text-gray-700'
                  }`}
                >
                  {area.description}
                </p>

                {/* Hover Indicator */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4FA64E] to-[#F4A62A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                ></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
