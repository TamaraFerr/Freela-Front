import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Menu(){
    return(
        <Container>
            <Link to={"/home"}>
                <Button>Tela inicial</Button>
            </Link>
            <Link to={"/gerenciar-modelos"}>
                <Button>Gerenciar Modelos</Button>
            </Link> 
            <Link to={"/adicionar-modelo"}>
                <Button>Adicionar Modelo</Button>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-sizing: border-box;
`

const Button = styled.button`
    width: 200px;
    height: 70px;
    border: 1px solid #FF8329;
    background-color: #F58E2C;
    border-radius: 8px;
    margin-bottom: 15px;
    margin-top: 15px;
    font-family: 'Mulish', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
    cursor: pointer;
    transition: all 100ms;
    &:hover{
        color: #ffffff;
        background-color: #E88025;
        border: 1px solid #FF8329;
    }
`