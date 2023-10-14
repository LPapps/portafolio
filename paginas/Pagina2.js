import Styles from '@/paginas/pagina2.module.css';
export default function Pagina2() {
    return(<div id="estudios" className={Styles.global}>
        <div className={Styles.ilustracion}></div>
        <div className={Styles.card}>
            <h1>CERTIFICACIONES</h1>
            <p>2022</p>
            <ul>
                <li><a href="https://www.freecodecamp.org/certification/lpapps/responsive-web-design" target='_blank'>JavaScript Algorithms and Data Structures</a></li>
                <li><a href="
https://www.freecodecamp.org/certification/lpapps/back-end-development-and-apis" target='_blank'>Back End Development and APIs</a></li>
                <li><a href="https://www.freecodecamp.org/certification/lpapps/responsive-web-design" target="_blank">Responsive Web Design</a></li>
            </ul>
            <br />
            <p>2023</p>
            <ul>
                <li><a href="https://www.freecodecamp.org/certification/patriciolencina/responsive-web-design" target="_blank">Responsive Web Design</a></li>
                <li><a href="https://www.freecodecamp.org/certification/patriciolencina/javascript-algorithms-and-data-structures" target='_blank'>JavaScript Algorithms and Data Structures</a></li>
                <li><a href="https://www.freecodecamp.org/certification/patriciolencina/front-end-development-libraries
" target='_blank'>Front End Development Libraries</a></li>
            </ul>
            <a href="https://www.freecodecamp.org" target='_blank'>Gracias <span>FreeCodeCamp</span></a>
    </div>
    </div>  )
}