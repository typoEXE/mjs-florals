import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { supabase } from '../lib/supabase'
import TestimonialForm from '../components/TestimonialForm'
import type { Testimonial } from '../types/testimonial'

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

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error

      setTestimonials(data || [])
    } catch (error) {
      console.error('Error fetching testimonials:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <TestimonialsContainer>
      <Header>
        <Title>Client Testimonials</Title>
        <Subtitle>
          Don't just take our word for it. Here's what our wonderful clients have to say about
          their experience with MJ's Floral.
        </Subtitle>
      </Header>

      <TestimonialForm />

      <TestimonialsGrid>
        {loading ? (
          <p>Loading testimonials...</p>
        ) : testimonials.length === 0 ? (
          <p>No testimonials yet. Be the first to leave one!</p>
        ) : (
          testimonials.map(testimonial => (
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
                <ClientDetails>
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.occasion}</p>
                  <p style={{ fontSize: '0.8rem', color: '#666' }}>
                    {new Date(testimonial.created_at).toLocaleDateString()}
                  </p>
                </ClientDetails>
              </ClientInfo>
            </TestimonialCard>
          ))
        )}
      </TestimonialsGrid>
    </TestimonialsContainer>
  )
}

export default Testimonials 