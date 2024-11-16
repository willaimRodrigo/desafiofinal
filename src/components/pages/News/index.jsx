import grao from "../../../assets/graocafe.png";
import { Button } from "../../Button";

export const News = () => {
    return (
        <section>
            <img src={grao} alt="Grão de café"/>
            <div>
                <h3>PREPARAÇÃO</h3>
                <h2>Níveis da torra</h2>
                <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
                <Button />
            </div>
        </section>
    )
}