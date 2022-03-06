import React, { FunctionComponent } from 'react'
import { NavigationBar } from './Navigation.styles'

const Navigation: FunctionComponent = () => {
  return (
    <nav>
      <NavigationBar>
        <li>Beers application</li>
        <li>
          <input type="text" />
        </li>
        <li>Infinite loop beers</li>
        <li>Pagination beers</li>
      </NavigationBar>
    </nav>
  )
}

export default Navigation
