import {
  Item,
  ItemsOverview,
  ItemsOverviewContainer,
  ButtonContainer,
  StyledButton,
  PriceSummary,
  TitleSummary,
  YourItems,
  ActionButton,
  Wrapper,
  ShoppingCard,
} from '../styles/index.styles'
import { useEffect } from 'react'
//(Math.random() * 50).toFixed(2)
interface BeerData {
  cost: number
  amount: number
  id: number
  name: string
  tagline: string
}

const Home = ({ cartArray, unique, setCartArray, deleteBeerFromCart }: any) => {
  const getTotalFromCart: string = cartArray
    .map((item: BeerData) => item.cost * item.amount)
    .reduce((prev: number, next: number) => prev + next, 0)
    .toFixed(2)

  const addAmount = (id: any, action?: string) => {
    setCartArray(
      unique.map((item: any) => {
        if (item.id === id) {
          if (action === 'add') {
            item.amount += 1
            console.log('test')
          } else {
            item.amount -= 1
          }
        }
        return item
      })
    )
  }

  return (
    <>
      <Wrapper>
        <ShoppingCard>
          <YourItems>
            {unique.map((item: BeerData) => (
              <Item key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span>{item.tagline}</span>
                </div>
                <div>
                  <span>$ {item.cost}</span>
                  <span>Amount: {item.amount}</span>
                  <ButtonContainer>
                    <StyledButton onClick={() => addAmount(item.id, 'add')}>
                      +
                    </StyledButton>
                    {item.amount !== 0 ? (
                      <StyledButton onClick={() => addAmount(item.id)}>
                        -
                      </StyledButton>
                    ) : (
                      <StyledButton>-</StyledButton>
                    )}
                    <StyledButton onClick={() => deleteBeerFromCart(item.id)}>
                      Delete
                    </StyledButton>
                  </ButtonContainer>
                </div>
              </Item>
            ))}
          </YourItems>
          <ItemsOverviewContainer>
            <ItemsOverview>
              <TitleSummary>Your summary</TitleSummary>
              <PriceSummary>
                <span>TOTAL</span>
                <span>$ {+getTotalFromCart || 0}</span>
              </PriceSummary>
              <PriceSummary>
                <span>TAX (20%)</span>
                <span>$ {(+getTotalFromCart * 0.2).toFixed(2) || 0}</span>
              </PriceSummary>
              <PriceSummary>
                <span>GRAND TOTAL</span>
                <span>$ {(+getTotalFromCart * 1.2).toFixed(2) || 0}</span>
              </PriceSummary>
              <ActionButton>Pay</ActionButton>
              <ActionButton>Delete cart</ActionButton>
            </ItemsOverview>
          </ItemsOverviewContainer>
        </ShoppingCard>
      </Wrapper>
    </>
  )
}

export default Home
