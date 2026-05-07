import { useEffect, useState } from 'react'
import { searchEvents } from '../services/Ticketmaster'

const About = () => {
  const [images, setImages] = useState([])
  const [currentImage, setCurrentImage] = useState(0)

  // Fetch events just to get images
  useEffect(() => {
    searchEvents({ keyword: 'concert', city: 'London' })
      .then(data => {
        const eventImages = data
          .filter(event => event.images?.[0]?.url)
          .slice(0, 3)
          .map(event => ({
            url: event.images[0].url,
            name: event.name
          }))
        setImages(eventImages)
      })
      .catch(_ => console.error('Failed to load images'))
  }, [])

  // Auto rotate images every 3 seconds
  useEffect(() => {
    if (images.length === 0) return
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images])

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">

      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Eventra</h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Your one stop platform for discovering events happening around you.
        </p>
      </div>

      {/* Our Mission */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          Eventra was built to solve a simple problem, People deal with lots of issues
          in search for fun events. Event information is scattered 
          across too many platforms. Our mission is to bring everything together in one 
          place from the most trusted platform so you can spend less time searching and more time enjoying. Whether 
          you're looking for a concert, festival, workshop or sports event, Eventra 
          makes it easy to find what's happening near you.
        </p>
      </div>

      {/* Our numbers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-purple-50 rounded-xl p-6 text-center">
          <p className="text-4xl font-bold text-purple-600 mb-2">20K+</p>
          <p className="text-gray-600 text-sm">Events Listed</p>
        </div>
        <div className="bg-purple-50 rounded-xl p-6 text-center">
          <p className="text-4xl font-bold text-purple-600 mb-2">50+</p>
          <p className="text-gray-600 text-sm">Categories</p>
        </div>
        <div className="bg-purple-50 rounded-xl p-6 text-center">
          <p className="text-4xl font-bold text-purple-600 mb-2">100+</p>
          <p className="text-gray-600 text-sm">Cities Covered</p>
        </div>
      </div>

      {/* Features */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">What Makes Us Different</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="font-semibold text-gray-800 mb-2">Smart Search</h3>
            <p className="text-gray-500 text-sm">Search by keyword, artist, category or location instantly</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-gray-800 mb-2">Advanced Filters</h3>
            <p className="text-gray-500 text-sm">Filter by date range, price, category and distance</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-semibold text-gray-800 mb-2">Location Aware</h3>
            <p className="text-gray-500 text-sm">Automatically finds events near your current location</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-3">🎟️</div>
            <h3 className="font-semibold text-gray-800 mb-2">No Forced Purchase</h3>
            <p className="text-gray-500 text-sm">Browse freely with no account required or ticket pressure</p>
          </div>
        </div>
      </div>

      {/* Animated Image Showcase */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Top Experience</h2>
        {images.length > 0 ? (
          <div className="relative rounded-xl overflow-hidden h-72">
            {images.map((img, index) => (
              <img
                key={index}
                src={img.url}
                alt={img.name}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            {/* Image name overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-white font-medium">{images[currentImage]?.name}</p>
            </div>
            {/* Dots */}
            <div className="absolute top-4 right-4 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImage ? 'bg-white w-4' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-400 text-center">Loading images...</p>
        )}
      </div>

    </main>
  )
}

export default About