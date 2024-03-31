"use client"

import Image from "next/image";
import styles from "./aside_sec.module.css"
import Link_W from "../link_w/link_w";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

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
                        <AnimatePresence mode="wait" >
            {images_array.map((e,i) => {
                
                    return (
                            <motion.div
                                key={pathname + i}
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                exit={{y:-20,opacity: 0}}
                                transition={{ease: "easeInOut", duration: 0.75}}
                            >
                                {pathname === e.href && <Image key={i} className={`${styles.main_image}`} src={e.img} alt={"section image"} fill></Image> }
                            </motion.div>
                        
                    )})}
                    
                        </AnimatePresence>                
                
            
            <div className={styles.footer}>
                <div className={styles.footer_logo}>
                    <Image src={"/img/neuro_logo2.png"} alt="logo" width={20} height={20}></Image>
                </div>
                <p className={styles.footer_name}>​​ -  Karine Duval  -</p>
                <p className={styles.footer_adress}>Cabinet de Psychologie & Neuropsychologie  -  42, quai Jean du Jardin 69000 Lyon</p>
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