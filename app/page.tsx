'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'

export default function Home() {
  const [activePage, setActivePage] = useState('home')

  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 overflow-auto">
        <Hero />
        <Features />
      </main>
    </div>
  )
}
