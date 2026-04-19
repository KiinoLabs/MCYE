'use client'

const partners = [
  { name: 'UNICEF' },
  { name: 'Ministry of Education' },
  { name: 'Ethiopian Government' },
  { name: 'FDRE Authority for Civil Society' },
  { name: 'Community Organizations' },
  { name: 'Local Development Partners' },
]

export function Partners() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E5AA8] font-serif mb-4">
            Our Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We collaborate with leading organizations to amplify our impact and reach.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 hover:from-gray-100 hover:to-gray-200 group transition-all duration-300 cursor-pointer"
            >
              <div className="text-center">
                <div className="w-full h-12 bg-gradient-to-r from-gray-400 to-gray-500 rounded-md mb-3 group-hover:from-[#1E5AA8] group-hover:to-[#4FA64E] transition-all duration-300 flex items-center justify-center">
                  <span className="text-xs font-semibold text-gray-600 group-hover:text-white transition-colors duration-300">
                    Logo
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-[#1E5AA8] transition-colors duration-300 leading-tight">
                  {partner.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
