import styled from "styled-components"
import Welcome from "../assets/welcome.svg"
import { Link } from "react-router-dom"
import { mainColor, secondaryColor, Borders, Buttons, ButtonHoover } from "../colors/Colors"


export default function SignInPage(){
    return(
        <Container>
            <LeftBarr>
                <img src={Welcome} alt="Meowcome!"/>
                <h1>Bem-vindo ao nosso lindo site de Meowdelos! Entre e aproveite cada segundo!</h1>
            </LeftBarr>

            <RightBarr>
                <Form>
                    <Input placeholder="E-mail" type="email" required/>
                    <Input placeholder="Senha" type="password" required/>
                    <Button>Entrar</Button>
                </Form>
                <Link to={"/cadastro"}>
                    <p>Não possui uma conta? Cadastre-se!</p>
                </Link>
            </RightBarr>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${mainColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LeftBarr = styled.div`
    width: 500px;
    margin-left: 45px;

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
    width: 350px;
`

const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    border: 1px solid ${Borders};
    border-radius: 8px;
    margin-bottom: 15px;
    padding-left: 15px;
`

const Button = styled.button`
    width: 100%;
    height: 40px;
    border: 1px solid ${Borders};
    background-color: ${Buttons};
    border-radius: 8px;
    margin-bottom: 15px;
    font-family: 'Mulish', sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: #f6f6f6;
    cursor: pointer;
    transition: all 100ms;
    &:hover{
        color: #ffffff;
        background-color: ${ButtonHoover};
        border: 1px solid ${Borders};
    }
`

const RightBarr = styled.div`
    width: 450px;
    height: 400px;
    background-color: ${secondaryColor};
    border: 1px solid ${Borders};
    border-radius: 20px;
    margin-right: 45px;
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