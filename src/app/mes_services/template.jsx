"use client"

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Template = ({children}) => {
    const router = useRouter();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={router.route}
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