import { useEffect, useState, memo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { format } from 'timeago.js';
import axios from "axios";
import Avatar from '../img/avatar.jpg';

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
  object-fit: cover;
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

const Card = ({ type, video }) => {
  const [channel, setChannel] = useState({})

  useEffect(() => {
    const fetchVideos = async () => {
      console.warn('FETCHING VIDEO IN CARD');
      const res = await axios.get(`/api/users/find/${video.userId}`);
      setChannel(res.data);
    }
    fetchVideos();
  }, [video.userId])

  return (
    <Link to={`/video/${video._id}`} >
      <Container type={type}>
        <Image type={type} src={video.imgUrl}/>
        <Details type={type}>
          <ChannelImage type={type} src={channel.img} />
          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>{video.views} views * {format(video.createdAt)}</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  )
}

export default Card
// export default memo(Card)