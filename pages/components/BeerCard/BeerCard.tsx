import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  min-height: 500px;
  margin: 40px;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: 0.7s;
  :hover {
    transform: translateY(-10px);
  }
  span {
    margin: 20px 0;
    font-weight: 700;
    font-size: 1.4rem;
    text-align: center;
  }
  img {
    height: 300px;
  }
  div {
    padding: 30px;
    text-align: justify;
  }
  button {
    margin-bottom: 20px;
  }
`

const BeerCard = ({ id, name, image_url, description }: never) => {
  return (
    <Card key={id}>
      <span>{name}</span>
      <img src={image_url} alt={name} />
      <div>{description}</div>
      <button>Get more info</button>
    </Card>
  )
}

export default BeerCard
