import styled from "styled-components"
import Menu from "../components/Menu"
import { mainColor, ModelBorder, Buttons, ButtonHoover, Borders } from "../colors/Colors"

export default function AddModelPage(){
    return(
        <Container>
            <LeftBarr>
                <Menu />
            </LeftBarr>
            <Body>
                <Form>
                    <p>Adicione seu Meowdelo!</p>
                    <Inputs placeholder="Nome do Meowdelo" type="text"/>
                    <Inputs placeholder="Foto" type="text"/>
                    <Inputs placeholder="Caracteríticas"  type="text"/>
                    <Inputs placeholder="Telefone para contato"  type="text"/>
                    <Inputs placeholder="Idade do meowdelo"  type="text"/>
                    <Button>Adicionar</Button>
                </Form>
            </Body>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    box-sizing: border-box;
    background-image: url("https://cdn2.vectorstock.com/i/1000x1000/92/21/cat-paw-footprint-seamless-pattern-background-vector-33969221.jpg");
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 10%;
`

const Form = styled.form`
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid ${ModelBorder};
    border-radius: 10px;
    background-color: ${mainColor};
    box-sizing: border-box;

    & p{
        font-family: 'Mulish', sans-serif;
        font-size: 25px;
        font-weight: 700;
        font-style: italic;
        margin-bottom: 30px;
        color: #E88025;
    }
`

const Inputs = styled.input`
    box-sizing: border-box;
    width: 400px;
    height: 40px;
    border: 1px solid ${Borders};
    border-radius: 8px;
    margin-bottom: 15px;
    padding-left: 15px;
`

const Button = styled.button`
    width: 400px;
    height: 40px;
    border: 1px solid ${Borders};
    background-color: ${Buttons};
    border-radius: 8px;
    margin-bottom: 15px;
    margin-top: 15px;
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

const LeftBarr = styled.div`
    position: fixed;
    margin-top: 15%;
    margin-left: 25px;
`