import styled from "styled-components"
import Entrar from "../assets/Entre.svg"
import { Link } from "react-router-dom"

export default function SignUpPage(){
    return(
        <Container>
            <LeftBarr>
                <img src={Entrar} alt="cadastro"/>
                <h1>Cadastre-se e venha aproveitar o melhor site de modelos felinos do mundo!</h1>
            </LeftBarr>

            <RightBarr>
                <Form>
                    <Input placeholder="Nome" type="text" required/>
                    <Input placeholder="E-mail" type="email" required/>
                    <Input placeholder="Senha" type="password" required/>
                    <Input placeholder="CPF" type="text" required/>
                    <Input placeholder="Telefone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                    <Button>Cadastrar</Button>
                </Form>
                <Link to={"/"}>
                    <p>Já possui uma conta? Faça o login!</p>
                </Link>
            </RightBarr>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FAFAD2;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LeftBarr = styled.div`
    width: 600px;
    margin-left: 35px;

    & img{
        width: 600px;
        height: 400px;
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
    border: 1px solid #E6E6FA;
    border-radius: 8px;
    margin-bottom: 15px;
    padding-left: 5px;
`

const Button = styled.button`
    width: 100%;
    height: 40px;
    border: 1px solid #F0E68C;
    background-color: #FFC869;
    border-radius: 8px;
    margin-bottom: 15px;
    font-family: 'Mulish', sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: #f6f6f6;
    cursor: pointer;
    transition: all 100ms;
    &:hover{
        color: #f6f6f6;
        background-color: #FFC547;
        border: 1px solid #FFC869;
    }
`

const RightBarr = styled.div`
    width: 450px;
    height: 500px;
    background-color:	#FFE4B5;
    border: 1px solid #F0E68C;
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