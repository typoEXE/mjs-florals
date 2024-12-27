import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      accent: string
      white: string
      text: string
      textLight: string
      background: string
      border: string
    }
    fonts: {
      primary: string
      secondary: string
    }
    breakpoints: {
      mobile: string
      tablet: string
      desktop: string
      wide: string
    }
    spacing: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
    borderRadius: {
      small: string
      medium: string
      large: string
      round: string
    }
    shadows: {
      small: string
      medium: string
      large: string
    }
    transitions: {
      fast: string
      medium: string
      slow: string
    }
  }
} 