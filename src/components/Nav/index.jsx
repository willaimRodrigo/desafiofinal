import { Link } from "react-router-dom";

import Styles from "./NavStyles.js";

export const Nav = () => {
    return (
        <Styles.Nav>
            <Styles.Ul>
                <Styles.Li>
                    <Link to="/">Home</Link>
                </Styles.Li>
                <Styles.Li>
                    <Link to="/News">Novidades</Link>
                </Styles.Li>
                <Styles.Li>
                    <Link to="About">Sobre</Link>
                </Styles.Li>
            </Styles.Ul>
        </Styles.Nav>
    )
}