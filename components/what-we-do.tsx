'use client'

import { Heart, BookOpen, Users, Shield, Home } from 'lucide-react'

const programs = [
  {
    icon: Heart,
    title: 'Mental Health',
    description: 'Promoting good health and well-being through comprehensive mental health services and emotional support for children and youth.',
  },
  {
    icon: Shield,
    title: 'GBV & SRHR',
    description: 'Gender equality initiatives and sexual and reproductive health rights (SRHR) programs to protect and empower youth.',
  },
  {
    icon: BookOpen,
    title: 'Child & Youth Empowerment',
    description: 'Capacity building, training, and mentorship to help youth reach their full potential and create meaningful change.',
  },
  {
    icon: Home,
    title: 'Parenting & Family Support',
    description: 'Strengthening families through parenting education and support services that foster healthy child development.',
  },
  {
    icon: Users,
    title: 'Community Engagement',
    description: 'Building inclusive communities through awareness, education, and stakeholder engagement initiatives.',
  },
  {
    icon: BookOpen,
    title: 'Advocacy & Policy',
    description: 'Engaging in advocacy and policy engagement to create systemic change for children and youth protection.',
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
            MCYE focuses on five key strategic areas to create sustainable impact and improve well-being for children and youth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => {
            const IconComponent = program.icon
            return (
              <div
                key={program.title}
                className="group p-8 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#1E5AA8] transition-all duration-300 cursor-pointer"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[#4FA64E] group-hover:bg-[#1E5AA8] transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#1E5AA8] mb-3 font-serif">
                  {program.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {program.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
