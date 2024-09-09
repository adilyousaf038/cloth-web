import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search,setSearch] = useState('');
  const [showSearch,setShowSearch] = useState(false);
  const [cartitems,setCartItems] = useState({});
  const navigate = useNavigate();

    const addToCard = async(itemId,size) =>{
        if (!size) {
          toast.error("Please select size");
          return;
        }
       let  cartData = structuredClone(cartitems);
       if (cartData[itemId]){
          if (cartData[itemId][size]) {
             cartData[itemId][size] += 1;
          }else{
             cartData[itemId][size] = 1;
          }       
       }else{
         cartData[itemId] = {};
         cartData[itemId][size] = 1;
       }
       setCartItems(cartData);       

    }    

     const getCartCount = () =>{
      let totalCount = 0;
      for(const items in cartitems){
        for(const item in cartitems[items]){
           try {
            if (cartitems[items][item] > 0) {
               totalCount += cartitems[items][item];
            }
            
           } catch (error) {
            
           }
        }

      }
      return totalCount;
     }

     
     const updateCart = (itemId,size,quantity) =>{
      // localStorage.setItem('cartItems',JSON.stringify(cartitems));
      let cartData = structuredClone(cartitems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
     }

     const getCartAmount =  () =>{
      let totalAmout = 0;
      for(const items in  cartitems){
        let iteminfo = products.find((product)=> product._id === items);
        for(const item in cartitems[items]){
           try {
            if (cartitems[items][item] > 0) {
              totalAmout += cartitems[items][item] * iteminfo.price;
            }
            
           } catch (error) {
            
           }
        }
      }
      return totalAmout;
     }


  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartitems,
    addToCard,
    getCartCount,
    updateCart,
    getCartAmount,
    navigate 
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
