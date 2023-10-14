import Styles from '@/paginas/pagina1.module.css';

export default function Pagina1() {
    return(
        <div id="bienvenidx" className={Styles.global}>
            <div className={Styles.ilustracion}></div>
            <div className={Styles.ilustracionDos}></div>
            <div className={Styles.br}>
                <div className={Styles.efecto}></div>
            </div>
            <div className={Styles.card}>
            <h1>- Hola -</h1>
            <p>mi nombre es</p>
            <h2>Patricio Lencina</h2>
            <p>y soy</p>
            <h1>WEB <span>DEVELOPER</span></h1>
            </div>
            
        </div>
    )
}