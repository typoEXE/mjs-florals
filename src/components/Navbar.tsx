import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { FaBars, FaTimes } from 'react-icons/fa'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.small};
  z-index: 1000;
  padding: ${({ theme }) => theme.spacing.md};
`

const NavContainer = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`

const MenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  background: none;
  padding: ${({ theme }) => theme.spacing.xs};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing.md};
    box-shadow: ${({ theme }) => theme.shadows.medium};
    gap: ${({ theme }) => theme.spacing.md};
  }
`

const NavLink = styled(Link)<{ active: boolean }>`
  color: ${({ theme, active }) => (active ? theme.colors.secondary : theme.colors.text)};
  font-weight: ${({ active }) => (active ? '600' : '400')};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">MJ's Floral</Logo>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>
        <NavLinks isOpen={isOpen}>
          <NavLink to="/" active={isActive('/')}>
            Home
          </NavLink>
          <NavLink to="/about" active={isActive('/about')}>
            About
          </NavLink>
          <NavLink to="/portfolio" active={isActive('/portfolio')}>
            Portfolio
          </NavLink>
          <NavLink to="/services" active={isActive('/services')}>
            Services
          </NavLink>
          <NavLink to="/testimonials" active={isActive('/testimonials')}>
            Testimonials
          </NavLink>
          <NavLink to="/contact" active={isActive('/contact')}>
            Contact
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  )
}

export default Navbar 