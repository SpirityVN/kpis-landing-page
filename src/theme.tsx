import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'


const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors: {
    white: '#ffffff',
    // black: '#16161D',
  },
  fonts: {
    body: 'poppins, sans-serif',
    poppins:  'poppins, sans-serif',
    parabole: 'parabole, sans-serif'
  },
  breakpoints,
})

export default theme