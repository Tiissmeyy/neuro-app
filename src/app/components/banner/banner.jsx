import Image from "next/image";
import styles from "./banner.module.css"
import { useEffect } from "react";

const Banner = ({handle_selection}) => {
    const buttons = [
        "SUIVI PSYCHOLOGIQUE",
        "EMDR",
        "BILAN NEUROPSYCHOLOGIQUE",
        "REMEDIATION COGNITIVE"
    ]

    useEffect(()=>{
        const scroll = () => {
            console.log("ca scroll")
        }
        addEventListener("scroll", scroll)
        return () => {
            removeEventListener("scroll",scroll)
        }
    }, [])

    return (
        <>
            <div className={styles.banner}>
                {buttons.map((e,i)=>{
                    return (
                        <button key={i} 
                            value={i+1}
                            onClick={(e) =>handle_selection(e)}>
                                {e}
                        </button>
                    )
                })}
                <Image src={"/img/banner.jpg"} width={100} height={100} alt="banner" ></Image>
            </div>
        </>
        
    )
}

export default Banner