import { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const PortfolioContainer = styled.div`
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

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  flex-wrap: wrap;
`

const FilterButton = styled.button<{ active: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.white};
  color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`

const Gallery = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`

const GalleryItem = styled(motion.div)`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  cursor: pointer;

  &:hover {
    .overlay {
      opacity: 1;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(30, 61, 89, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitions.fast};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`

const categories = ['All', 'Weddings', 'Events', 'Custom Arrangements', 'Seasonal']

const portfolioItems = [
  {
    id: 1,
    title: 'Elegant Wedding Centerpiece',
    category: 'Weddings',
    image: '/images/portfolio/wedding-1.jpg',
    description: 'Romantic white and blush roses with delicate greenery',
  },
  {
    id: 2,
    title: 'Spring Garden Party',
    category: 'Events',
    image: '/images/portfolio/event-1.jpg',
    description: 'Vibrant mix of seasonal blooms in pastel hues',
  },
  {
    id: 3,
    title: 'Modern Minimalist Arrangement',
    category: 'Custom Arrangements',
    image: '/images/portfolio/custom-1.jpg',
    description: 'Clean lines with tropical flowers and foliage',
  },
  {
    id: 4,
    title: 'Winter Wedding Bouquet',
    category: 'Weddings',
    image: '/images/portfolio/wedding-2.jpg',
    description: 'White roses and silver brunia with eucalyptus',
  },
  {
    id: 5,
    title: 'Fall Corporate Event',
    category: 'Events',
    image: '/images/portfolio/event-2.jpg',
    description: 'Rich autumn colors with dramatic height',
  },
  {
    id: 6,
    title: 'Summer Birthday Celebration',
    category: 'Custom Arrangements',
    image: '/images/portfolio/custom-2.jpg',
    description: 'Bright and cheerful sunflowers with mixed blooms',
  },
  {
    id: 7,
    title: 'Holiday Table Setting',
    category: 'Seasonal',
    image: '/images/portfolio/seasonal-1.jpg',
    description: 'Traditional red and green with natural elements',
  },
  {
    id: 8,
    title: 'Spring Wedding Arch',
    category: 'Weddings',
    image: '/images/portfolio/wedding-3.jpg',
    description: 'Cascading flowers in white and pink',
  },
  {
    id: 9,
    title: 'Easter Centerpiece',
    category: 'Seasonal',
    image: '/images/portfolio/seasonal-2.jpg',
    description: 'Soft pastels with tulips and daffodils',
  },
]

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = portfolioItems.filter(
    item => activeCategory === 'All' || item.category === activeCategory
  )

  return (
    <PortfolioContainer>
      <Header>
        <Title>Our Portfolio</Title>
        <Subtitle>
          Explore our collection of bespoke floral designs created for weddings, events, and special
          occasions.
        </Subtitle>
      </Header>

      <FilterContainer>
        {categories.map(category => (
          <FilterButton
            key={category}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </FilterButton>
        ))}
      </FilterContainer>

      <Gallery
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <AnimatePresence>
          {filteredItems.map(item => (
            <GalleryItem
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={item.image} alt={item.title} />
              <Overlay className="overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Overlay>
            </GalleryItem>
          ))}
        </AnimatePresence>
      </Gallery>
    </PortfolioContainer>
  )
}

export default Portfolio 