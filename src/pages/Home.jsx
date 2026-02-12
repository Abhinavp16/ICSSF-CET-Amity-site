import Hero from '../components/Hero'
import QuickLinks from '../components/QuickLinks'
import About from '../components/About'
import CallForPapers from '../components/CallForPapers'
import Procedure from '../components/Procedure'
import Pricing from '../components/Pricing'
import Organizers from '../components/Organizers'
import SubmitCTA from '../components/SubmitCTA'
import useScrollReveal from '../hooks/useScrollReveal'

const Home = () => {
    useScrollReveal()

    return (
        <>
            <Hero />
            <QuickLinks />
            <About />
            <CallForPapers />
            <Pricing />
            <Organizers />
            <Procedure />
            <SubmitCTA />
        </>
    )
}

export default Home
