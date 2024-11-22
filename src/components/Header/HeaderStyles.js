import styled from "styled-components";


const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 25vh;
    width: 100vw;
    background-color: white;
`
const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-inline: 5%;
`

const Logo = styled.img`
    width: 106px;
    height: 109px;
`

export default {
    Header,
    Section,
    Logo
}