import { useDispatch } from "react-redux";
import { filterCategory } from "../../redux/productsSlice";

const Filter = () => {
    const dispatch = useDispatch();

    return (
        <div className="column">
            <button tabIndex="0" className='change' onClick={ ()=> dispatch(filterCategory("all")) } > Show All </button> 
            <button tabIndex="1" className='change' onClick={ ()=> dispatch(filterCategory("SOAP")) } > Soap </button>
            <button tabIndex="2" className='change' onClick={ ()=> dispatch(filterCategory("OIL")) } > Oil </button>
            <button tabIndex="3" className='change' onClick={ ()=> dispatch(filterCategory("SKINCARE")) } > Skincare </button>
            <button tabIndex="4" className='change' onClick={ ()=> dispatch(filterCategory("SHOWER")) } > Shower </button>
        </div>
    )
}
export default Filter;