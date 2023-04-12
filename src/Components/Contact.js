import { motion } from 'framer-motion';

const textAnimation = {
    hidden: {
        x: -200,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1, 
        transition: {
            duration: 2,
            delay: custom * 0.8,
        }
    }),
    
}


function Contact () {
    return (
        <div className="contact">
            <motion.div 
                initial='hidden'
                whileInView='visible'>
            
                <motion.h2 custom={1} variants={textAnimation}>Contact Us</motion.h2> 
                <motion.p custom={2} variants={textAnimation} className="contact-par contact-text">If you can't find what you are looking for or should you wish to choose your own combinations, we will be happy to help</motion.p>
                <br></br>
                <motion.p custom={3} variants={textAnimation} className="logo">Lavender Fields</motion.p> 
                <motion.p custom={4} variants={textAnimation} className="contact-par">Vogelaardreef 20</motion.p>
                <motion.p custom={4} variants={textAnimation} className="contact-par">Noordwijk ZH</motion.p>
                <motion.p custom={4} variants={textAnimation} className="contact-par">lavenderfields@gmail.com</motion.p>
            </motion.div>
        </div>
    )
}
export default Contact;