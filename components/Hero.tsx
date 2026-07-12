'use client'

const Hero = () => {
  return (
    <section className="ml-64 pt-12 px-12 pb-12">
      <div className="bg-gradient-to-r from-reclora-blue to-blue-600 rounded-3xl overflow-hidden h-96 relative">
        {/* Pattern Background */}
        <div className="absolute inset-0 pattern-bg opacity-30"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0">
          <div className="grid grid-cols-9 h-full opacity-20">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="border border-blue-500"></div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center">
          <h2 className="text-5xl md:text-6xl font-black italic text-white drop-shadow-lg mb-8">
            JOIN THE FUN<br />FOR FREE!
          </h2>
          <button className="btn-download text-base">
            <span>⬇️</span>
            DOWNLOAD
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
