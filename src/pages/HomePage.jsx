import Footer from "../components/Footer"
import styled from "styled-components"
import Gatinho from "../assets/gatinho.jpg"
import { mainColor, secondaryColor, ModelBorder } from "../colors/Colors"

export default function HomePage(){
    return(
        <Container>
            <Models>
                <Image src={Gatinho} alt="gatinho.png" />
                <Image src={Gatinho} alt="gatinho.png" />
                <Image src={Gatinho} alt="gatinho.png" />
                <Image src={Gatinho} alt="gatinho.png" />
                <Image src={Gatinho} alt="gatinho.png" />
                <Image src={Gatinho} alt="gatinho.png" />
            </Models>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: ${mainColor};
`

const Models = styled.div`
    width: 600px;
    height: auto;
    background-color: ${secondaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`

const Image = styled.img`
    width: 200px;
    height: 200px;
    border: 2px solid ${ModelBorder};
    border-radius: 15px;
    margin-bottom: 15px;
`