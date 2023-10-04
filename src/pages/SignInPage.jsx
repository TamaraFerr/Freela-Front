import styled from "styled-components"
import Welcome from "../assets/welcome.svg"

export default function SignInPage(){
    return(
        <Container>
            <LeftBarr>
                <img src={Welcome} alt="Meowcome!"/>
                <h1>Bem-vindo ao nosso lindo site de Meowdelos! Entre e aproveite cada segundo!</h1>
            </LeftBarr>

            <RightBarr>
                <Form>
                    <Input placeholder="E-mail" type="text"/>
                    <Input placeholder="Senha" type="password"/>
                    <Button>Entrar</Button>
                </Form>
                <p>Não possui uma conta? Cadastre-se!</p>
            </RightBarr>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F0F8FF;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LeftBarr = styled.div`
    width: 500px;
    margin-left: 35px;

    & img{
        width: 500px;
        height: 200px;
    }

    & h1{
        font-family: 'Mulish', sans-serif;
        font-size: 30px;
        font-weight: 700;
        font-style: italic;
    }
`

const Form = styled.form`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 400px;
`

const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    border: 1px solid #E6E6FA;
    border-radius: 8px;
    margin-bottom: 15px;
    padding-left: 5px;
`

const Button = styled.button`
    width: 100%;
    height: 40px;
    border: 1px solid #E6E6FA;
    background-color: 	#E6E6FA;
    border-radius: 8px;
    margin-bottom: 15px;
    font-family: 'Mulish', sans-serif;
    font-weight: 500;
    font-size: 15px;
`

const RightBarr = styled.div`
    width: 500px;
    height: 400px;
    background-color:#D8BFD8;
    border-radius: 20px;
    margin-right: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & p{
        font-family: 'Mulish', sans-serif;
        font-size: 15px;
        font-weight: 500;
        text-decoration: underline;
    }
`