import React from 'react';
import logoImg from "./assets/logo.svg"
import ringImg from "./assets/ring.svg"
import moonImg from "./assets/icons/moon.svg"
import cartImg from "./assets/shopping-cart.svg"
const Header = () => {
    return (
        <>
            <header>
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
                            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                                <img src={moonImg} width="24" height="24" alt="" />
                            </a>
                        </li>
                        <li>
                            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                                <img src={cartImg} width="24" height="24" alt="" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;