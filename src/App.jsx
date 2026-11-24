import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './sections/Navbar.jsx'
import Footer from './sections/Footer.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'

// Pages that mount a three.js <Canvas> are code-split so the 3D bundle loads on demand
const Home = lazy(() => import('./sections/Home.jsx'))
const About = lazy(() => import('./sections/About.jsx'))
const WorkExperience = lazy(() => import('./sections/Experience.jsx'))

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const Page = ({ children }) => <div className="max-w-7xl mx-auto relative">{children}</div>

const App = () => (
  <main className="mx-auto relative">
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <Page>
                <About />
              </Page>
            }
          />
          <Route
            path="/work"
            element={
              <>
                <Page>
                  <Projects />
                </Page>
                <Page>
                  <WorkExperience />
                </Page>
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <Page>
                <Contact />
              </Page>
            }
          />
          {/* Unknown URLs go home instead of rendering an empty page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  </main>
)

export default App
