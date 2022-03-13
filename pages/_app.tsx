import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/GlobalStyles'
import Navigation from '../components/Navigation/Navigation'
import { useState } from 'react'
function MyApp({ Component, pageProps }: AppProps) {
  const [cartArray, setCartArray] = useState([])

  const uniqueItems = new Set()

  const unique = cartArray.filter(({ id }: any) => {
    const isDuplicate = uniqueItems.has(id)

    uniqueItems.add(id)

    if (!isDuplicate) {
      return true
    }
  })

  const deleteBeerFromCart = (id: number) => {
    const filteredArray = cartArray.filter((item: any) => item.id !== id)
    setCartArray(filteredArray)
  }
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Component
        {...pageProps}
        cartArray={cartArray}
        setCartArray={setCartArray}
        unique={unique}
        deleteBeerFromCart={deleteBeerFromCart}
      />
    </>
  )
}

export default MyApp
