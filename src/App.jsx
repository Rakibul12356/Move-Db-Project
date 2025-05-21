import React, { useState } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';
import MovieList from './cine/MovieList';
import CartDetails from './cine/CartDetails';
import { MovieContext } from './contex';
import { Toaster } from 'react-hot-toast';
const App = () => {
  const [cartData,setCartData]=useState([])
  return (
    <>
    <MovieContext.Provider value={{cartData,setCartData}} >
      <Header />
      <Toaster/>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MovieList/>
        </div>
      </main>
      <Footer />
      </MovieContext.Provider>
    </>
  );
};

export default App;