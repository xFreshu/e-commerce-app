import styled from 'styled-components'
import BeerCard from './components/BeerCard/BeerCard'
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

const Home = ({ beers }: { beers: BeerProps[] }) => {
  console.log(beers)
  return (
    <Wrapper>
      <CardContainer>
        {beers.map(({ id, name, description, image_url }) => (
          <BeerCard
            key={id}
            id={id}
            name={name}
            description={description}
            image_url={image_url}
          />
        ))}
      </CardContainer>
    </Wrapper>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch('https://api.punkapi.com/v2/beers')
  const beers = await res.json()
  return { beers }
}

export default Home
