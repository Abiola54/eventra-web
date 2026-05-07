import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const links = [
    { path: '/', label: 'Home' },
    { path: '/events', label: 'Events' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <header role="banner">
      <nav aria-label="Main navigation" className="bg-white shadow-sm px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-purple-600" aria-label="Eventra home">
            Eventra
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8" role="menubar">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                role="menuitem"
                aria-current={location.pathname === link.path ? 'page' : undefined}
                className={`font-medium transition ${
                  location.pathname === link.path
                    ? 'text-purple-600 border-b-2 border-purple-600'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Hamburger button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-600 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-600 transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-600 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden flex flex-col gap-4 pt-4 pb-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                aria-current={location.pathname === link.path ? 'page' : undefined}
                className={`font-medium transition ${
                  location.pathname === link.path
                    ? 'text-purple-600'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar