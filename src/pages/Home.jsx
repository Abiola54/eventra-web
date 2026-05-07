import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
const [keyword, setKeyword] = useState('')
const [city, setCity] = useState('')
const navigate = useNavigate()

const handleSearch = (e) => {
  e.preventDefault()
  navigate(`/events?keyword=${keyword}&city=${city}`)
}

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-br from-purple-600 to-purple-400">
        <h1 className="text-5xl font-bold text-white mb-4">
          Discover What Happens Next
        </h1>
        <p className="text-lg text-purple-100 mb-8 max-w-xl">
          Find concerts, festivals, workshops and more — all in one place.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row w-full max-w-2xl gap-2">
            <input
              type="text"
              placeholder="Search events, artists..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 outline-none shadow-md"
            />
            <input
              type="text"
              placeholder="City..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="md:w-32 px-4 py-3 rounded-lg text-gray-800 outline-none shadow-md"
            />
            <button
              type="submit"
              className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-purple-50 transition"
            >
              Search
            </button>
        </form>

        <Link
          to="/events"
          className="mt-6 text-purple-100 underline hover:text-white transition"
        >
          Browse all events →
        </Link>
      </section>

       {/* Features Section */}
       <section className="py-16 px-6 max-w-4xl mx-auto">
         <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
Why Eventra?
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-white rounded-xl p-6 shadow-sm text-center">
             <div className="text-4xl mb-4">🔍</div>
             <h3 className="text-lg font-semibold text-gray-800 mb-2">Smart Search</h3>
             <p className="text-gray-500 text-sm">Search by keyword, artist or category instantly</p>
             </div>
           <div className="bg-white rounded-xl p-6 shadow-sm text-center">
             <div className="text-4xl mb-4">🎯</div>
             <h3 className="text-lg font-semibold text-gray-800 mb-2">Advanced Filters</h3>
             <p className="text-gray-500 text-sm">Filter by date, price, category and location</p>
           </div>
           <div className="bg-white rounded-xl p-6 shadow-sm text-center">
             <div className="text-4xl mb-4">📍</div>
             <h3 className="text-lg font-semibold text-gray-800 mb-2">Location Aware</h3>
             <p className="text-gray-500 text-sm">Find events near you or anywhere you choose</p>
           </div>
         </div>
       </section>

       {/* Category section */}
       <section className= "py-16 px-6 max-w-4xl mx-auto">
         <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
           Explore by Category
         </h2>
         <p className= "text-gray-500 text-center mb-8">
           we want you to have so much fun while exploring events, so we made it easy to find exactly what you’re looking for. Just click on a category below to see all the events that match your vibe.
         </p>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           <Link to="/events?category=Music" className="bg-purple-600 text-white rounded-lg p-6 text-center hover:bg-purple-700 transition">
             🎵 Music
           </Link>
           <Link to="/events?category=festivals" className="bg-purple-600 text-white rounded-lg p-6 text-center hover:bg-purple-700 transition">
             🎉 Festivals
           </Link>
           <Link to="/events?category=workshops" className="bg-purple-600 text-white rounded-lg p-6 text-center hover:bg-purple-700 transition">
             🎓 Workshops
           </Link>
           <Link to="/events?category=exhibitions" className="bg-purple-600 text-white rounded-lg p-6 text-center hover:bg-purple-700 transition">
             🎨 Exhibitions
           </Link>
          <Link to="/events?category=sports" className="bg-purple-600 text-white rounded-lg p-6 text-center hover:bg-purple-700 transition">
             🏀 Sports
           </Link>
           <Link to="/events?category=Arts, Theater, Comedy" className="bg-purple-600 text-white rounded-lg p-6 text-center hover:bg-purple-700 transition">
             🎭 Theater
           </Link>
           <Link to="/events?category=Miscellaneous" className="bg-purple-600 text-white rounded-lg p-6 text-center hover:bg-purple-700 transition">
             🤝 Miscellaneous
           </Link>
           <Link to="/events?category=food" className="bg-purple-600 text-white rounded-lg p-6 text-center hover:bg-purple-700 transition">
             🍔 Food & Drink
           </Link>
         </div>
       </section>
      
     </main>
  )
 }

export default Home

