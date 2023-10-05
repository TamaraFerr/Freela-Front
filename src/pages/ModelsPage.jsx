import styled from "styled-components"
import Gatinho from "../assets/gatinho.jpg"
import { mainColor, ModelBorder, ButtonHoover } from "../colors/Colors"
import Menu from "../components/Menu"

export default function ModelsPage(){
    return(
        <Container>
            <LeftBarr>
                <Menu />
            </LeftBarr>
            <Body>
                <Title>Gerencie seus meowdelos!</Title>
                <Model>
                    <Profile>
                        <img src={Gatinho} alt="gatinho.png" />
                        <p>Blahblah</p>
                    </Profile>
                    <Available>
                        <p>Disponível?</p>
                        <input type="checkbox"/>
                    </Available>
                </Model>
                <Model>
                    <Profile>
                        <img src={Gatinho} alt="gatinho.png" />
                        <p>Blahblah</p>
                    </Profile>
                    <Available>
                        <p>Disponível?</p>
                        <input type="checkbox"/>
                    </Available>
                </Model>
                <Model>
                    <Profile>
                        <img src={Gatinho} alt="gatinho.png" />
                        <p>Blahblah</p>
                    </Profile>
                    <Available>
                        <p>Disponível?</p>
                        <input type="checkbox"/>
                    </Available>
                </Model>
                <Model>
                    <Profile>
                        <img src={Gatinho} alt="gatinho.png" />
                        <p>Blahblah</p>
                    </Profile>
                    <Available>
                        <p>Disponível?</p>
                        <input type="checkbox"/>
                    </Available>
                </Model>
                <Model>
                    <Profile>
                        <img src={Gatinho} alt="gatinho.png" />
                        <p>Blahblah</p>
                    </Profile>
                    <Available>
                        <p>Disponível?</p>
                        <input type="checkbox"/>
                    </Available>
                </Model>
                <Model>
                    <Profile>
                        <img src={Gatinho} alt="gatinho.png" />
                        <p>Blahblah</p>
                    </Profile>
                    <Available>
                        <p>Disponível?</p>
                        <input type="checkbox"/>
                    </Available>
                </Model>
                <Model>
                    <Profile>
                        <img src={Gatinho} alt="gatinho.png" />
                        <p>Blahblah</p>
                    </Profile>
                    <Available>
                        <p>Disponível?</p>
                        <input type="checkbox"/>
                    </Available>
                </Model>
                <Model>
                    <Profile>
                        <img src={Gatinho} alt="gatinho.png" />
                        <p>Blahblah</p>
                    </Profile>
                    <Available>
                        <p>Disponível?</p>
                        <input type="checkbox"/>
                    </Available>
                </Model>
                <Model>
                    <Profile>
                        <img src={Gatinho} alt="gatinho.png" />
                        <p>Blahblah</p>
                    </Profile>
                    <Available>
                        <p>Disponível?</p>
                        <input type="checkbox"/>
                    </Available>
                </Model>
                <Model>
                    <Profile>
                        <img src={Gatinho} alt="gatinho.png" />
                        <p>Blahblah</p>
                    </Profile>
                    <Available>
                        <p>Disponível?</p>
                        <input type="checkbox"/>
                    </Available>
                </Model>
            </Body>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: auto;
    background-image: url("https://img.freepik.com/free-vector/seamless-animal-pattern-background-cute-paw-print-vector-illustration_53876-156206.jpg?t=st=1696455298~exp=1696455898~hmac=70afd33597ab20643e402647d68febac2074f1866529028cdbde122102a980c4");
    display: flex;
    justify-content: space-between;
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

const Title = styled.p`
    font-family: 'Mulish', sans-serif;
    font-size: 35px;
    font-weight: 700;
    font-style: italic;
    margin-bottom: 30px;
    margin-top: 30px;
    margin-left: 30px;
    color: #000000;
`

const Model = styled.div`
    width: 500px;
    height: 200px;
    border: 2px solid ${ModelBorder};
    background-color: ${mainColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 10px;

    & p{
        font-family: 'Mulish', sans-serif;
        font-size: 35px;
        font-weight: 700;
        font-style: italic;
        margin-bottom: 30px;
        color: #E88025;
    }
`

const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    
    & img {
        width: 150px;
        height: 150px;
        border: 2px solid ${ModelBorder};
        border-radius: 8px;
    }

    & p {
        font-family: 'Mulish', sans-serif;
        font-size: 22px;
        font-weight: 700;
        margin-left: 10px;
    }
`

const Available = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 20px;

    & p{
        font-family: 'Mulish', sans-serif;
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    & input {
        cursor: pointer;
    } 

`
const LeftBarr = styled.div`
    position: fixed;
    margin-top: 150px;
    margin-left: 25px;
`