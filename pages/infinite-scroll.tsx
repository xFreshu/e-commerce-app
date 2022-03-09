import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BeerCard from '../components/BeerCard/BeerCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'

const CardContainer = styled.ul`
  margin-top: 40px;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
interface BeerProps {
  id: number
  name: string
  description: string
  image_url: string
}

const InfiniteScrollComponent = ({ beers }: { beers: BeerProps[] }) => {
  const [keyPage, setKeyPage] = useState(2)
  const [getBeers, setBeers] = useState(beers)
  const [newBeers, setNewBeers] = useState([])
  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers?page=${keyPage}&per_page=10`)
      .then((response) => {
        console.log(response.data)
        setNewBeers(response.data)
      })
  }, [keyPage])
  const fetchData = () => {
    console.log(newBeers)
    setBeers([...getBeers, ...newBeers])
    setKeyPage(keyPage + 1)
    console.log(keyPage)
  }

  return (
    <Wrapper>
      <CardContainer>
        <InfiniteScroll
          dataLength={getBeers.length} //This is important field to render the next data
          next={fetchData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {getBeers.map(({ id, name, description, image_url }) => (
            <BeerCard
              key={id}
              id={id}
              name={name}
              description={description}
              image_url={image_url}
            />
          ))}
        </InfiniteScroll>
      </CardContainer>
    </Wrapper>
  )
}

InfiniteScrollComponent.getInitialProps = async () => {
  const res = await fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=10`)
  const beers = await res.json()
  return { beers }
}
export default InfiniteScrollComponent
