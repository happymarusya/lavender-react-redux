import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { motion } from "framer-motion";

const blockAnimation = {
    hidden: {
        x: -50,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1, 
        transition: {
            duration: 2,
            delay: custom * 0.2,
            type: "spring",
            bounce: 0.5,
        }
    }),
    
}


const Product = ({product}) => {

    const [quantity, setQuantity] = useState(1);

    return (
        <div className="product-card" key = {product.id}>
    <motion.div 
            className="info"
            initial='hidden'
            whileInView='visible'>
        <motion.div variants={blockAnimation} className="product-info">
            <div className="frameimg">
                <img className="photo-card" src ={`${product.img}.jpg`} alt = "Product"/> 
            </div>
            <br></br>

            <ChangeQuantity quantity = {quantity} setQuantity = {setQuantity} product = {product} />

            <h3 className="product-name">{product.name}</h3>
            <p className="ingredients">{product.volume}</p>
            <p className="price">€ {product.price}</p>

        </motion.div>
        </motion.div>

    </div>
   ) 
}
export default Product;