import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'parabole';
        font-style: normal;
        font-display: swap;
        src: url('/assets/fonts/parabole/Parabole.ttf') format('truetype'),
        url('/assets/fonts/parabole/Parabole.woff') format('truetype'),
        url('/assets/fonts/parabole/Parabole.eot') format('truetype'),
        url('/assets/fonts/parabole/Parabole.woff2') format('truetype')
        ;
      }      
      `}
  />
)

export default Fonts