import styled from "styled-components"
import Card from "../Card"
import Comments from '../Comments';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ReplyIcon from '@mui/icons-material/Reply';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Avatar from '../../img/avatar.jpg'

const Container = styled.div`
  display: flex;
  gap: 24px;
`

const Content = styled.div`
  flex: 5;
`

const VideoWrapper = styled.div`
  flex: 5;
`

const Title = styled.h1`
  font-size: 18px;
  fownt-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({theme}) => theme.text}
`

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Info = styled.span`

  color: ${({theme}) => theme.testSoft}
`

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({theme}) => theme.text}
`

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({theme}) => theme.soft}
`

const Recommendation = styled.div`
  flex: 2;
`

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`

const Image = styled.img`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: #999;
  object-fit: cover;

`

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.text}
`

const ChannelName = styled.span`
  font-weight: 500;
`

const ChannelCounter = styled.span`
  margin-top: 5px;
  color: ${({theme}) => theme.textSoft};
  font-size: 12px;

`

const Description = styled.p`
  font-size: 14px;

`

const Subscribe = styled.button`
  height: max-content;
  padding: 10px 20px;
  font-weight: 500;
  color: white;
  background-color: #cc1a00;
  border: none;
  border-radius: 3px;

`

const Video1 = () => {
  return (
    <Container>
     <Content>
        <VideoWrapper>
          <iframe 
          width="853" 
          height="480" 
          src="https://www.youtube.com/embed/yIaXoop8gl4" 
          title="React Video Sharing App UI Design | Youtube UI Clone with React" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
          </iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>1,125,355 views * Feb 02, 2024</Info>
          <Buttons>
            <Button><ThumbUpIcon/>113</Button>
            <Button><ThumbDownIcon/>Dislike</Button>
            <Button><ReplyIcon/>Share</Button>
            <Button><AddTaskIcon/>Save</Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={Avatar}/>
            <ChannelDetail>
              <ChannelName>Light Enlightening</ChannelName>
              <ChannelCounter>150K subscribers</ChannelCounter>
              <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloribus eum aspernatur nulla nostrum ea natus obcaecati. Porro, commodi libero?</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr/>
        <Comments />
     </Content>
     <Content>recommendation</Content>
    </Container>
  )
}

export default Video1