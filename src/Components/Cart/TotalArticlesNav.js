import { useSelector } from "react-redux";
import { getTotalArticles } from "../../redux/cartSlice";

const TotalArticlesNav = () => {
    const totalArticles = useSelector(getTotalArticles);

    return (
        <div>
            <span className='spanQuantityCart'> { totalArticles }</span>
        </div>
    )
}
export default TotalArticlesNav;