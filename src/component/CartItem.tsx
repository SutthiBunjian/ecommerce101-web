import React from "react";
import { Product } from "../types/Product";

interface CartItemProps{
    item: Product
    amount:number
}

const CartItem: React.FC<CartItemProps> =({item})=>{
    const{id, title,image,price,amount} = item
    return(
        <div>{item.title}</div>
    )
};

export default CartItem