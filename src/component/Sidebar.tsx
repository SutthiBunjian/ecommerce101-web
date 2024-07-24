import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

import { Order } from "../types/Order";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { orderBasePath } from "../utils/common";
import OrderSummaryPopUp from "../component/OrderSummaryPopUp";

const sendData = (orderdata: Order) => {
  axios
    .post(orderBasePath + "insertorder", orderdata)
    .then((res) => {
      console.log("SUCCESS", res);
    })
    .catch((error) => {
      throw new Error(error);
    });
};

const Sidebar = () => {
  const [showMyModal, setShowMyModal] = useState(false);
  const [orderNumber, setOrderNumber] = useState(0);

  const sidebarContext = useContext(SidebarContext);
  const cartContext = useContext(CartContext);

  if (!sidebarContext) {
    throw new Error("SidebarContext is undefined.");
  }

  if (!cartContext) {
    throw new Error("CartContext is undefined.");
  }

  const { isOpen, handleClose } = sidebarContext;
  const { cart, clearCart, total, itemAmount, submitCart } = cartContext;

  const handleModalClose = () => setShowMyModal(false);

  const handleSubmitOrder = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
      const orderData: Order = {
        orderid: uuidv4(),
        ordernumber: generateOrderNumber(),
        products: cart.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          description: item.description,
          category: item.category,
          image: item.image,
          rating: item.rating,
          quantity: item.amount,
        })),
      };

      sendData(orderData);
      console.log(orderData);

      submitCart(orderData.ordernumber);
      localStorage.setItem("OrderInfo", JSON.stringify(orderData));
      setOrderNumber(orderData.ordernumber);

      setShowMyModal(true);
    } else {
      alert("Not Loggedin");
    }
  };
  const generateOrderNumber = () => {
    return Date.now();
  };
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] flex flex-col`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-y-2">
          {cart.map((item) => {
            return <CartItem showControls={true} item={item} key={item.id} />;
          })}
        </div>
      </div>
      <div className="py-4 border-t">
        <div className="flex w-full justify-between items-center mb-4">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span> $ {total.toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          onClick={handleClose}
          to="/cart"
          className="bg-gray-200 flex p-4 justify-center items-center w-full font-medium mb-2"
        >
          View Cart
        </Link>
        <Link
          onClick={handleSubmitOrder}
          to="/cart"
          className="bg-gray-200 flex p-4 justify-center items-center w-full font-medium"
        >
          Checkout
        </Link>
      </div>
      <OrderSummaryPopUp
        onClose={handleModalClose}
        visible={showMyModal}
        ordernumber={orderNumber}
      />
    </div>
  );
};

export default Sidebar;
