import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/GlobalStyles'
import Navigation from '../components/Navigation/Navigation'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
