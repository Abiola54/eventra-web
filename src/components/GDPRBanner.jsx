import { useState } from 'react'

const GDPRBanner = () => {
  const [accepted, setAccepted] = useState(false)

  if (accepted) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 z-50">
      <p className="text-sm text-gray-300 max-w-2xl">
        🍪 We use cookies to improve your experience on Eventra. By continuing to use this site, 
        you agree to our use of cookies in accordance with our{' '}
        <a href="#" className="underline text-purple-400 hover:text-purple-300">Privacy Policy</a>.
      </p>
      <div className="flex gap-3 shrink-0">
        <button
          onClick={() => setAccepted(true)}
          className="bg-purple-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition"
        >
          Accept All
        </button>
        <button
          onClick={() => setAccepted(true)}
          className="border border-gray-500 text-gray-300 px-5 py-2 rounded-lg text-sm font-medium hover:border-gray-300 transition"
        >
          Reject Non-Essential
        </button>
      </div>
    </div>
  )
}

export default GDPRBanner