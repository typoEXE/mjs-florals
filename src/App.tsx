import { Routes, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyle.ts'
import { theme } from './styles/theme.ts'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Portfolio from './pages/Portfolio.tsx'
import Services from './pages/Services.tsx'
import Contact from './pages/Contact.tsx'
import Testimonials from './pages/Testimonials.tsx'

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const MainContent = styled.main`
  flex: 1;
  padding-top: 80px; // Height of the fixed navbar
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App 