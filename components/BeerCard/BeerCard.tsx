import React, { useState } from 'react'
import { Card } from './BeerCard.styles'
import ModalComponent from '../ModalComponent/ModalComponent'
import { AddCartButton } from '../ModalComponent/ModalComponent.styles'
//change type
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const BeerCard = ({
  id,
  name,
  image_url,
  description,
  tagline,
  setCartArray,
  cartArray,
}: any) => {
  const [showModal, setShowModal] = useState(false)
  const addBeer = () => {
    setCartArray([
      ...cartArray,
      {
        id,
        name,
        tagline,
        image_url,
        amount: 1,
        cost: (Math.random() * 50).toFixed(2),
      },
    ])
  }

  return (
    <>
      <Card key={id}>
        <span>{name}</span>
        <img src={image_url} alt={name} />
        <div>{description.substring(0, 100)}...</div>
        <AddCartButton onClick={() => setShowModal(true)}>
          Get more info
        </AddCartButton>
      </Card>
      <ModalComponent
        show={showModal}
        onClose={() => setShowModal(false)}
        title={name}
        tagline={tagline}
        image_url={image_url}
        description={description}
        addBeer={addBeer}
      />
    </>
  )
}

export default BeerCard
