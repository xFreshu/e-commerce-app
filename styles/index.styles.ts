import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ShoppingCard = styled.div`
  margin: 40px;
  border-radius: 20px;
  display: flex;
  box-shadow: rgba(50, 50, 93, 0.25) 0 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  width: 900px;
  padding: 20px;
  max-height: 80vh;
  min-height: 40vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`
export const YourItems = styled.ul`
  width: 65%;
`

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: solid 2px black;
  :last-child {
    border: none;
    margin-bottom: 10px;
  }
  div {
    :nth-child(1) {
      display: flex;
      flex-direction: column;
      span {
        :first-child {
          font-weight: 700;
          letter-spacing: 1px;
        }
        :last-child {
          margin-top: 10px;
          font-size: 0.8rem;
          letter-spacing: 2px;
        }
      }
    }
    :nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`
export const ButtonContainer = styled.div``

export const StyledButton = styled.button`
  background-color: transparent;
  border: solid 1px black;
  height: 20px;
  width: 20px;
  margin-right: 20px;
  border-radius: 5px;
  :last-child {
    margin-right: 0;
    width: 50px;
  }
`

export const ItemsOverviewContainer = styled.div`
  width: 35%;
  position: sticky;
  margin-left: 3%;
  top: 0;
  :before {
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    content: '';
    display: inline-block;
    width: 4px;
    height: 80%;
    background-color: black;
    border-radius: 20px;
  }
`
export const ItemsOverview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-left: 10px;
`
export const PriceSummary = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 20px;
`
export const TitleSummary = styled.span`
  font-weight: 700;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
`

export const ActionButton = styled.button`
  border: solid 1px black;
  background-color: transparent;
  padding: 10px;
  border-radius: 10px;
  margin: 40px 20px 20px 20px;
  transition: 0.7s;
  :last-child {
    margin-top: 0;
  }
  :hover {
    background-color: #000;
    color: #fff;
  }
`
