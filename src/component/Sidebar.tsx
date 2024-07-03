import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SidebarContext";

import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {

    const sidebarContext = useContext(SidebarContext);
    const cartContext = useContext(CartContext)

    if (!sidebarContext) {
        throw new Error("SidebarContext is undefined.");
    }

    if (!cartContext) {
        throw new Error("CartContext is undefined.");
    }
    const { isOpen ,handleClose} = sidebarContext;
    const {cart} = cartContext

    return (
       
        <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 -px-4 lg:px-[35px]`}>
        <div className="flex items-center justify-center py-6
        border-b" >
            <div className="uppercase text-sm font-semibold">Shopping bag (0)</div>

            <div onClick={handleClose} className="cursor-pointer w-8 h-8 flex justify-center items-center">
                <IoMdArrowForward className="text-2xl"/>
            </div>
          </div>
          <div>
            {cart.map((item) =>{
                return <CartItem item={item}/> 
            })}
          </div>
        </div>
    );
};

export default Sidebar