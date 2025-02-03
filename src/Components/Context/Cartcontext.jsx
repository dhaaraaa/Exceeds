import { createContext, useState } from "react";

export const cart = createContext()
export const Cartcontext = ({children}) => {

    const [carts,setcarts]=useState([]);
    console.log(carts, "cart is added ")


   const total= carts.reduce((preval ,msg)=>(
      preval+ msg.price
    ),0)
    console.log(total,"total");
    
  return (
  <cart.Provider value={{carts , setcarts , total}}>
    {children}
  </cart.Provider>
  )
}

