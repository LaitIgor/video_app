import styled from "styled-components"
import Comment from './Comment';
import AvatarImg from '../img/avatar.jpg'

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

const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src={AvatarImg} />
            <Input placeholder='Add a comment...' />
        </NewComment>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </Container>
  )
}

export default Comments