import styled from 'styled-components'

export const StyledDescription = styled.p`
  padding: 0 20px;
  text-align: justify;
  margin: 30px 0;
`

export const ImageModal = styled.img`
  width: 100px;
  margin: 20px auto;
`

export const AddCartButton = styled.button`
  background-color: #000;
  width: 120px;
  margin: 0 auto;
  color: #fff;
  padding: 7px 12px;
  border: solid 1px #000;
  border-radius: 10px;
  transition: 0.7s;
  font-weight: 700;
  :hover {
    cursor: pointer;
    background-color: #fff;
    color: #000;
  }
`

export const StyledModalTitle = styled.span`
  font-weight: 700;
  text-align: center;
  margin: 20px 0;
`
export const StyledTagline = styled.span`
  text-align: center;
  letter-spacing: 1px;
`
export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`

export const StyledModal = styled.div`
  background: white;
  width: 500px;
  min-height: 200px;
  border-radius: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
`
export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`
