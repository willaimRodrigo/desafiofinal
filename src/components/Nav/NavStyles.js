import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    padding: 5%;

    @media (max-width: 450px) {
        padding: 0;
    }
`

const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 25vw;   

    @media (max-width: 850px) {
        width: 35vw;
    }

    @media (max-width: 450px) {
        width: 80vw;
    }
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

        @media (max-width: 450px) {
            font-size: 1.1rem;
        }
    }
`

export default {
    Nav, 
    Ul, 
    Li
}