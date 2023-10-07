import styled from "styled-components"
import Gatinho from "../assets/gatinho.jpg"
import { ModelBorder, Buttons, ButtonHoover, Borders, secondaryColor } from "../colors/Colors"
import { Link } from "react-router-dom"


export default function ModelInfosPage(){
    return(
        <Body>
            <Container>
                <Image src={Gatinho} alt="gatinho.png" />
                <Infos>
                    <h1>blahblah</h1>
                    <h2>bluble</h2>
                </Infos>
                <Link to={"/home"}>
                    <Button>Voltar</Button>
                </Link>
            </Container>
        </Body>
    )
}

const Body = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("https://i.pinimg.com/736x/9b/fb/74/9bfb743648adf4ff0751b52b13f415cd.jpg");
`

const Container = styled.div`
    width: 500px;
    height: 500px;
    background-color: ${secondaryColor};
    border: 2px solid ${Borders};
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    box-sizing: border-box;
`

const Infos = styled.div`
    width: 300px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h1{
        font-family: 'Mulish', sans-serif;
        font-size: 25px;
        font-weight: 700;
        word-break: break-all;
    }

    & h2{
        font-family: 'Mulish', sans-serif;
        font-size: 15px;
        font-weight: 700;
        line-break: auto;
        word-break: break-all;
    }
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

const Image = styled.img`
    width: 200px;
    height: 200px;
    border: 2px solid ${ModelBorder};
    border-radius: 15px;
    margin-bottom: 20px;
`