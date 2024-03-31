"use client"

import { CSSTransition } from "react-transition-group";
import Image from "next/image";
import styles from "./aside_sec.module.css"
import { usePathname } from "next/navigation";
import Link from "next/link";
import Link_W from "../link_w/link_w";

const Aside_Sec = ({close_menu,open_menu}) => {
    const pathname = usePathname()
    const images_array = [
        {
            img:"/img/bg_home_small.jpg",
            href: "/"
        },
        {
            img: "/img/psycho.jpg",
            href:"/mes_services/suivi_psy"
        },
        {
            img:"/img/emdr.jpg",
            href: "/mes_services/emdr"
        },
        {
            img:"/img/neuro.jpg",
            href: "/mes_services/bilan_neuro"
        },
        {
            img:"/img/cogni.jpg",
            href: "/mes_services/remediation"
        }     
    ]
    const buttons = [
        {
            text:"Acceuil",
            href: "/"
        },
        {
            text:"Suivi Psychologique",
            href: "/mes_services/suivi_psy"
        },
        {
            text:"EMDR",
            href: "/mes_services/emdr"
        },
        {
            text:"Bilan Neurologique",
            href: "/mes_services/bilan_neuro"
        },
        {
            text:"Remédiation cognitive",
            href: "/mes_services/remediation"
        }
    ]
    return (
    
        <>
            <aside className={`${styles.image_container} ${!open_menu ? "visible": "unvisible"}`}>
            {images_array.map((e,i) => {
                
                return (
                    <CSSTransition
                        in={pathname === e.href} // La condition pour monter ou démonter l'image
                        timeout={500} // Doit correspondre à la durée de votre transition CSS
                        classNames="fade" // Le préfixe pour les classes de transition
                        unmountOnExit // Démonte le composant après la transition de sortie
                        mountOnEnter 
                    >
                        <Image key={i} className={`${styles.main_image} ${pathname === e.href ? "visible": "unvisible"}`} src={e.img} alt={"section image"} fill></Image>
                    </CSSTransition>
                    
                )
            })}
                
            
            <div className={styles.footer}>
                <div className={styles.footer_logo}>
                    <Image src={"/img/neuro_logo2.png"} alt="logo" width={20} height={20}></Image>
                </div>
                <p className={styles.footer_name}>​​ -  Karine Duval  -</p>
                <p className={styles.footer_adress}>Cabinet de Psychologie & Neuropsychologie  -  42, quai Jean du Jardin 69000 Paris</p>
                <p className={styles.footer_number}>09 82 37 64 51</p>
            </div>
            </aside>
            <nav className={`${styles.image_container} ${styles.nav_container} ${!open_menu ? "unvisible": "visible"}`}>
                {buttons.map((e,i)=>{
                    return (
                        <Link_W close_menu={close_menu} key={i} href={e.href} path={pathname}>
                            {e.text}
                        </Link_W>
                    )
                    
                    
                })}
            </nav>
        </>
    )

}

export default Aside_Sec