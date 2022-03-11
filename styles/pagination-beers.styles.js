import styled from 'styled-components'
export const Wrapper = styled.div`
  display: flex;
`
export const Container = styled.ul`
  width: 90%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-right: auto;
`
export const ChangePageButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%;
  transition: 0.7s;
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: 2px;
  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
  }
  :first-child {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  :last-child {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
`
