import React, { useEffect, useState } from 'react'
import {
  StyledInfiniteScroll,
  Wrapper,
  CardContainer,
} from '../styles/infinite-scroll.styles'
import BeerCard from '../components/BeerCard/BeerCard'
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner'
import axios from 'axios'

const InfiniteScrollComponent = ({ beers, setCartArray, cartArray }: any) => {
  const [keyPage, setKeyPage] = useState(2)
  const [getBeers, setBeers] = useState(beers)
  const [newBeers, setNewBeers] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers?page=${keyPage}&per_page=5`)
      .then((response) => {
        console.log(response.data)
        setIsLoaded(true)
        setNewBeers(response.data)
      })
  }, [keyPage])
  const fetchData = () => {
    console.log(newBeers)
    setTimeout(() => {
      setBeers([...getBeers, ...newBeers])
      setKeyPage(keyPage + 1)
      console.log(keyPage)
    }, 500)
  }
  // @ts-ignore
  return (
    <Wrapper>
      <CardContainer>
        <StyledInfiniteScroll
          dataLength={getBeers.length} //This is important field to render the next data
          next={fetchData}
          hasMore={true}
          loader={<LoadingSpinner />}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {isLoaded
            ? getBeers.map(
                ({ id, name, description, image_url, tagline }: any) => (
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
                )
              )
            : null}
        </StyledInfiniteScroll>
      </CardContainer>
    </Wrapper>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=5`)
  const beers = await res.json()
  return {
    props: { beers },
  }
}

export default InfiniteScrollComponent
