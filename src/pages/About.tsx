import styled from 'styled-components'
import { motion } from 'framer-motion'

const AboutContainer = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
`

const Header = styled.header`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const ImageContainer = styled(motion.div)`
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
`

const Content = styled.div`
  h2 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    line-height: 1.8;
  }
`

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`

const StatItem = styled.div`
  h3 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 0.9rem;
  }
`

const About = () => {
  return (
    <AboutContainer>
      <Header>
        <Title>About Marie Joy</Title>
        <Subtitle>
          A passionate floral designer turning emotions into beautiful arrangements
        </Subtitle>
      </Header>

      <Grid>
        <ImageContainer
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="https://i.imgur.com/s1vdHUY.png" alt="Marie Joy" />
        </ImageContainer>

        <Content>
          <h2>My Story</h2>
          <p>
            My journey in floral design began in my teen years, working as a cashier at a local flower shop
            throughout high school. It was there that I discovered my passion for floral artistry and began
            learning the craft that would become my life's calling.
          </p>
          <p>
            Though I briefly ventured into the corporate world, my love for floral design never wavered.
            I continued creating arrangements for family and friends during holidays, events, and special
            occasions. Eventually, I found myself drawn back to a local flower shop part-time, where I
            refined my skills and gained confidence in my abilities.
          </p>
          <p>
            At the end of 2021, encouraged by the unwavering support of family and friends who recognized
            my passion and talent, I gathered my courage and established MJ's Florals. Operating from my
            home, I personally source all flowers and create each arrangement with love and dedication,
            ensuring every piece tells a unique story.
          </p>

          <Stats>
            <StatItem>
              <h3>2021</h3>
              <p>Business Founded</p>
            </StatItem>
            <StatItem>
              <h3>100%</h3>
              <p>Woman Owned</p>
            </StatItem>
            <StatItem>
              <h3>∞</h3>
              <p>Love for Flowers</p>
            </StatItem>
          </Stats>
        </Content>
      </Grid>
    </AboutContainer>
  )
}

export default About 