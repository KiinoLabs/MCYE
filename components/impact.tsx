'use client'

const stats = [
  {
    number: '10',
    label: 'Founding Youth Leaders',
  },
  {
    number: '5',
    label: 'Board Members',
  },
  {
    number: '5',
    label: 'Strategic Areas',
  },
  {
    number: '10+',
    label: 'Strategic Interventions',
  },
]

export function Impact() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1E5AA8] to-[#4FA64E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white font-serif">
            Our Impact
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mt-4">
            Measurable outcomes that demonstrate our commitment to youth empowerment
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center py-8 px-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-5xl lg:text-6xl font-bold text-white font-serif mb-3">
                {stat.number}
              </div>
              <p className="text-lg text-blue-100">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
