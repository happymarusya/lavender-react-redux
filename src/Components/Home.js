import { motion } from 'framer-motion';
import Video from '../Video';
import Main from './Main';

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
function Home () {
    return (
        <div className="header">
            <div className='header-container'>
            <motion.div 
                initial='hidden'
                whileInView='visible'>
                <motion.h1 custom={1} variants={textAnimation} className='header-title'>Lavender Fields</motion.h1>
                <motion.p custom={2} variants={textAnimation} className='header-par'>Where relaxation meets beauty...</motion.p>
                <a href="/shop"><motion.button custom={3} variants={textAnimation} className='header-btn'>SHOP NOW</motion.button></a>
            </motion.div>
            </div>
            <Main/>
            <Video/>

        </div>
    )
}
export default Home;