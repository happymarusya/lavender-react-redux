import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart/Cart";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Contact from "./Contact";
import TotalArticlesNav from "./Cart/TotalArticlesNav";


export const Nav = () => {
    const [isActive, setActive] = useState(true);
    const [colorNav, setColorNav] = useState(false);

const toggleCart = () => {
    setActive(!isActive);
};

const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 40){
    setColorNav(true)
    }
    else if (scrolled <= 40){
    setColorNav(false)
    }
};

window.addEventListener('scroll', toggleVisible);

    return (
        <Router>
            <div className={isActive ? 'cartWindow close': 'cartWindow open'} >
            <Cart/>
            </div>
            <div className='App head'>
            <nav className={colorNav ? "navBarColor" : "navBar"}>
                <Link to="/" className='link'> HOME </Link>
                <Link to="/shop" className='link'> SHOP </Link>
                <Link to="/about" className='link'> ABOUT US </Link>
                <Link to="/contact" className="link"> CONTACT </Link>

                <span className='link btnMore'>


                    <div className='cont'>
                        <button onClick={toggleCart} className='btnMore cont'> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"  viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                            </svg>

                            <span className='spanQuantityCart'><TotalArticlesNav/></span> 
                            {/* ****amount of articles in the cart*** */}
                        </button>
                    </div>
                </span>
            </nav>
            </div>

        <Routes>
            <Route path="/" element ={ <Home /> } />
            <Route path="shop" element ={ <Shop /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/contact" element={ <Contact /> } />
        </Routes>
        </Router>
    )
}