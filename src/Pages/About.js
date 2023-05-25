import image from './about.jpg'
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

function  About () {
    return (
        <div className="contact">
            <motion.div 
                initial='hidden'
                whileInView='visible'>
            <motion.h2 custom={1} variants={textAnimation}>Welcome to Lavender Fields!</motion.h2>
            <motion.img custom={2} variants={textAnimation} className='family' src={image} alt="Family" width="600px"/>
            <div className='text-about'>
                <motion.p custom={4} variants={textAnimation}>We are a Family Farm and started growing lavender in 1999 as a small diversification. From a few hundred that were planted out on hands and knees things have now grown to almost 70 acres of lavender, with oils and our lavender range sold throughout the Netherlands and around the world. In that time others have joined us to help as the business has grown, but family farm values are still at our core</motion.p>
                <motion.p custom={5} variants={textAnimation}>Based on our own high quality essential lavender and rosemary oils, we have developed a range of light, delicately perfumed hand, body and home fragrance products. Our aim is to capture and bring to you the essence of our lavender field!</motion.p>
                <motion.p custom={6} variants={textAnimation}>We sell a wide range of Lavender products on our website so please take a look around our online shop to view everything from our creamy Lavender soap to luxury Lavender oil.</motion.p>
            </div>
            </motion.div>
        </div>
    )
}
export default About;