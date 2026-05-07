import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-white text-xl font-bold mb-3">Eventra</h2>
            <p className="text-sm leading-relaxed">
              One platform. Smart discovery. No ticket pressure. Find events happening near you in real time.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Pages</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link to="/" className="hover:text-purple-400 transition">Home</Link></li>
              <li><Link to="/events" className="hover:text-purple-400 transition">Events</Link></li>
              <li><Link to="/about" className="hover:text-purple-400 transition">About</Link></li>
              <li><Link to="/contact" className="hover:text-purple-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
                <div>
                <h3 className="text-white font-semibold mb-3">Get In Touch</h3>
                <ul className="flex flex-col gap-2 text-sm">
                    <li className="text-gray-400">Amidat Abiola Ishola</li>
                    <li>
                    <a 
                        href="mailto:your@email.com" 
                        className="hover:text-purple-400 transition"
                    >
                        isholaabiola6@gmail.com
                    </a>
                    </li>
                </ul>
                </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} Eventra. All rights reserved.</p>
          <p>Powered by <a href="https://www.ticketmaster.com" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300">Ticketmaster API</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer