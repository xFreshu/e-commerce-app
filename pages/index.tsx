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
const DUMMY_DATA = [
  {
    id: 1,
    name: 'test1',
    tagline: 'testTagline',
    cost: 2,
    amount: 1,
  },
  {
    id: 2,
    name: 'test2',
    tagline: 'testTagline2',
    cost: 3,
    amount: 2,
  },
]
const getTotalFromCart = DUMMY_DATA.map((item) => item.cost * item.amount)
  .reduce((prev, next) => prev + next)
  .toFixed(2)

const Home = () => {
  return (
    <>
      <Wrapper>
        <ShoppingCard>
          <YourItems>
            {DUMMY_DATA.map((item) => (
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
                    <StyledButton isBigger>Delete</StyledButton>
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
                <span>$ {getTotalFromCart}</span>
              </PriceSummary>
              <PriceSummary>
                <span>TAX (20%)</span>
                <span>$ {(getTotalFromCart * 0.2).toFixed(2)}</span>
              </PriceSummary>
              <PriceSummary>
                <span>GRAND TOTAL</span>
                <span>$ {(getTotalFromCart * 1.2).toFixed(2)}</span>
              </PriceSummary>
              <ActionButton isFirst>Pay</ActionButton>
              <ActionButton>Delete cart</ActionButton>
            </ItemsOverview>
          </ItemsOverviewContainer>
        </ShoppingCard>
      </Wrapper>
    </>
  )
}

export default Home
