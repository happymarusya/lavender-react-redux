import { useSelector } from "react-redux";
import { getCartItems, getTotalArticles, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import { useState } from "react";

const Cart = () => {
    const [isActive, setActive] = useState(false);

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const totalArticles = useSelector(getTotalArticles);

    const toggleItems = () => {
        setActive(!isActive);
      };

    return ( 
        <div>
        <div className='marginCart fixedCartHead'>

            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="btnMore" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
            </svg>
            <span className="shoppingCart">Shopping Cart</span>

        <button  className='btnMore right' onClick={toggleItems} >
            <div>
                { isActive? 
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                    </svg>
                    
                :
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                    </svg>
                }
            </div>
        </button>
        </div>

        <div className={isActive ? 'scrollArea close': 'scrollArea open'}> 
        {cartItems.map( cartItem => <CartItem cartItem ={cartItem}  key = {cartItem.id} />)}
        </div>

        
        <div className="fixedCartFooter">
        <p className="span-product"> { totalArticles } article (s) </p>
        <p className="span-product marginCart"> TOTAL : € { totalPrice },00 </p>
        </div>
        
        </div>
    )
}
export default Cart;