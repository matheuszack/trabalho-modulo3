import { Link } from "react-router-dom"
import styles from "./CardsPlanos.module.css"
import imagem1 from "./imagem/1.png"
import imagem2 from "./imagem/2.png"
import imagem3 from "./imagem/3.png"


function CardsPlanos() {
    return (
        <div>
            <p className={styles.tituloPlanos}> Nossos Planos!</p>
            <h3 className={styles.textoPlanos}>O melhor plano para sua melhor experiência.</h3>

            <div className={styles.containerCardsPlanos}>
                
                <div className={styles.cardsPlanos}>

                    <img src={imagem1} className={styles.imagemCard} />
                    <div className={styles.containerTextosPlanos}>
                        <p className={styles.price}>R$ 149,90</p>
                        <p className={styles.atividadesPlanos}>Musculação || Cross Fit || Jump || <br />Fit Dance</p><br />
                    </div>
                    <Link to={`/cadastro`}>Inscreva-se</Link>
                </div>


                <div className={styles.cardsPlanos}>

                    <img src={imagem2} className={styles.imagemCard} />
                    <div className={styles.containerTextosPlanos}> 
                        <p className={styles.price}>R$ 169,90</p>
                        <p className={styles.atividadesPlanos}>Musculação || Cross Fit || Fit Dance || Jui-jitsu || Jump</p><br />
                    </div>
                    <Link to={`/cadastro`}>Inscreva-se</Link>
                </div>

                <div className={styles.cardsPlanos}>
                    <img src={imagem3} className={styles.imagemCard} />
                    <div className={styles.containerTextosPlanos}>
                        <p className={styles.price}>R$ 199,90</p>
                        <p className={styles.atividadesPlanos}>Musculação || Cross Fit || Fit Dance || Jui-jitsu || Jump || Natação || Futebol de Areia || Fut-Volei</p>
                    </div>
                    <Link to={`/cadastro`}>Inscreva-se</Link>
                </div>

            </div>
        </div>



    )
}

export default CardsPlanos
