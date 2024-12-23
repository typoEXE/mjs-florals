import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.text};
    background-color: ${theme.colors.background};
    line-height: 1.6;
    font-size: ${theme.typography.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.secondary};
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: ${theme.spacing.md};
  }

  h1 {
    font-size: ${theme.typography.h1};
    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: calc(${theme.typography.h1} * 0.7);
    }
  }

  h2 {
    font-size: ${theme.typography.h2};
    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: calc(${theme.typography.h2} * 0.7);
    }
  }

  h3 {
    font-size: ${theme.typography.h3};
    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: calc(${theme.typography.h3} * 0.7);
    }
  }

  h4 {
    font-size: ${theme.typography.h4};
  }

  h5 {
    font-size: ${theme.typography.h5};
  }

  h6 {
    font-size: ${theme.typography.h6};
  }

  p {
    margin-bottom: ${theme.spacing.md};
    font-size: ${theme.typography.body};
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: color ${theme.transitions.fast};

    &:hover {
      color: ${theme.colors.secondary};
    }
  }

  button {
    font-family: ${theme.fonts.primary};
    cursor: pointer;
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::selection {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
` 