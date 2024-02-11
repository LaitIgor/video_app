import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 56px);
    color: ${({theme}) => theme.text};
`

const Wrapper = styled.div`
    padding: 20px 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    background-color: ${({theme}) => theme.bgLighter};
    border: 1px solid ${({theme}) => theme.soft};
`

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 0;
`

const SubTitle = styled.h2`
    font-size: 20px;
    font-weight: 300;
    margin-top: 0; 
`

const Input = styled.input`
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
    border: 1px solid ${({theme}) => theme.soft};
    color: ${({theme}) => theme.text};
    width: 100%;
`

const Button = styled.button`
    padding: 10px 20px;
    border-radius: 3px;
    border: none;
    font-weight: 500;
    background-color: ${({theme}) => theme.soft};
    color: ${({theme}) => theme.textSoft};
`

const More = styled.div`
    display: flex;
    margin-top: 10px;
    font-size: 12px;
    color: ${({theme}) => theme.textSoft};
`

const Links = styled.div`
    margin-left: 50px;
`

const Link = styled.span`
    margin-left: 30px;
`

const SignIn = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <SubTitle>to continue to VideoTube</SubTitle>
            <Input placeholder='username'/>
            <Input type='password' placeholder='password'/>
            <Button>Sign in</Button>
            <Title>or</Title>
            <Input placeholder='username'/>
            <Input placeholder='email'/>
            <Input type='password' placeholder='password'/>
            <Button>Sign up</Button>
        </Wrapper>
        <More>
            English(USA)
            <Links>
                <Link>Help</Link>
                <Link>Privacy</Link>
                <Link>Terms</Link>
            </Links>
        </More>
    </Container>
  )
}

export default SignIn