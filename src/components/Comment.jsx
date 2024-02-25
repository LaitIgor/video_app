import styled from "styled-components"
import AvatarImg from '../img/avatar.jpg';
import { useState } from "react";
import axios from "axios";

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0;
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: #999;
    object-fit: cover;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({theme}) => theme.text};
`

const Name = styled.span`
    font-size: 13px;
    font-feight: 500;
`

const Date = styled.span`
    font-size: 12px;
    font-feight: 400;
    color: ${({theme}) => theme.textSoft};
    margin-left: 5px;
`

const Text = styled.span`
    font-size: 13px;
`

const Comment = ({ comment }) => {
    console.count('Comment');
    const [channel, setChannel] = useState();

    useEffect(() => {
        const fetchComment = async () => {
            console.warn(comment.userId, 'comment.userId');
            const res = await axios.get(`/api/users/find/${comment.userId}`);
            setChannel(res.data);
        }
        fetchComment();
    }, [])

    return (
        <Container>
            <Avatar src={channel.img}/>
            <Details>
                <Name>{channel.name}<Date>1 day ago</Date></Name>
                <Text>{comment.desc}</Text>
            </Details>
        </Container>
    )
}

export default Comment