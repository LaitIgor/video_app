import styled from "styled-components"
import Comment from './Comment';
import AvatarImg from '../img/avatar.jpg'
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Container = styled.div`

`

const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: #999;
    object-fit: cover;
`

const Input = styled.input`
    width: 100%;
    border: none;
    putline: none;
    padding: 5px;
    border-bottom: 1px solid ${({theme}) => theme.soft};
    color: ${({theme}) => theme.text};
    background-color: transparent;
`

const Comments = ({ videoId }) => {
    const { currentUser } = useSelector(state => state.user)
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await axios.get(`/api/comments/${videoId}`);
                setComments(res.data);
            } catch(err) {
                console.warn(err, 'error');
            }
        }
        fetchComments();
    }, [videoId])


  return (
    <Container>
        <NewComment>
            <Avatar src={currentUser.img} />
            <Input placeholder='Add a comment...' />
        </NewComment>
        {comments.map(comment => {
            return  <Comment key={comment._id} comment={comment} />
        })}
    </Container>
  )
}

export default Comments