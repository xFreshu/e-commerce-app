import styled from 'styled-components'

export const NavigationBar = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  li {
    margin: 20px 40px;
    :hover {
      cursor: pointer;
    }
    :nth-child(2) {
      input {
        width: 400px;
        padding: 10px;
        outline: none;
      }
    }
  }
`
