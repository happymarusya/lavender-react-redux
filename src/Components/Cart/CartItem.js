import data from "../../data/data";
import { removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({cartItem}) => {
    const products = data.find(item => item.id === cartItem.productId)

    const dispatch = useDispatch();

    return (
    <div>
        <div className="line">
            <div className="line">
                <img className="imgCart" src = {`${products.img}.jpg`} alt="Product"/>
            </div>
        <div>
            <div className="lineCart">
                <p className="span-product productCart"> { products.name }</p>
                <button className="btnMore right" onClick={ ()=> dispatch( removeItemFromCart( {cartItemId : cartItem.id }) )} > 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                    </svg>
                </button>
            </div>
            
            <p  className='span-product productCart'> <span > {cartItem.quantity} x € {products.price},00 </span></p>
            <p className="price productCart"> € {products.price*cartItem.quantity},00</p>
        </div>
        </div>
        <hr/>
    </div>
    )
}
export default CartItem;