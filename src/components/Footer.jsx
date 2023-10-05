import styled from "styled-components"
import { Buttons, ButtonHoover, mainColor, Borders } from "../colors/Colors"

export default function Footer(){
    return(
        <Container>
            <Button>Tela inicial</Button>
            <Button>Gerenciar Modelos</Button>
            <Button>Adicionar Modelo</Button>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: ${mainColor};
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-evenly;
    box-sizing: border-box;
`

const Button = styled.button`
    width: 200px;
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