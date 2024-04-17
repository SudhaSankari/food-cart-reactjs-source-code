import { useContext } from 'react';
import './product.css'
// import { cartContext } from '../App';
import { cartContext } from '../cartContext';

export const ProductComponent=({product})=>{
  const {cart,setCart}=useContext(cartContext);
      const name=product.name.length>21?
      product.name.substring(0,20)+"..":product.name; 
      
      const addCart=()=>{
        setCart([...cart,product])
      };
      const removeCart=()=>{
        setCart(cart.filter((c)=>c.id!==product.id));
      };
        return(
            <>
              <div className="product">
                <div className="img">
                    <img src={product.pic} alt={product.name} />
                </div>
                <div className="details">
                        <h3>{name}</h3>
                        <p>Price Rs:{product.amt}</p>
                        {
                          cart.includes(product)?(
                            <button className='btn-remove'
                            onClick={removeCart}>Remove Cart</button>
                          ):(<button onClick={addCart} >Add To Cart</button>)
                        }
                </div>
              </div>
            </>
        )
};
// export const ProductComponent=({product,cart,setCart})=>{
//       const name=product.name.length>21?
//       product.name.substring(0,20)+"..":product.name; 
      
//       const addCart=()=>{
//         setCart([...cart,product])
//       };
//       const removeCart=()=>{
//         setCart(cart.filter((c)=>c.id!==product.id));
//       };
//         return(
//             <>
//               <div className="product">
//                 <div className="img">
//                     <img src={product.pic} alt={product.name} />
//                 </div>
//                 <div className="details">
//                         <h3>{name}</h3>
//                         <p>Price Rs:{product.amt}</p>
//                         {
//                           cart.includes(product)?(
//                             <button className='btn-remove'
//                             onClick={removeCart}>Remove Cart</button>
//                           ):(<button onClick={addCart} >Add To Cart</button>)
//                         }
//                 </div>
//               </div>
//             </>
//         )
// };