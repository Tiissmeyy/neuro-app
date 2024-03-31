"use client"

import { useEffect, useRef, useState } from "react";
import styles from "./button.module.css"
import Image from "next/image";
import logo from "@/app/assets/neuro_logo3.png"
import Link from "next/link";

const Button = ({children, actions, color, size, border, link, href="/"}) => {
    const [hover, set_hover] = useState(false)
    const [container_width, set_container_width] = useState(150)
    const container_ref = useRef(null)

    useEffect(()=> {
        if(container_ref && container_ref.current){
            set_container_width(container_ref.current.offsetWidth)
            addEventListener("resize", ()=> set_container_width(container_ref.current.offsetWidth))
            return ()=> {
                removeEventListener("resize", ()=> set_container_width(container_ref.current.offsetWidth))
            }
        }
    },[container_ref])

    let params = {
        bg: "",
        text: "",
        border: "",
        radius: "",
        font_size: "",
        padding: ""
    };

    switch(color){
        default: {
            params.bg = "var(--main-color)";
            params.text = "var(--white)"
        }
    }

    switch(size){
        default: {
            params.radius = "25px"
            params.font_size = "0.88rem"
            params.padding = "10px"
            params.border = border ? "2px solid blue" : "none"
        }
    }

    const final_style = {
        backgroundColor: params.bg,
        color: params.text,
        border: params.border,
        padding: params.padding,
        cursor: "pointer",
        fontSize: params.font_size,
        borderRadius: params.radius,
        width: hover ? container_width+80 : container_width+30
    }

    return (
        <div ref={container_ref} className={styles.button_container}>
            <Image className={`${styles.img} ${styles.first_img} ${hover ? "visible": "unvisible"}`} src={logo} width={15} height={15} alt="logo de bouton"></Image>
            {link ? <Link on
                className={styles.button} 
                style={final_style} 
                href={href}
                onMouseEnter={()=> set_hover(true)}
                onMouseLeave={()=> set_hover(false)}
            >
                
                {children}
            </Link> : <button on
                className={styles.button} 
                style={final_style} 
                onClick={()=>{
                    actions.forEach(e => e())
                }}
                onMouseEnter={()=> set_hover(true)}
                onMouseLeave={()=> set_hover(false)}
            >
                
                {children}
            </button>}
            <Image className={`${styles.img} ${styles.second_img}  ${hover ? "visible": "unvisible"}`} src={logo} width={15} height={15} alt="logo de bouton"></Image>
        </div>
    )
}

export default Button