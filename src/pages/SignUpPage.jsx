import styled from "styled-components"
import Entrar from "../assets/Entre.svg"

export default function SignUpPage(){
    return(
        <Container>
            <LeftBarr>
                <img src={Entrar} alt="cadastro"/>
                <h1>Cadastre-se e venha aproveitar o melhor site de modelos felinos do mundo!</h1>
            </LeftBarr>

            <RightBarr>
                <Form>
                    <Input placeholder="Nome"/>
                    <Input placeholder="E-mail"/>
                    <Input placeholder="Senha"/>
                    <Input placeholder="CPF"/>
                    <Input placeholder="Telefone"/>
                    <Button>Cadastrar</Button>
                </Form>
                <p>Já possui uma conta? Faça o login!</p>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & img{
        width: 400px;
        height: 300px;
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
    height: 500px;
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