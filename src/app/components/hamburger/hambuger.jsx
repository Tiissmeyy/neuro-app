"use client"

import { useState } from "react"
import styles from "./styles.module.css"

const Hamburger = ({open}) => {

    return (
        <svg className={styles.svg} width="30px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={`M4 19L20 ${!open ? 19 : 7}`} stroke="#bfbbb8" strokeWidth="2" />
            <path d="M4 13L20 13" style={open ? {opacity: "0"}: {opacity: "1"}} stroke="#bfbbb8" strokeWidth="2"/>
            <path d={`M4 7L20 ${!open ? 7 : 19}`} stroke="#bfbbb8" strokeWidth="2" />
        </svg>
    )
}

export default Hamburger