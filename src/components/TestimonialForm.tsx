import { useState } from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'
import { supabase } from '../lib/supabase'

const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text};
`

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`

const TextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  min-height: 100px;
`

const StarContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
`

const StarButton = styled.button<{ selected: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ selected }) => (selected ? '#FFD700' : '#ccc')};
  font-size: 1.5rem;
  
  &:hover {
    color: #FFD700;
  }
`

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;
  font-weight: bold;
  
  &:hover {
    opacity: 0.9;
  }
`

const TestimonialForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    text: '',
    occasion: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const { error } = await supabase
        .from('testimonials')
        .insert([
          {
            name: formData.name,
            rating: formData.rating,
            text: formData.text,
            occasion: formData.occasion,
            created_at: new Date().toISOString()
          }
        ])

      if (error) throw error

      // Reset form
      setFormData({
        name: '',
        rating: 5,
        text: '',
        occasion: ''
      })

      alert('Thank you for your testimonial!')
    } catch (error) {
      alert('Error submitting testimonial')
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Rating</Label>
        <StarContainer>
          {[1, 2, 3, 4, 5].map((star) => (
            <StarButton
              key={star}
              type="button"
              selected={star <= formData.rating}
              onClick={() => setFormData({ ...formData, rating: star })}
            >
              <FaStar />
            </StarButton>
          ))}
        </StarContainer>
      </FormGroup>

      <FormGroup>
        <Label>Occasion</Label>
        <Input
          type="text"
          value={formData.occasion}
          onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Your Review</Label>
        <TextArea
          value={formData.text}
          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
          required
        />
      </FormGroup>

      <SubmitButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Review'}
      </SubmitButton>
    </Form>
  )
}

export default TestimonialForm 