"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import data from "@/app/data/main_cards_container.json"
import styles from "./styles.module.css"
import { satis } from "@/app/fonts"

const Cards_Container = () => {

    return (
        <div className={styles.cards_container}>
            {data.list ? data.list.map((e,i)=>{
                return (
                    <div key={i} className={styles.card}>
                        <div className={styles.logo}>
                            <Image  src={e.src} width={180} height={180} alt={`logo de la section ${e.title}`} />
                        </div>
                        
                        <h3 className={styles.title}>{e.title}</h3>
                        <ul>
                            {e.carac.map((e,i)=>{
                                return (
                                    <p className={satis.className} key={i}>{e}</p>
                                )
                            })}
                        </ul>
                    </div>
                )
            }):""}    
        </div>
    )
}

export default Cards_Container