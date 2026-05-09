'use client'

import Image from 'next/image'

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-[#1E5AA8] font-serif">
            Our Story
          </h2>
        </div>

        {/* Two Column Layout - Vertically Centered */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative h-96 lg:h-full min-h-[350px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/team.png"
              alt="Our dedicated team working together to empower communities"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right: Justified Text */}
          <div className="space-y-6 flex flex-col justify-center">
            <p className="text-gray-700 leading-relaxed text-justify">
              Mahtot Children and Youth Empowerment (MCYE) is a youth and child-focused organization founded in December 2025 by 10 dedicated young people. We are committed to creating a healthy mind and healthy future for children and youth through inclusive, evidence-based, and sustainable interventions that strengthen families, schools, communities, and institutions.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              Our work focuses on mental health, gender-based violence eradication, sexual and reproductive health rights (SRHR), parenting support, and youth empowerment. We believe in the power of collaboration, integrity, and accountability to drive meaningful change in our communities.
            </p>
            <div>
              <button className="px-8 py-3 border-2 border-[#1E5AA8] text-[#1E5AA8] font-semibold rounded-lg hover:bg-[#1E5AA8] hover:text-white transition-all duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
