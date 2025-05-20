import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';
import MovieList from './cine/MovieList';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MovieList/>
        
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;