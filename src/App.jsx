import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuickLinks from './components/QuickLinks'
import About from './components/About'
import CallForPapers from './components/CallForPapers'
import Procedure from './components/Procedure'
import Pricing from './components/Pricing'
import Organizers from './components/Organizers'
import SubmitCTA from './components/SubmitCTA'
import Footer from './components/Footer'
import useScrollReveal from './hooks/useScrollReveal'

function App() {
  useScrollReveal()

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <Hero />
      <QuickLinks />
      <About />
      <CallForPapers />
      <Pricing />
      <Organizers />
      <Procedure />
      <SubmitCTA />
      <Footer />
    </div>
  )
}

export default App
