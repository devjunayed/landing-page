import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Title from "./components/shared/Title"
import Social from "./components/Social"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Title text={"Features"} id="features"/>
      <Features />
      <Title text={"How It Works"} id="how-it-works"/>
      <HowItWorks />
      <Title text={"Pricing"} id="pricing"/>
      <Pricing />
      <Footer />
      <Social />
    </>
  )
}

export default App
