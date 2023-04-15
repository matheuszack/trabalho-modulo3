import Iframe from 'react-iframe';
import styles from './Filiais.module.css';
import backgound from './imagem/logo.jpg';

//Instalar Iframe -> npm i react-iframe


function Filiais(){
    return(
     <div> <p className={styles.titulo}>Encontre uma Filial <span> Iron Shape</span> perto de você!</p> <br />
        <div className={styles.container}>   
                <div className={styles.card}>
                    <div className={styles.card_header}>
                    <img src={backgound} className={styles.card_img} />
                    </div>
                    <div className={styles.card_body}>
                    <h3 className={styles.card_local}>Parking Shopping Campo Grande</h3>
                    <p className={styles.card_texto}>
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.6025487907905!2d-43.57896034846266!3d-22.928026125876016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be43c1510be23%3A0xbab42fc3859bfdbf!2sPark%20Shopping%20Campo%20Grande!5e0!3m2!1spt-BR!2sbr!4v1670806559933!5m2!1spt-BR!2sbr" width="250" height="200" style="border:0;"></Iframe>
                    </p>
                    </div>
                    <div className={styles.card_footer}>
                    <a href="https://goo.gl/maps/q5UKBtZRbz7b5XsMA">Ver Mais</a>
                    </div>    
                </div>
                
                <div className={styles.card}>
                    <div className={styles.card_header}>
                    <img src={backgound}className={styles.card_img} />
                    </div>
                    <div className={styles.card_body}>
                    <h3 className={styles.card_local}>Calçadão Campo Grande</h3>
                    <p className={styles.card_texto}>
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2465626460116!2d-43.564074406476635!3d-22.904274842962792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be1b9c465a259%3A0x9552391c95e66d75!2sCal%C3%A7ad%C3%A3o%20De%20Campo%20Grande!5e0!3m2!1spt-BR!2sbr!4v1670807761667!5m2!1spt-BR!2sbr" width="250" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
                    </p>
                    </div>
                    <div className={styles.card_footer}>
                    <a href="https://goo.gl/maps/KyW5dEHMwbUsHvG19">Ver Mais</a>
                    </div>    
                </div>

                <div className={styles.card}>
                    <div className={styles.card_header}>
                    <img src={backgound}className={styles.card_img} />
                    </div>
                    <div className={styles.card_body}>
                    <h3 className={styles.card_local}>Guiomar Novaes</h3>
                    <p className={styles.card_texto}>
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1262997817744!2d-43.48762584844821!3d-23.01913442564753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bc2a9c71f0ddf%3A0x60356659ab3e9dc0!2sAv.%20das%20Am%C3%A9ricas%2C%2017701%20-%20Recreio%20dos%20Bandeirantes%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022790-550!5e0!3m2!1spt-BR!2sbr!4v1670807923227!5m2!1spt-BR!2sbr" width="250" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
                    </p>
                    </div>
                    <div className={styles.card_footer}>
                    <a href="https://goo.gl/maps/9CquGXrHwKsMerGi9">Ver Mais</a>
                    </div>    
                </div>

                <div className={styles.card}>
                    <div className={styles.card_header}>
                    <img src={backgound}className={styles.card_img} />
                    </div>
                    <div className={styles.card_body}>
                    <h3 className={styles.card_local}>Bangu Shopping</h3>
                    <p className={styles.card_texto}>
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.939619785205!2d-43.4691671882515!3d-22.878688779188444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdfecf55dd08b%3A0xa4656ae23203959b!2sR.%20Fonseca%2C%20240%20-%20Bangu%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2021820-005!5e0!3m2!1spt-BR!2sbr!4v1670808021143!5m2!1spt-BR!2sbr" width="250" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
                    </p>
                    </div>
                    <div className={styles.card_footer}>
                    <a href="https://goo.gl/maps/LKUNfkZb5gToWbDZ6">Ver Mais</a>
                    </div>    
                </div>
        </div>
    </div>
         )
}

export default Filiais