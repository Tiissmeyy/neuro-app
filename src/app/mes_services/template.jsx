"use client"

import { AnimatePresence, motion } from "framer-motion";

const Template = ({children}) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{y:-20,opacity: 0}}
                transition={{ease: "easeInOut", duration: 0.75}}
            >
                {children}
            </motion.div>
        </AnimatePresence>
        
    )
}

export default Template