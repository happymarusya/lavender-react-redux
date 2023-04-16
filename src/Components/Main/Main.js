import { motion } from 'framer-motion';

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1, 
        transition: {
            duration: 1,
            delay: custom * 0.3,

        }
    }),
    
}

const Main = () => {
    return (
        <div className="info">
            <div className="container-info">
                <div className="text">
                <motion.div 
                initial='hidden'
                whileInView='visible'
                // viewport={{amount: 0.3, once: true}} ***one time animation
            >
                    <motion.h2 custom={1} variants={textAnimation} >Welcome to our purple world!</motion.h2>
                    <motion.p custom={2} variants={textAnimation} className="text-par">Lavender Fields, a boutique lavender farm and all around treat for the senses with lavender plants spread in six fields of neat rows in a picturesque valley and beautiful handmade lavender products for you to enjoy. Lavender has been grown here for the last 20 years as it loves the freedraining limestone soils giving the highest quality essential oils. We now have over 35 different varieties of lavender covering more than 70 acres of the farm. Every year at the height of summer the lavender gives a stunning display of colour</motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default Main;