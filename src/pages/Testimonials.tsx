import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const TestimonialsContainer = styled.div`
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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`

const TestimonialCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  position: relative;
`

const QuoteIcon = styled.div`
  position: absolute;
  top: -${({ theme }) => theme.spacing.md};
  left: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.small};

  svg {
    font-size: 1.5rem;
  }
`

const Stars = styled.div`
  color: #FFD700;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
`

const TestimonialText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text};
`

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`

const ClientImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`

const ClientDetails = styled.div`
  h3 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 0.9rem;
  }
`

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Bride',
    image: '/images/testimonials/client-1.jpg',
    rating: 5,
    text: 'Joy created the most stunning floral arrangements for my wedding. Her attention to detail and ability to bring my vision to life was incredible. The bouquets were absolutely perfect!',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Corporate Event Planner',
    image: '/images/testimonials/client-2.jpg',
    rating: 5,
    text: 'Working with MJ\'s Floral for our company gala was a fantastic experience. The arrangements were elegant and received countless compliments from our guests.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Birthday Celebration',
    image: '/images/testimonials/client-3.jpg',
    rating: 5,
    text: 'Joy has an amazing talent for creating beautiful arrangements. She designed the perfect centerpieces for my 30th birthday party, capturing exactly the mood I wanted.',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Wedding Planner',
    image: '/images/testimonials/client-4.jpg',
    rating: 5,
    text: 'I\'ve worked with many florists, but MJ\'s Floral stands out for their creativity and professionalism. They\'re my go-to recommendation for all my clients.',
  },
  {
    id: 5,
    name: 'Lisa Martinez',
    role: 'Anniversary Celebration',
    image: '/images/testimonials/client-5.jpg',
    rating: 5,
    text: 'The anniversary arrangement Joy created was beyond my expectations. Her artistic vision and quality of flowers were exceptional. Highly recommend!',
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Corporate Client',
    image: '/images/testimonials/client-6.jpg',
    rating: 5,
    text: 'We use MJ\'s Floral for all our office arrangements and special events. Their consistency in quality and service is unmatched. A true professional.',
  },
]

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <Header>
        <Title>Client Testimonials</Title>
        <Subtitle>
          Don't just take our word for it. Here's what our wonderful clients have to say about
          their experience with MJ's Floral.
        </Subtitle>
      </Header>

      <TestimonialsGrid>
        {testimonials.map(testimonial => (
          <TestimonialCard
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <QuoteIcon>
              <FaQuoteLeft />
            </QuoteIcon>
            <Stars>
              {[...Array(testimonial.rating)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </Stars>
            <TestimonialText>{testimonial.text}</TestimonialText>
            <ClientInfo>
              <ClientImage src={testimonial.image} alt={testimonial.name} />
              <ClientDetails>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.role}</p>
              </ClientDetails>
            </ClientInfo>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsContainer>
  )
}

export default Testimonials 