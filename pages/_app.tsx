import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/GlobalStyles'
import Navigation from '../components/Navigation/Navigation'
import { useState } from 'react'
function MyApp({ Component, pageProps }: AppProps) {
  const [cartArray, setCartArray] = useState([])
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Component
        {...pageProps}
        cartArray={cartArray}
        setCartArray={setCartArray}
      />
    </>
  )
}

export default MyApp
