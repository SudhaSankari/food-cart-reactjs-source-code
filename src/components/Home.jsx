import { useState } from 'react';
import data from '../assets/products.json';
import { ProductComponent } from './ProductComponent';
import './home.css';
// export const Home=({cart,setCart})=>{
// // console.log(data);
//  const [products]=useState(data);

//     return(
//         <>
//          <div className="product-container">
//             {
//                 products.map((product)=>{
//                     // return <div key={index}>{product.name}</div>
//                    return <ProductComponent 
//                    key={product.id} product={product}
//                    cart={cart} setCart={setCart}/>
//                 })
//             }
//          </div>
//         </>
//     )
// }
export const Home=()=>{
// console.log(data);
 const [products]=useState(data);

    return(
        <>
         <div className="product-container">
            {
                products.map((product)=>{
                    // return <div key={index}>{product.name}</div>
                   return <ProductComponent 
                   key={product.id} product={product}
                   />
                })
            }
         </div>
        </>
    )
}