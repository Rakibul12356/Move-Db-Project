import React, { useContext } from 'react';
import Header from './Header';
import { Toaster } from 'react-hot-toast';
import SideBar from './SideBar';
import MovieList from './cine/MovieList';
import Footer from './Footer';
import { ThemeContext } from './contex';

const Page = () => {
    const{darkMode}=useContext(ThemeContext)
    return (
        <div className={`h-full w-full ${darkMode?"dark":""}`}>
             <Header />
      <Toaster/>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MovieList/>
        </div>
      </main>
      <Footer />
            
        </div>
    );
};

export default Page;