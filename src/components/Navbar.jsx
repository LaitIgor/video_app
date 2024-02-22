import React, { useState } from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import VideocamIcon from '@mui/icons-material/Videocam';
import Upload from './Upload';


const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: ${({theme}) => theme.bgLighter};
    height: 56px;
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding: 0px 20px;
`

const Search = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    color: ${({theme}) => theme.text};
    
`
// color: ${({theme}) => theme.text};

const Input = styled.input`
    border: none;
    outline: transparent;
    background-color: transparent;
    color: ${({theme}) => theme.text};
`

const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
`

const User = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    color: ${({theme}) => theme.text};
`

const Avatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #999;
`

const Navbar = () => {
    const { currentUser } = useSelector(state => state.user)
    const [open, setOpen] = useState(false);

  return (
    <>
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder='Search' />
                    <SearchIcon/>
                </Search>
                { currentUser ? (
                    <User>
                        <VideocamIcon style={{cursor: 'pointer'}} onClick={() => setOpen(true)}/>
                        <Avatar src={currentUser.img}/>
                        {currentUser.name}
                    </User>
                ) : <Link to='signing'>
                    <Button><AccountCircleIcon/>SIGN IN</Button>
                </Link>}
            </Wrapper>
        </Container>
        {open && <Upload setOpen={setOpen} />}
    </>
  )
}

export default Navbar