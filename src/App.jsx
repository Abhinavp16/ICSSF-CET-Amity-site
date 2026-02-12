import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import SubmitPaper from './pages/SubmitPaper'
import ScrollToHashElement from './components/ScrollToHashElement'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Disable browser default scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToHashElement />
      <div className="min-h-screen bg-white">
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit-paper" element={<SubmitPaper />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
