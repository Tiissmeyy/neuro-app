"use client"

import Image from "next/image";
import styles from "./banner.module.css"
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Banner = ({handle_selection}) => {
    const router = useRouter();
    const [y_pos, set_y_pos] = useState(null)
    const banner_ref = useRef(null)

    const buttons = [
        {
            text:"SUIVI PSYCHOLOGIQUE",
            href: "/mes_services/suivi_psy"
        },
        {
            text:"EMDR",
            href: "/mes_services/emdr"
        },
        {
            text:"BILAN NEUROPSYCHOLOGIQUE",
            href: "/mes_services/bilan_neuro"
        },
        {
            text:"REMEDIATION COGNITIVE",
            href: "/mes_services/remediation"
        }
    ]

    useEffect(()=>{
        const scroll = () => {
            if (banner_ref.current) {
                const { top, height } = banner_ref.current.getBoundingClientRect();
                const isAtBottom = top + height >= window.innerHeight;
                
                if (!isAtBottom) {
                    banner_ref.current.style.position = 'fixed';
                    banner_ref.current.style.bottom = '0';
                } else {
                    banner_ref.current.style.position = '0';
                }
            }
        }
        addEventListener("scroll", scroll)
        return () => {
            removeEventListener("scroll",scroll)
        }
    }, [])

    return (
        <>
            <div ref={banner_ref} className={styles.banner}>
                {buttons.map((button,i)=>{
                    return (
                        <button key={i} 
                            value={i+1}
                            onClick={
                                (e) => {
                                handle_selection(e)
                                router.push(button.href)
                                }
                            }
                        >
                                {button.text}
                        </button>
                    )
                })}
                <Image src={"/img/banner.jpg"} width={100} height={100} alt="banner" ></Image>
            </div>
        </>
        
    )
}

export default Banner