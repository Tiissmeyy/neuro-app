"use client"

import Image from "next/image";
import img from "./assets/neuro_logo.png"
import styles from "./page.module.css"
import { CSSTransition } from "react-transition-group";

const Loader = () => {
    return (
        <div className="loader_container">
            <CSSTransition>
                <Image src={img} alt="Logo du loader du site" width={160} height={160} />
            </CSSTransition>
        </div>
    )
}

export default Loader