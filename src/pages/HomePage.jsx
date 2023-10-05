import Menu from "../components/Menu"
import styled from "styled-components"
import Gatinho from "../assets/gatinho.jpg"
import { secondaryColor, ModelBorder } from "../colors/Colors"
import { Link } from "react-router-dom"

export default function HomePage(){
    return(
        <Container>
            <LeftBarr>
                <Menu />
            </LeftBarr>
            <Models>
                <h1>Modelos Disponíveis</h1>
                <Link to={"/modelo-info"}>
                    <Image src={Gatinho} alt="gatinho.png"/>
                </Link>
                <Link to={"/modelo-info"}>
                    <Image src={Gatinho} alt="gatinho.png"/>
                </Link>
                <Link to={"/modelo-info"}>
                    <Image src={Gatinho} alt="gatinho.png"/>
                </Link>
                <Link to={"/modelo-info"}>
                    <Image src={Gatinho} alt="gatinho.png"/>
                </Link>
                <Link to={"/modelo-info"}>
                    <Image src={Gatinho} alt="gatinho.png"/>
                </Link>
                <Link to={"/modelo-info"}>
                    <Image src={Gatinho} alt="gatinho.png"/>
                </Link>
            </Models>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: auto;
    background-image: url("https://www.sozai-library.com/wp-content/uploads/2015/08/5571.jpg");
`

const Models = styled.div`
    width: 600px;
    height: auto;
    background-color: ${secondaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 40px;
    padding-bottom: 40px;
    border-radius: 50px;

    & h1{
        font-family: 'Mulish', sans-serif;
        font-size: 35px;
        font-weight: 700;
        font-style: italic;
        margin-bottom: 30px;
        color: #E88025;
    }
`

const Image = styled.img`
    width: 250px;
    height: 250px;
    border: 2px solid ${ModelBorder};
    border-radius: 15px;
    margin-bottom: 20px;
`

const LeftBarr = styled.div`
    position: fixed;
    margin-top: 150px;
    margin-left: 25px;
`