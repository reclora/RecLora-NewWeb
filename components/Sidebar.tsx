'use client'

import { ReactNode } from 'react'

interface NavItem {
  icon: ReactNode
  label: string
  id: string
}

interface SidebarProps {
  activePage: string
  setActivePage: (page: string) => void
}

const Sidebar = ({ activePage, setActivePage }: SidebarProps) => {
  const navItems: NavItem[] = [
    { icon: '🏠', label: 'Home', id: 'home' },
    { icon: '📰', label: 'News', id: 'news' },
    { icon: '▶️', label: 'RecTube', id: 'rectube' },
    { icon: '🛒', label: 'Shop', id: 'shop' },
    { icon: '🏛️', label: 'Rooms', id: 'rooms' },
    { icon: '🎉', label: 'Events', id: 'events' },
    { icon: '💡', label: 'Inventions', id: 'inventions' },
    { icon: '🎬', label: 'Credit', id: 'credit' },
  ]

  return (
    <aside className="w-64 bg-black border-r border-gray-900 p-6 fixed h-screen overflow-y-auto">
      {/* Logo */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-reclora-pink rounded-lg flex items-center justify-center font-bold text-lg">R</div>
          <h1 className="text-xl font-bold tracking-wider">RECLORA</h1>
        </div>
        <button className="btn-download text-sm w-full justify-center gap-2">
          <span>⬇️</span>
          DOWNLOAD
        </button>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActivePage(item.id)}
            className={`nav-item ${activePage === item.id ? 'active' : ''}`}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
