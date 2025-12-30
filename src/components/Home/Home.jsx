import { useState } from 'react'
import Navigation from '../Navigation/Navigation'
import MobileMenu from '../MobileMenu/MobileMenu'
import PageMask from '../PageMask/PageMask'
import Hero from '../Hero/Hero'
import Section1 from '../Section1/Section1'
import Section2 from '../Section2/Section2'
import Section3 from '../Section3/Section3'
import Section4 from '../Section4/Section4'
import Section6 from '../Section6/Section6'
import Footer from '../Footer/Footer'

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="App">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <PageMask isVisible={isMenuOpen} onClick={closeMenu} />
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section6 />
      <Footer />
    </div>
  )
}

export default Home

