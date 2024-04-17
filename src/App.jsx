import { createContext, useContext, useState } from 'react';

import './App.css';
import { HeaderComponent } from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { ViewCart } from './components/ViewCart';
import { cartContext } from './cartContext';


function App() {
 const [cart,setCart]=useState([]);
 
  return (
    <>
      {/* <BrowserRouter>
          <HeaderComponent cart={cart}/>
            <div className='container'>
              <Routes>
                <Route path="/" element={<Home cart={cart} setCart={setCart}/>} />
                <Route path="/Cart" element={<ViewCart cart={cart} setCart={setCart}/>} />
            </Routes>
            </div>
      </BrowserRouter> */}
   
  <cartContext.Provider value={{cart,setCart}}>
      <BrowserRouter>
              <HeaderComponent cart={cart}/>
                <div className='container'>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Cart" element={<ViewCart />} />
                 </Routes>
                </div>
          </BrowserRouter>
  </cartContext.Provider>
      
    </>
  )
}

export default App
