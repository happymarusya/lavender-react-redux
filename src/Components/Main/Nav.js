import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Home from "./Home";
import Shop from "../../Pages/Shop"
import About from "../../Pages/About";
import Contact from "../../Pages/Contact";
import TotalArticlesNav from "../Cart/TotalArticlesNav";
import Account from '../../Auth/Account';
import Login from '../../Auth/Login';
import Logout from '../../Auth/Logout';


export const Nav = () => {
    const [isActive, setActive] = useState(true);
    const [colorNav, setColorNav] = useState(false);
    const [authBox, setAuthBox] = useState(false)

    const authBoxActiv = () => {
        setAuthBox(!authBox);
    }

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
                        <button onClick={() => authBoxActiv()} className='btnMore cont'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#300c45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path fillRule="evenodd" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        </button>
                    </div>
                </span>
            </nav>
            <div className={ authBox ? 'auth-containe-true' : 'auth-containe-false'}>
          <div className='box-close-cart'>
            <button className='btn-close-cart' onClick={() => authBoxActiv()}><i className='fas	fa-times'></i></button>
          </div>
          <div className='box-auth'>
            <Account/>
            <Login/>
            <Logout/>
          </div>
        </div>
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