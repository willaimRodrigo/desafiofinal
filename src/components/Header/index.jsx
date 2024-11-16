import { Nav } from "../Nav";
import Styles from "./HeaderStyles.js";
import logo from "../../assets/logo2.png";

export const Header = () => {
    return (
        <Styles.Header>
            <Styles.Section>
                <Styles.Logo src={logo} alt="Logotipo da marca starbucks"/> 
                <Nav />  
            </Styles.Section>            
        </Styles.Header>
    )
}