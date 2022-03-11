import React, { FunctionComponent } from 'react'
import { NavigationBar } from './Navigation.styles'
import { useRouter } from 'next/router'

const Navigation: FunctionComponent = () => {
  const router = useRouter()
  return (
    <nav>
      <NavigationBar>
        <li onClick={() => router.push('/')}>Beers application</li>
        <li>
          <input type="text" />
        </li>
        <li onClick={() => router.push('/infinite-scroll')}>
          Infinite scroll beers
        </li>
        <li onClick={() => router.push('/pagination-beers')}>
          Pagination beers
        </li>
      </NavigationBar>
    </nav>
  )
}

export default Navigation
