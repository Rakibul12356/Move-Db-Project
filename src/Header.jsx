import React, { useContext, useState } from 'react';
import logoImg from "./assets/logo.svg"
import ringImg from "./assets/ring.svg"
import moonImg from "./assets/icons/moon.svg"
import sunImg from "./assets/icons/sun.svg"
import cartImg from "./assets/shopping-cart.svg"
import CartDetails from './cine/CartDetails';
import { MovieContext, ThemeContext } from './contex';
const Header = () => {
    const [showCart,setShowCart] =useState(false)
     const {cartData} =useContext(MovieContext);
     const {darkMode,setDarkMode}= useContext(ThemeContext)
     console.log(cartData)
    const handleCartShow=()=>{
        setShowCart(true)
    }
    const handleCloseCart=()=>{
        setShowCart(false)
    }
    const handleDarkMode=()=>{
        setDarkMode(!darkMode)
    }
   
    return (
        <>
            <header>
                {
                    showCart && <CartDetails onClose={handleCloseCart}/>
                }
                <nav className="container flex items-center justify-between space-x-10 py-6">
                    <a href="index.html">
                        <img src={logoImg}width="139" height="26" alt="" />
                    </a>

                    <ul className="flex items-center space-x-5">
                        <li>
                            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                                <img src={ringImg} width="24" height="24" alt="" />
                            </a>
                        </li>
                        <li>
                            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#" onClick={handleDarkMode}>
                                <img src={darkMode? sunImg:moonImg} width="24" height="24" alt="" />
                            </a>
                        </li>
                        <li>
                            <a onClick={handleCartShow} className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                                <img src={cartImg} width="24" height="24" alt="" />
                                {
                                    cartData.length > 0 && (
                                        <span className='rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]'>{cartData.length}</span>
                                    )
                                }
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;