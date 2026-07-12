'use client'

interface Feature {
  title: string
  description: string
  color: string
  gradient: string
}

const Features = () => {
  const features: Feature[] = [
    {
      title: 'CROSS-PLATFORM',
      description: 'Play together on PC, mobile, and VR — no matter what device your friends are on.',
      color: 'from-orange-400 to-yellow-400',
      gradient: 'bg-gradient-to-br from-orange-500/20 to-yellow-500/20',
    },
    {
      title: 'CREATE',
      description: 'Build your own rooms, games, and inventions with powerful in-game tools.',
      color: 'from-pink-400 to-red-400',
      gradient: 'bg-gradient-to-br from-pink-500/20 to-red-500/20',
    },
    {
      title: 'COMPETE',
      description: 'Jump into paintball, laser tag, and dozens of competitive game modes.',
      color: 'from-yellow-300 to-orange-400',
      gradient: 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20',
    },
    {
      title: 'COOPERATE',
      description: 'Team up with friends to take on quests, dungeons, and epic co-op adventures.',
      color: 'from-purple-500 to-pink-500',
      gradient: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
    },
  ]

  return (
    <section className="ml-64 px-12 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="group cursor-pointer">
            {/* Feature Card Image Placeholder */}
            <div className={`feature-card ${feature.gradient} mb-4 flex items-center justify-center text-6xl`}>
              {feature.title === 'CROSS-PLATFORM' && '🎮'}
              {feature.title === 'CREATE' && '🛠️'}
              {feature.title === 'COMPETE' && '⚔️'}
              {feature.title === 'COOPERATE' && '👥'}
            </div>

            {/* Feature Info */}
            <div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-reclora-blue transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
