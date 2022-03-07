import type { NextPage } from 'next'
import styled from 'styled-components'

const Card = styled.li`
  background-color: red;
  width: 200px;
  height: 200px;
  margin: 40px;
`

interface BeerProps {
  id: number
  name: string
  description: string
}

const Home = ({ beers }: { beers: BeerProps[] }) => {
  console.log(beers)
  return (
    <div>
      <ul>
        {beers.map(({ id, name, description }) => (
          <Card key={id}>
            {id} {name} {description}
          </Card>
        ))}
      </ul>
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch('https://api.punkapi.com/v2/beers')
  const beers = await res.json()
  return { beers }
}

export default Home
