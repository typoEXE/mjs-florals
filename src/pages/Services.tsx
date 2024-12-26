import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ServicesContainer = styled.div`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`

const ServiceCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`

const ServiceImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`

const ServiceContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ServiceTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;
`

const ServiceDescription = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  width: 100%;

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    line-height: 1.6;
    text-align: center;
  }

  ul {
    list-style-type: none;
    padding: 0;
    text-align: center;

    li {
      margin-bottom: ${({ theme }) => theme.spacing.sm};
      padding-left: 0;
      position: relative;

      &:before {
        content: "•";
        color: ${({ theme }) => theme.colors.primary};
        margin-right: ${({ theme }) => theme.spacing.sm};
      }
    }
  }
`

const Button = styled(Link)`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  text-decoration: none;
  font-weight: 600;
  transition: background-color ${({ theme }) => theme.transitions.fast};
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`

const services = [
  {
    id: 1,
    title: 'Wedding Flowers',
    image: '/images/centerImg.jpg',
    description: `Transform your special day with our exquisite wedding floral designs. We offer:`,
    features: [
      'Bridal bouquets and bridesmaids bouquets',
      'Ceremony arrangements and altar pieces',
      'Reception centerpieces and table décor',
      'Arch and aisle decorations',
      'Boutonnieres and corsages',
    ],
  },
  {
    id: 2,
    title: 'Special Events',
    image: '/images/services/events.jpg',
    description: `Make your event memorable with custom floral arrangements designed to match your theme and style:`,
    features: [
      'Corporate events and galas',
      'Birthday and anniversary celebrations',
      'Baby showers and bridal showers',
      'Holiday parties',
      'Graduation ceremonies',
    ],
  },
  {
    id: 3,
    title: 'Custom Arrangements',
    image: '/images/services/custom.jpg',
    description: `Express your unique style with our bespoke floral designs:`,
    features: [
      'Seasonal arrangements',
      'Home and office décor',
      'Gift bouquets',
      'Subscription services',
      'Special occasion pieces',
    ],
  },
]

const Services = () => {
  return (
    <ServicesContainer>
      <Header>
        <Title>Our Services</Title>
        <Subtitle>
          From intimate gatherings to grand celebrations, we create beautiful floral designs that
          bring your vision to life.
        </Subtitle>
      </Header>

      <ServicesGrid>
        {services.map(service => (
          <ServiceCard
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ServiceImage src={service.image} alt={service.title} />
            <ServiceContent>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </ServiceDescription>
              <Button to="/contact">Book Now</Button>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  )
}

export default Services 