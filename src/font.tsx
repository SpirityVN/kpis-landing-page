import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'parabole';
        font-style: normal;
        font-display: swap;
        src: url('/assets/fonts/parabole/Parabole.ttf') format('truetype');
      }      
      `}
  />
)

export default Fonts