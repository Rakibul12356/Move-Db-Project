import React, { useReducer, useState } from 'react';
;
import { MovieContext,ThemeContext } from './contex';

import Page from './Page';
import { cartReducer, initialState } from './reducers/CarReducers';
const App = () => {

  const [darkMode,setDarkMode]=useState(true)
  const [state,dispatch] =useReducer(cartReducer,initialState)
  return (
    <>
    <ThemeContext.Provider value={{darkMode,setDarkMode}}>
    <MovieContext.Provider value={{state,dispatch}} >
     <Page/>
      </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;