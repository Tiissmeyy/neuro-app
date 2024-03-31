"use client"

import Image from "next/image";
import styles from "./banner.module.css"
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { satis } from "@/app/fonts";

const Banner = ({handle_selection}) => {
    const router = useRouter();
    const [y_pos, set_y_pos] = useState(null)
    const banner_ref = useRef(null)

    const buttons = [
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
                        <Link key={i}
                            link={true}
                            href={button.href}

                        >
                                <p className={satis.className}>{button.text}</p>
                        </Link>
                    )
                })}
                <Image src={"/img/banner.jpg"} width={100} height={100} alt="banner" ></Image>
            </div>
        </>
        
    )
}

export default Banner