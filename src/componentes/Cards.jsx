import React from "react";
import styles from "./Cards.module.css"
import academia4 from "./imagem/academia4.png"
import academia5 from "./imagem/academia5.png"
import academia6 from "./imagem/academia6.png"


function Cards() {
    return (
        <div className={styles.papai}>
          
                <p className={styles.titulo}>Experiência <span> Iron Shape</span> </p>
                <h3 className={styles.texto}>A Iron Shape garante a melhor experiência no mercado com atividades variadas, ambientes clímatizados e iluminados, com aparelhos de última geração para o maior conforto dos nossos clientes.</h3>
            <div className={styles.Pai}>
                <div className={styles.cards}>
                    <div class="w3-card-4">
                        <img className={styles.imgAcademia} src={academia4} alt="Alps" />
                        <div className="w3-container w3-center">
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className={styles.cards}>
                    <div class="w3-card-4">
                        <img  className={styles.imgAcademia} src={academia5} alt="Alps" />
                        <div className="w3-container w3-center">
                            <p></p>
                        </div>
                    </div>
                </div> <div className={styles.cards}>
                    <div className="w3-card-4">
                        <img  className={styles.imgAcademia} src={academia6} alt="Alps" />
                        <div className="w3-container w3-center">
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
export default Cards
