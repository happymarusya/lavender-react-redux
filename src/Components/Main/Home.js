import { motion } from 'framer-motion';
import Main from './Main';
import { Link } from 'react-router-dom';
import Video from '../../Video';

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
    const handleClick = (myLink) => () => {
        window.location.href=myLink;
    }
    return (
        <div className="header">
            <div className='header-container'>
            <motion.div 
                initial='hidden'
                whileInView='visible'>
                <motion.h1 custom={1} variants={textAnimation} className='header-title'>Lavender Fields</motion.h1>
                <motion.p custom={2} variants={textAnimation} className='header-par'>Where relaxation meets beauty...</motion.p>
                <Link to="/shop"><motion.button custom={3} variants={textAnimation} className='header-btn' onClick = {() => handleClick('./shop')}>SHOP NOW</motion.button></Link>
            </motion.div>
            </div>
            <Main/>
            <Video/>

        </div>
    )
}
export default Home;