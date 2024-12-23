import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaYelp } from 'react-icons/fa'
import styled from 'styled-components'

const ContactContainer = styled.div`
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
  max-width: 600px;
  margin: 0 auto;
`

const BusinessCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  max-width: 600px;
  margin: 0 auto;
`

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  svg {
    font-size: 1.5rem;
    margin-right: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
  justify-content: center;
`

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

const Contact = () => {
  return (
    <ContactContainer>
      <Header>
        <Title>Contact Us</Title>
        <Subtitle>
          Let us help bring your floral vision to life. Reach out to discuss your special occasion.
        </Subtitle>
      </Header>

      <BusinessCard>
        <InfoItem>
          <FaPhone />
          <div>
            <h3>Phone</h3>
            <p>626-392-6307</p>
          </div>
        </InfoItem>
        <InfoItem>
          <FaEnvelope />
          <div>
            <h3>Email</h3>
            <p>Contact us for email</p>
          </div>
        </InfoItem>
        <InfoItem>
          <FaMapMarkerAlt />
          <div>
            <h3>Location</h3>
            <p>Home-based business serving LA, OC, IE, and SB California</p>
          </div>
        </InfoItem>
        
        <SocialLinks>
          <SocialLink 
            href="https://www.instagram.com/mjsflorals" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
          >
            <FaInstagram />
          </SocialLink>
          <SocialLink 
            href="https://www.yelp.com/biz/mjs-floral-rowland-heights" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Review us on Yelp"
          >
            <FaYelp />
          </SocialLink>
        </SocialLinks>
      </BusinessCard>
    </ContactContainer>
  )
}

export default Contact 