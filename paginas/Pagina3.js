import Styles from '@/paginas/pagina3.module.css';
import { BsGithub, BsLinkedin, BsMailbox2, BsInstagram } from "react-icons/bs";
export default function Pagina3() {
    return(<div id="contacto" className={Styles.global}>
        <div className={Styles.ilustracion}></div>
        <div className={Styles.card}>
            <h1>EXPERIENCIA</h1>
            <p>Continúo instruyéndome para ser desarrollador web fullstack.</p>
            <p>Busco empleo remoto en español.</p>
            <span>
                <a href="https://github.com/LPapps" target='_blank'><BsGithub /></a>
                <a href="https://www.linkedin.com/in/patricio-lencina-07a15b241/" target='_blank'><BsLinkedin /></a>
                <a href="mailto:patolencina51@gmail.com" target='_blank'><BsMailbox2 /></a>
                <a href="https://www.instagram.com/patricio.lencina" target='_blank'><BsInstagram /></a>
                
            </span>
        </div>
    </div>)
}