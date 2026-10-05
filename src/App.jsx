import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { motion, useScroll, useSpring } from 'framer-motion'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Process from './components/Process'
import Experience from './components/Experience'
import Ecosystem from './components/Ecosystem'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, #6366f1, #818cf8, #c084fc)',
        transformOrigin: '0%',
        scaleX,
        zIndex: 10001,
      }}
    />
  )
}

export default function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <div className="grid-bg" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <Experience />
        <Ecosystem />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
