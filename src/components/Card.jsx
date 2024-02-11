import styled from "styled-components"
import Avatar from '../img/avatar.jpg'
import { Link } from "react-router-dom"

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
  
`

const ChannelImage = styled.img`
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
  color: ${({theme}) => theme.text}
`

const Info = styled.div`
  font-size: 14px;
  color: ${({theme}) => theme.text}
`

const Card = () => {
  return (
    <Link to='/video/test' >
      <Container>
        <Image src='https://i.ytimg.com/vi/NocOBI0OCQs/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDCareXExdLcorbwtwBKLqTtqZGsQ'/>
        <Details>
          <ChannelImage src={Avatar} />
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