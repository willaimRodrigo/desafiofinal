import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    padding: 5%;
`

const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 25vw;   
`

const Li = styled.li`
    a {
        color: #1E3932;
        font-weight: 400;
        font-size: 24px;
        line-height: 36px;

        &:hover{
            font-size: 26px;
            font-weight: 600;
            color: #1E3950;
        }
    }
`

export default {
    Nav, 
    Ul, 
    Li
}