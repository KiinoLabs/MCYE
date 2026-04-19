'use client'

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#1E5AA8] via-[#2B6DB8] to-[#4FA64E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white font-serif mb-6">
          Support MCYE
        </h2>
        <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl mx-auto">
          Help us light the path for children and youth. Through donations, volunteering, or partnership, you can support our mission to improve mental well-being and create sustainable opportunities for the next generation of leaders and change-makers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#1E5AA8] font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
            Join Us
          </button>
          <button className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#1E5AA8] transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
