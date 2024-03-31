"use client"

import { useState } from "react"
import styles from "./link_w.module.css"
import Link from "next/link"

const Link_W = ({children, close_menu,  href, path}) => {
    const [hover, set_hover] = useState(0)
    return (
        <div    className={styles.links_container}
                onClick={()=>close_menu()}
                onMouseEnter={()=>set_hover(true)}
                onMouseLeave={()=>set_hover(false)}>
            <Link  href={href} 
            >
                {children}
                <div className={styles.links_underscore} style={{width: path === href ? "100%": hover ? "100%": "0%"}}></div>
            </Link>
            
        </div>
    )
}

export default Link_W