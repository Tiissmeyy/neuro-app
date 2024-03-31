import Image from "next/image";
import styles from "./aside_sec.module.css"
import { usePathname } from "next/navigation";

const Aside_Sec = ({open_menu, selected_content}) => {
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
    console.log(selected_content)
    return (
    
        <>
            <aside className={`${styles.image_container} ${!open_menu ? "visible": "unvisible"}`}>
            {images_array.map((e,i) => {
                return (
                    <Image key={i} className={pathname === e.href ? "visible": "unvisible"} src={e.img} alt={"section image"} fill></Image>
                )
            })}
                
            
            <div className={styles.footer}>
                <div className={styles.footer_logo}>
                    <Image src={"/img/neuro_logo2.png"} alt="logo" width={20} height={20}></Image>
                </div>
                <p className={styles.footer_name}>​​ -  Suelen Amorim  -</p>
                <p className={styles.footer_adress}>Cabinet de Psychologie & Neuropsychologie  -  42, quai Charles Roissard 73000 Chambery</p>
                <p className={styles.footer_number}>07 83 24 43 02 </p>
            </div>
            </aside>
            <nav className={`${styles.image_container} ${styles.nav_container} ${!open_menu ? "unvisible": "visible"}`}>
                <a>ACCUEIL</a>
                <a>QUI-SUIS JE ?</a>
                <a>LE CABINET</a>
                <a>SUIVI PSYCHOLOGIQUE</a>
                <a>EMDR</a>
                <a>BILAN NEUROPSYCHOLOGIQUE</a>
                <a>REMÉDIATION COGNITIVE</a>
                <a>TARIFS</a>
                <a>CONTACT</a>
            </nav>
        </>
    )

}

export default Aside_Sec