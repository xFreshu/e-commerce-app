import React from 'react'
import Navigation from './Navigation'
import { render } from '@testing-library/react'

describe('Navigation component', () => {
  it('Should render navigation component', () => {
    render(
      <>
        <Navigation />
      </>
    )
  })
})
