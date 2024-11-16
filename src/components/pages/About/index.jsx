import loja from "../../../assets/lojastarbucks.png";
import { Button } from "../../Button";

export const About = () => {
    return (
        <section>
            <img src={loja} alt="Imagem da loja starbucks em preto e branco"/>
            <div>
                <h3>PREPARAÇÃO</h3>
                <h2>Níveis da torra</h2>
                <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
                <Button />
            </div>
        </section>
    )
}