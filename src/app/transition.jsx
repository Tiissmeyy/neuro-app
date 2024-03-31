"use client"

import { motion } from "framer-motion";

const Transition_Handler = ({children}) => {
    return (
        <motion.div
            initial={{y:20, opacity:0}}
            animate={{y:0,opacity:1}}
            out={{y:-20,opacity: 0}}
            transition={{ease: "easeInOut", duration: 0.75}}
        >
            {children}
        </motion.div>
    )
}

export default Transition_Handler