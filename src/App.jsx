import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import StarryBackground from './components/StarryBackground'
import WaterAnimation from './components/WaterAnimation'
import Seo from './components/Seo'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'services', 'experience', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ThemeProvider>
      <Seo />
      <div className="App">
        <CustomCursor />
        <StarryBackground />
        <WaterAnimation />
        <Navigation activeSection={activeSection} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
