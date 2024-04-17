import { useContext, useEffect, useState } from 'react';
import './ViewCart.css';
// import { cartContext } from '../App';
import { cartContext } from '../cartContext';

export const ViewCart=()=>{
  const {cart}=useContext(cartContext);
  const [total,setTotal]=useState(0);
  useEffect(()=>{
    setTotal(cart.reduce((acc,currentvalue)=>
    acc+parseInt(currentvalue.amt),0));
  },[cart]);
 
    return(
        <>
        <h1 className='cart-heading'>Cart Products</h1>
          <div className="cart-container">
            {
              cart.map((product)=>{
                return <div className="cart-product" key={product.id}>
                          <div className="img">
                              <img src={product.pic} alt="image" />
                          </div>
                          <div className="cart-produt-details">
                              <h3>Produt Name:{product.name}</h3>
                              <p>Price Rs:{product.amt}</p>
                          </div>
                      </div>
              })
            }
            {/* <div className="cart-product">
              <div className="img">
                 <img src="" alt="image" />
              </div>
              <div className="cart-produt-details">
                 <h3>Produt Name:</h3>
                 <p>Price Rs:45.00</p>
              </div>
            </div> */}
          </div>
         <h1 className='cart-amount'>Total Amount Rs:{total}</h1>
        </>
    )
}
// export const ViewCart=({cart,setcart})=>{
  
//   const [total,setTotal]=useState(0);
//   useEffect(()=>{
//     setTotal(cart.reduce((acc,currentvalue)=>
//     acc+parseInt(currentvalue.amt),0));
//   },[cart]);
 
//     return(
//         <>
//         <h1 className='cart-heading'>Cart Products</h1>
//           <div className="cart-container">
//             {
//               cart.map((product)=>{
//                 return <div className="cart-product" key={product.id}>
//                           <div className="img">
//                               <img src={product.pic} alt="image" />
//                           </div>
//                           <div className="cart-produt-details">
//                               <h3>Produt Name:{product.name}</h3>
//                               <p>Price Rs:{product.amt}</p>
//                           </div>
//                       </div>
//               })
//             }
//             {/* <div className="cart-product">
//               <div className="img">
//                  <img src="" alt="image" />
//               </div>
//               <div className="cart-produt-details">
//                  <h3>Produt Name:</h3>
//                  <p>Price Rs:45.00</p>
//               </div>
//             </div> */}
//           </div>
//          <h1 className='cart-amount'>Total Amount Rs:{total}</h1>
//         </>
//     )
// }