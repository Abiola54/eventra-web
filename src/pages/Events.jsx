import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useEvents } from '../context/EventContext'

const Events = () => {
  const { events, loading, error, filters, setFilters, fetchEvents } = useEvents()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const keyword = searchParams.get('keyword') || ''
    const category = searchParams.get('category') || ''
    const city = searchParams.get('city') || filters.city
    const updatedFilters = { ...filters, keyword, category, city }
    setFilters(updatedFilters)
    fetchEvents(updatedFilters)
  }, [])

  const handleFilterChange = (e) => {
    setFilters(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSearch = (e) => {
    e.preventDefault()
    fetchEvents(filters)
  }

  if (loading) return <p className="text-center py-10 text-purple-600">Loading events...</p>
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Events happening around you
      </h1>
      <p className="text-gray-600 mb-6">
        Discover concerts, sports, arts, and more. Use the filters to find events that match your interests and location.
      </p>

      <form onSubmit={handleSearch} className="bg-white rounded-xl shadow-sm p-4 mb-8 flex flex-col md:flex-row flex-wrap gap-4">
        <input
          aria-label="Search by keyword or artist"
          type="text"
          name="keyword"
          placeholder="Search with keyword or artist..."
          value={filters.keyword}
          onChange={handleFilterChange}
          className="flex-1 min-w-40 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-purple-400"
        />
        <select
          aria-label="Filter by category"
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-purple-400"
        >
          <option value="">All Categories</option>
          <option value="Music">Music</option>
          <option value="Sports">Sports</option>
          <option value="Arts & Theatre">Arts & Theatre</option>
          <option value="Film">Film</option>
          <option value="Miscellaneous">Miscellaneous</option>
          <option value="Concert">Concert</option>
        </select>
        <input
          aria-label="Filter by city"
          type="text"
          name="city"
          placeholder="City..."
          value={filters.city}
          onChange={handleFilterChange}
          className="border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-purple-400"
        />
        <input
          aria-label="Start date"
          type="date"
          name="startDate"
          value={filters.startDate}
          onChange={handleFilterChange}
          className="border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-purple-400"
        />
        <input
          aria-label="End date"
          type="date"
          name="endDate"
          value={filters.endDate}
          onChange={handleFilterChange}
          className="border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-purple-400"
        />
        <button
          type="submit"
          aria-label="Search events"
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition text-sm font-medium"
        >
          Search
        </button>
      </form>

      {/* No results message */}
      {events.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">No events found</h2>
          <p className="text-gray-500 mb-6">
            We couldn't find any events matching your search. Try a different keyword, category or city.
          </p>
          <button
            onClick={() => fetchEvents({ keyword: '', category: '', city: 'London', startDate: '', endDate: '' })}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition text-sm font-medium"
          >
            Reset Search
          </button>
        </div>
      )}

      {/* Events Grid */}
      {events.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <div key={event.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition flex flex-col">
              <img
                src={event.images?.[0]?.url}
                alt={event.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <h2 className="text-lg font-semibold text-gray-800 mb-2 overflow-hidden" style={{height: '56px'}}>
                  {event.name}
                </h2>
                <p className="text-sm text-gray-500 mb-1">
                  📅 {event.dates?.start?.localDate}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  📍 {event._embedded?.venues?.[0]?.name}, {event._embedded?.venues?.[0]?.city?.name}
                </p>
                <div className="mt-auto">
                 <a 
                    href={event.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-center bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition text-sm font-medium"
                  >
                    View Tickets
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}

export default Events