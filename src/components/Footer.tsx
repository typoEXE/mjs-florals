import styled from 'styled-components'

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md};
  text-align: center;
`

const Copyright = styled.div`
  opacity: 0.8;
`

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <Copyright>
        <p>&copy; {currentYear} MJ's Floral. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  )
}

export default Footer 