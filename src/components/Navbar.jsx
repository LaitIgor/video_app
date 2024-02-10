import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';


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

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Search>
                <Input placeholder='Search' />
                <SearchIcon/>
            </Search>
            <Button><AccountCircleIcon/>SIGN IN</Button>
        </Wrapper>
    </Container>
  )
}

export default Navbar