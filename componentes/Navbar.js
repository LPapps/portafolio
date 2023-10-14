import Styles from '@/componentes/navbar.module.css';

export default function Nav() {
    return(
        <div className={Styles.navExt}>
        <div className={Styles.navInt}>
        <a href='#bienvenidx'>bienvenidx</a>
        <a href='#estudios'>estudios</a>
        <a href='#contacto'>contacto</a>
    </div></div>)
}