import styled from "styled-components"
import Card from "../Card"
import Comments from '../Comments';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ReplyIcon from '@mui/icons-material/Reply';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Avatar from '../../img/avatar.jpg'
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "timeago.js";

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
  const { currentUser } = useSelector(state => state.user);
  const { currentVideo } = useSelector(state => state.video);

  const dispatch = useDispatch().pathname.split('/')[2];

  const path = useLocation();

  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/api/video/find/${path}`);
        const channelRes = await axios.get(`/api/users/find/${videoRes.data.userId}`);

        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data))
      } catch(err) {
        console.warn(err, 'err');
      }
    }
    fetchData();
  }, [path, dispatch])


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
        <Title>{currentVideo.title}</Title>
        <Details>
          <Info>{currentVideo.views} views * {format(currentVideo.createdAt)}</Info>
          <Buttons>
            <Button><ThumbUpIcon/>{currentVideo.likes?.length}</Button>
            <Button><ThumbDownIcon/>Dislike</Button>
            <Button><ReplyIcon/>Share</Button>
            <Button><AddTaskIcon/>Save</Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={channel.img}/>
            <ChannelDetail>
              <ChannelName>{channel.channelname}</ChannelName>
              <ChannelCounter>{channel.subscribers} subscribers</ChannelCounter>
              <Description>{currentVideo.description}</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr/>
        <Comments />
     </Content>
      {/* <Recommendation>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
     </Recommendation> */}
    </Container>
  )
}

export default Video1