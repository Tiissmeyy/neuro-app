import Image from "next/image";
import styles from "./aside_sec.module.css"

const Aside_Sec = ({open_menu, selected_content}) => {
    const images_array = [
        "/img/bg_home_small.jpg",
        "/img/psycho.jpg",
        "/img/emdr.jpg",
        "/img/neuro.jpg",
        "/img/cogni.jpg"
    ]
    console.log(selected_content)
    return (
    
        <>
            <aside className={`${styles.image_container} ${!open_menu ? "visible": "unvisible"}`}>
            <Image src={images_array[selected_content]} alt="aside image" fill>
            </Image>
                
            
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