import { createContext, useContext, useState } from 'react'
import { searchEvents } from '../services/Ticketmaster'

const EventContext = createContext()

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [filters, setFilters] = useState({
    keyword: '',
    category: '',
    city: 'London',
    startDate: '',
    endDate: ''
  })
  const [savedEvents, setSavedEvents] = useState([])

  const fetchEvents = (customFilters) => {
    const filtersToUse = customFilters || filters
    setLoading(true)
    setError(null)
    searchEvents(filtersToUse)
      .then(data => {
        setEvents(data)
        setLoading(false)
      })
      .catch(_ => {
        setError('Failed to load events')
        setLoading(false)
      })
  }

  const toggleSave = (event) => {
    setSavedEvents(prev =>
      prev.find(e => e.id === event.id)
        ? prev.filter(e => e.id !== event.id)
        : [...prev, event]
    )
  }

  const isSaved = (eventId) => savedEvents.some(e => e.id === eventId)

  return (
    <EventContext.Provider value={{
      events,
      loading,
      error,
      filters,
      setFilters,
      fetchEvents,
      savedEvents,
      toggleSave,
      isSaved
    }}>
      {children}
    </EventContext.Provider>
  )
}

export const useEvents = () => useContext(EventContext)