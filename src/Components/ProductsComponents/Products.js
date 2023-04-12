import data from '../../data/data'
import Product from './Product';
import { useSelector } from 'react-redux';
import {getSelectedCategory} from '../../redux/productsSlice';

const Products = () => {
    const selectedCategory = useSelector (getSelectedCategory);
    return (
        <div className='products'>
            {data.filter(product => {
                if (selectedCategory === 'all') return true;
                return selectedCategory === product.searchTerm;
            })
            .map(product => <Product product={product} key = {product.id}/>)}

        </div>
    )
}
export default Products;