'use client'

import Image from 'next/image'

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <div className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/team.png"
                alt="Our dedicated team working together to empower communities"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1E5AA8] font-serif">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mahtot Children and Youth Empowerment (MCYE) is a youth and child-focused organization founded in December 2025 by 10 dedicated young people. We are committed to creating a healthy mind and healthy future for children and youth through inclusive, evidence-based, and sustainable interventions that strengthen families, schools, communities, and institutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our work focuses on mental health, gender-based violence eradication, sexual and reproductive health rights (SRHR), parenting support, and youth empowerment. We believe in the power of collaboration, integrity, and accountability to drive meaningful change in our communities.
            </p>
            <button className="inline-flex items-center px-8 py-3 border-2 border-[#1E5AA8] text-[#1E5AA8] font-semibold rounded-lg hover:bg-[#1E5AA8] hover:text-white transition-all duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
