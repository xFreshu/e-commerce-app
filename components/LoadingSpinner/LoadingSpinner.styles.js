import styled from 'styled-components'

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Spinner = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #000;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
