import React from 'react'
import { Card } from './BeerCard.styles'
//change type
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const BeerCard = ({ id, name, image_url, description }) => {
  return (
    <Card key={id}>
      <span>{id}</span>
      <span>{name}</span>
      <img src={image_url} alt={name} />
      <div>{description}</div>
      <button>Get more info</button>
    </Card>
  )
}

export default BeerCard
