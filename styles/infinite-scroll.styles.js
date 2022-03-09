import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'

export const CardContainer = styled.ul`
  margin-top: 40px;
  outline: hidden;
`


export const StyledInfiniteScroll = styled(InfiniteScroll)`
  margin-bottom: 40px;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
