const API_KEY = import.meta.env.VITE_TICKETMASTER_API_KEY
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2'

export const searchEvents = async ({ keyword = '', category = '', city = '', startDate = '', endDate = '' } = {}) => {
  
  // Default start date is today
  const today = new Date().toISOString().split('T')[0]
  
  const params = new URLSearchParams({
    apikey: API_KEY,
    keyword,
    classificationName: category,
    city,
    startDateTime: startDate ? `${startDate}T00:00:00Z` : `${today}T00:00:00Z`,
    endDateTime: endDate ? `${endDate}T23:59:59Z` : '',
    size: 20,
    sort: 'date,asc'
  })

  // Remove empty params
  for (const [key, value] of params.entries()) {
    if (!value) params.delete(key)
  }

  const response = await fetch(`${BASE_URL}/events.json?${params}`)
  const data = await response.json()
  return data._embedded?.events || []
}