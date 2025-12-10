import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SideSocials from '@/components/SideSocials'
import SideEmail from '@/components/SideEmail'

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-secondary selection:bg-foreground selection:text-background overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <SideSocials />
      <SideEmail />
    </main>
  )
}
