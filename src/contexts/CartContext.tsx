import React,{createContext, useState,ReactNode} from "react";
import { Product } from "../types/Product";

interface CartContextProps{
    message:string;
    cart:CartItem[]
    addToCart: (product: Product, id: number) => void;
}
interface CartProviderProps {
    children: ReactNode;
}
export interface CartItem extends Product {
    amount: number;

}
export const CartContext = createContext<CartContextProps | undefined >(undefined)


const CartProvider:React.FC<CartProviderProps> =({children})=>{
    
    const[cart,setCart] = useState<CartItem[]>([])

    const addToCart = (product:Product, id:number) => {
        const newItem = {...product, amount: 1}
        setCart(prevCart => [...prevCart, newItem])
        const cartItem = cart.find((item) => {
            return item.id === id;

        })
        console.log(cartItem)
        if(cartItem){
            
            const newCart: CartItem[] =[...cart].map(item =>{
                if(item.id === id){
                return {...item,amount:cartItem.amount +1}
                }else{
                    return item;
                }
            })
            setCart(newCart)
            console.log(" the same id is detected")
        }else{
            console.log(" the same id is not  detected")
            setCart([...cart, newItem])
        }
        console.log(cart)
       
    }

    const contextValue: CartContextProps = {
        message: "This is the cart context",
        cart,
        addToCart
    };
    
    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider