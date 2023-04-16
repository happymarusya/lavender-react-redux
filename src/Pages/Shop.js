import AllCategories from "../Components/Filter/AllCategories";
import Products from "../Components/ProductsComponents/Products";
import { motion } from "framer-motion";

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1, 
        transition: {
            duration: 2,
            delay: custom * 0.3,

        }
    }),
    
}

function Shop () {
    return (
        <div className="shop">
            <div>
                <motion.div 
                initial='hidden'
                whileInView='visible'>
            <motion.h2 variants={textAnimation} >Enjoy handcrafted lavender products shipped right to your door!</motion.h2>
            </motion.div> 
            <AllCategories/>
            <Products/>
        </div>
        </div>
    )
}
export default Shop;