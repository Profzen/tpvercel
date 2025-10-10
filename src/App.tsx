import Contact from "./components/Contact"
import Footer from "./components/footer"
import {Mode} from "./components/Mode"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"
import Prices from "./components/Prices"
import Team from "./components/Team"
import Testimonials from "./components/Testimonials"

function App() {

  return (
    <Mode>
      <Navbar />
      <Team />
      <Prices />
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer />
    </Mode>
  )
}

export default App
