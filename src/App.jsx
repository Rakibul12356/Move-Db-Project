import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Header/>
      <div  className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <SideBar/>
      </div>
      <Footer/>
    </>
  );
};

export default App;