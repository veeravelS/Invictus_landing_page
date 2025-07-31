import Contact from "./components/contact/Contact"
import Footer from "./components/footer"
import HeroSection from "./components/hero/HeroSection"
import JoinInvictus from "./components/joinInvictus/JoinInvictus"
import Overview from "./components/overview/Overview"
import Pricing from "./components/pricing/Pricing"


function App() {
  return (
      <div className="min-h-screen p-2 flex flex-col items-center justify-start">
      <HeroSection />
      <Overview />
      <Contact />
      <Pricing />
      <JoinInvictus />
      <Footer />
    </div>
  )
}

export default App