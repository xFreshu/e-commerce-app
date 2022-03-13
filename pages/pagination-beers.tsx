import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Wrapper,
  ChangePageButton,
  Container,
} from '../styles/pagination-beers.styles'
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner'
import BeerCard from '../components/BeerCard/BeerCard'

const PaginationBeers = ({ setCartArray, cartArray }: any) => {
  const [getBeer, setBeer] = useState([])
  const [counter, setCounter] = useState(1)
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers?page=${counter}&per_page=6`)
      .then((response: any) => {
        console.log(response.data)
        setIsLoaded(true)
        setBeer(response.data)
      })
  }, [counter])

  const PreviousPage = () => {
    if (counter === 1) {
      alert('Theres no previous page')
    } else setCounter(counter - 1)
  }

  const NextPage = () => {
    if (counter === 54) {
      alert('Theres no next page')
    } else setCounter(counter + 1)
    console.log(counter)
  }

  return (
    <Wrapper>
      <ChangePageButton onClick={PreviousPage}>Previous page</ChangePageButton>
      <Container>
        {isLoaded ? (
          getBeer.map(({ id, name, image_url, description, tagline }: any) => (
            // <Card key={id}>
            //   <span>{id}</span>
            //   <span>{name}</span>
            //   <img src={image_url} alt={name} />
            //   <div>{description.substring(0, 100)}...</div>
            //   <button>Get more info</button>
            // </Card>
            <BeerCard
              key={id}
              id={id}
              name={name}
              description={description}
              image_url={image_url}
              tagline={tagline}
              setCartArray={setCartArray}
              cartArray={cartArray}
            />
          ))
        ) : (
          <LoadingSpinner />
        )}
      </Container>
      <ChangePageButton onClick={NextPage}>Next page</ChangePageButton>
    </Wrapper>
  )
}

export default PaginationBeers
