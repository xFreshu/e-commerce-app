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
//(Math.random() * 50).toFixed(2)
interface BeerData {
  cost: number
  amount: number
  id: number
  name: string
  tagline: string
}
const DUMMY_DATA: [] = []
const getTotalFromCart: string = DUMMY_DATA.map(
  (item: BeerData) => item.cost * item.amount
)
  .reduce((prev, next) => prev + next, 0)
  .toFixed(2)

const Home = () => {
  return (
    <>
      <Wrapper>
        <ShoppingCard>
          <YourItems>
            {DUMMY_DATA.map((item: BeerData) => (
              <Item key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span>{item.tagline}</span>
                </div>
                <div>
                  <span>$ {item.cost}</span>
                  <span>Amount: {item.amount}</span>
                  <ButtonContainer>
                    <StyledButton>+</StyledButton>
                    <StyledButton>-</StyledButton>
                    <StyledButton>Delete</StyledButton>
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
