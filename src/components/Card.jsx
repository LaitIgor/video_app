import styled from "styled-components"
import Avatar from '../img/avatar.jpg'
import { Link } from "react-router-dom"

const Container = styled.div`
  width: ${(props) => props.type !== 'sm' && '360px'};
  margin-bottom: ${(props) => props.type === 'sm' ? '10px' : '45px'};
  cursor: pointer;
  display: ${(props) => props.type === 'sm' && 'flex'};
  gap: 10px;
`

const Image = styled.img`
  width: 100%;
  height: ${(props) => props.type === 'sm' ? '120px' : '202px'};
  background-color: #999;
  flex: 1;
`

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== 'sm' && '16px'};
  gap: 12px;
  flex: 1;
  
`

const ChannelImage = styled.img`
  display: ${(props) => props.type === 'sm' && 'none'};
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  object-fit: cover;
`

const Texts = styled.div`
`

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({theme}) => theme.text}
`

const ChannelName = styled.h2`
  font-size: 14px;
  margin: 9px 0;
  color: ${({theme}) => theme.textSoft}
`

const Info = styled.div`
  font-size: 14px;
  color: ${({theme}) => theme.textSoft}
`

const Card = ({ type }) => {
  return (
    <Link to='/video/test' >
      <Container type={type}>
        <Image type={type} src='https://i.ytimg.com/vi/NocOBI0OCQs/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDCareXExdLcorbwtwBKLqTtqZGsQ'/>
        <Details type={type}>
          <ChannelImage type={type} src={Avatar} />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Light Enlightening</ChannelName>
            <Info>999,888 views * 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  )
}

export default Card