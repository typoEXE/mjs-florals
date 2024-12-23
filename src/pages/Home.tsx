import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
  }

  iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    transform: translate(-50%, -50%);
    pointer-events: none;
    
    @media (min-aspect-ratio: 16/9) {
      height: 56.25vw;
    }
    @media (max-aspect-ratio: 16/9) {
      width: 177.78vh;
    }
  }
`

const HeroSection = styled.section`
  position: relative;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: ${({ theme }) => theme.spacing.md};
`

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.fonts.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  opacity: 0.9;
`

const Button = styled(Link)`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: 600;
  transition: background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
  }
`

const FeaturedSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
  background-color: ${({ theme }) => theme.colors.background};
`

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.primary};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
`

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
`

const CardTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
`

const Home = () => {
  return (
    <>
      <HeroSection>
        <VideoBackground>
          <iframe
            src="https://www.youtube.com/embed/NOAIetWSleQ?autoplay=1&mute=1&controls=0&loop=1&playlist=NOAIetWSleQ&playsinline=1&rel=0&version=3&modestbranding=1&start=3&end=58&enablejsapi=1"
            title="Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoBackground>
        <HeroContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroTitle>Crafting Floral Stories for Life's Special Moments</HeroTitle>
          <HeroSubtitle>
            Elevate your celebrations with exquisite floral designs tailored to your unique style
          </HeroSubtitle>
          <Button to="/contact">Book a Consultation</Button>
        </HeroContent>
      </HeroSection>

      <FeaturedSection>
        <SectionTitle>Our Services</SectionTitle>
        <Grid>
          <Card
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <CardImage src="/images/weddings.jpg" alt="Wedding Flowers" />
            <CardContent>
              <CardTitle>Weddings</CardTitle>
              <p>Create unforgettable moments with our stunning wedding floral arrangements.</p>
            </CardContent>
          </Card>

          <Card
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <CardImage src="/images/events.jpg" alt="Event Flowers" />
            <CardContent>
              <CardTitle>Special Events</CardTitle>
              <p>Transform your events into extraordinary experiences with our custom designs.</p>
            </CardContent>
          </Card>

          <Card
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <CardImage src="/images/custom.jpg" alt="Custom Arrangements" />
            <CardContent>
              <CardTitle>Custom Arrangements</CardTitle>
              <p>Express your unique style with our personalized floral creations.</p>
            </CardContent>
          </Card>
        </Grid>
      </FeaturedSection>
    </>
  )
}

export default Home 