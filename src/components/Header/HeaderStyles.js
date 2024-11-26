import styled from "styled-components";


const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 18vh;
    width: 100vw;
    background-color: white;

    
`
const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-inline: 5%;

    @media (max-width: 450px) {
        flex-direction: column;
        margin-top: 20px 0px;
    }
`

const Logo = styled.img`
    width: 106px;
    height: 109px;

    @media (max-width: 450px) {
        width: 76px;
        height: 79px;
    }
`

export default {
    Header,
    Section,
    Logo
}