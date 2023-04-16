import { motion } from "framer-motion";

const textAnimation = {
    hidden: {
        x: -200,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1, 
        transition: {
            duration: 2
        }
    },
    
}

export const Shipping = () => {
    return (
        <motion.div 
        initial="hidden"
        whileInView="visible"
        className="shipping">
            <motion.p variants={textAnimation} className="shipping-par">FREE SHIPPING!</motion.p>
        </motion.div>
    )
}