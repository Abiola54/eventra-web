import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { EventProvider } from './context/EventContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Events from './pages/Events'
import About from './pages/About'
import Contact from './pages/Contact'
import GDPRBanner from './components/GDPRBanner'

import Footer from './components/Footer'

const App = () => {
  return (
    <EventProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <GDPRBanner />
      </BrowserRouter>
    </EventProvider>
  )
}
export default App