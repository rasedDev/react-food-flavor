import { createContext, useEffect, useState } from "react";

const ShopContext = createContext()

import { productsData } from "../data";
import { toast } from "react-toastify";



const ShopContextProvider = ({children}) => {
    const [products, setProducts ] = useState(productsData)

    const [cart, setCart] = useState([])
    
    const [quantity, setQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
      const totalPrice = cart.reduce((accumulator, item) => {
        const price = parseFloat(item.price);
        if (isNaN(price)) return accumulator;
        return accumulator + price * item.amount
      }, 0);
        setTotal(totalPrice);
    }, [cart]);

    useEffect(() => {
      if(cart) {
        const amount = cart.reduce((accumulator, currentItem) => {
          return accumulator + currentItem.amount
        }, 0)
        setQuantity(amount)
      }
    }, [cart])

    const addToCart = (product, id) => {
      const cartItem = cart.find((Item) => Item.id === id);

      if(cartItem) {
        const newCart = cart.map((item) => 
          item.id === id ? { ...item, amount : item.amount + 1 } : item );
          setCart(newCart);
          toast.success("Quantity updated");
      } else {
        const newItem = {...product, amount: 1 };
        setCart([...cart, newItem]);
        toast.success("Product added to cart")
      }
    };

    const clearCart = () => {
      setCart([])
      toast.success("cart Empty")
    }

    const removeFromCart = (id) => {
      const newCart = cart.filter((item) => item.id !== id);
      setCart(newCart)
      toast.success("Product removed successfully")
    };

    const increaseQuantity = (id) => {
      const cartItem = cart.find((item) => item.id === id);
      addToCart(cartItem, id)
    }

    const decreaseQuantity = (id) => {
      const cartItem = cart.find((item) => item.id === id);
      if(cartItem) {
        if(cartItem.amount > 1 ) {
        const newCart = cart.map((item) => 
          item.id === id ? {...item, amount: item.amount -1 } : item);
        setCart(newCart); 
        } else {
          removeFromCart(id);
        }   
      }  
    }

    return (
      <ShopContext.Provider value={{products, cart, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, quantity, total}}>
        {children}
      </ShopContext.Provider>
    )
}

export default ShopContextProvider
export { ShopContext };






// import { createContext, useEffect, useState } from "react";
// import { productsData } from "../data";
// import { toast } from "react-toastify";

// const ShopContext = createContext();

// const ShopContextProvider = ({ children }) => {
//   const [products] = useState(productsData);
//   const [cart, setCart] = useState([]);
//   const [quantity, setQuantity] = useState(0);
//   const [total, setTotal] = useState(0);

//   // মোট দাম হিসাব
//   useEffect(() => {
//     const totalPrice = cart.reduce((acc, item) => {
//       const price = parseFloat(item.price); // priceFloat এর বদলে parseFloat ব্যবহার করলাম
//       if (isNaN(price)) return acc;
//       return acc + price * item.amount;
//     }, 0);
//     setTotal(totalPrice);
//   }, [cart]);

//   // মোট quantity হিসাব
//   useEffect(() => {
//     const totalQuantity = cart.reduce((acc, item) => acc + item.amount, 0);
//     setQuantity(totalQuantity);
//   }, [cart]);

//   // cart-এ item যোগ করা
//   const addToCart = (product, id) => {
//     const cartItem = cart.find((item) => item.id === id);

//     if (cartItem) {
//       const newCart = cart.map((item) =>
//         item.id === id ? { ...item, amount: item.amount + 1 } : item
//       );
//       setCart(newCart);
//       toast.success("Quantity updated");
//     } else {
//       const newItem = { ...product, amount: 1 };
//       setCart([...cart, newItem]);
//       toast.success("Product added to cart");
//     }
//   };

//   // cart খালি করা
//   const clearCart = () => {
//     setCart([]);
//     toast.success("Cart emptied");
//   };

//   // cart থেকে item remove করা
//   const removeFromCart = (id) => {
//     const newCart = cart.filter((item) => item.id !== id);
//     setCart(newCart);
//     toast.success("Product removed successfully");
//   };

//   // quantity বাড়ানো
//   const increaseQuantity = (id) => {
//     const cartItem = cart.find((item) => item.id === id);
//     if (cartItem) {
//       const newCart = cart.map((item) =>
//         item.id === id ? { ...item, amount: item.amount + 1 } : item
//       );
//       setCart(newCart);
//     }
//   };

//   // quantity কমানো
//   const decreaseQuantity = (id) => {
//     const cartItem = cart.find((item) => item.id === id);
//     if (cartItem) {
//       if (cartItem.amount > 1) {
//         const newCart = cart.map((item) =>
//           item.id === id ? { ...item, amount: item.amount - 1 } : item
//         );
//         setCart(newCart);
//       } else {
//         removeFromCart(id);
//       }
//     }
//   };

//   return (
//     <ShopContext.Provider
//       value={{
//         products,
//         cart,
//         addToCart,
//         removeFromCart,
//         clearCart,
//         increaseQuantity,
//         decreaseQuantity,
//         quantity,
//         total,
//       }}
//     >
//       {children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;
// export { ShopContext };
