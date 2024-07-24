import React, { createContext, useState, ReactNode, useEffect } from "react";
import { Product } from "../types/Product";

export interface CartContextProps {
  message: string;
  cart: CartItem[];
  addToCart: (product: Product, id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
  itemAmount: number;
  total: number;
  submitCart: (ordernumber: number) => void;
}
interface CartProviderProps {
  children: ReactNode;
}
export interface CartItem extends Product {
  amount: number;
}
export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  });

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);
  const addToCart = (product: Product, id: number) => {
    const newItem = { ...product, amount: 1 };
    setCart((prevCart) => [...prevCart, newItem]);
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // console.log(cartItem);
    if (cartItem) {
      const newCart: CartItem[] = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
      //   console.log(" the same id is detected");
    } else {
      //   console.log(" the same id is not  detected");
      setCart([...cart, newItem]);
    }
    // console.log(cart);
  };

  const clearCart = () => {
    setCart([]);
    alert("Cart has been cleared");
  };

  const removeFromCart = (id: number) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };
  const increaseAmount = (id: number) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      addToCart(cartItem, id);
    }
  };

  const decreaseAmount = (id: number) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);

      if (cartItem.amount < 2) {
        removeFromCart(id);
      }
    }
  };

  const submitCart = (ordernumber: number) => {
    console.log(cart);
    alert(`Your order has been submitted. Your ordernumber is ${ordernumber}`);
  };

  const contextValue: CartContextProps = {
    message: "This is the cart context",
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    increaseAmount,
    decreaseAmount,
    itemAmount,
    total,
    submitCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
