'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const updates = [
  {
    image: '/update-1.jpg',
    title: 'Strategic Plan Development Underway',
    description: 'MCYE is finalizing its comprehensive strategic plan to guide our work in mental health, SRHR, and youth empowerment over the next three years.',
    date: 'April 2026',
  },
  {
    image: '/update-2.jpg',
    title: 'Board Members Recruited',
    description: 'We are excited to welcome our Board of Directors with 5 members—3 women and 2 men—guiding our organization toward achieving our vision.',
    date: 'March 2026',
  },
  {
    image: '/update-3.jpg',
    title: 'Organizational Policies Finalized',
    description: 'MCYE has completed key organizational manuals including HR, Gender Policy, Safeguarding, and Communication guidelines to ensure accountability and transparency.',
    date: 'February 2026',
  },
]

export function LatestUpdates() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E5AA8] font-serif mb-4">
            Latest Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stay informed about our latest initiatives, success stories, and community impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {updates.map((update) => (
            <article
              key={update.title}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={update.image}
                  alt={update.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-[#4FA64E] font-semibold mb-2">
                  {update.date}
                </p>
                <h3 className="text-xl font-bold text-[#1E5AA8] mb-3 font-serif line-clamp-2">
                  {update.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {update.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#1E5AA8] font-semibold hover:text-[#4FA64E] transition-colors duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
