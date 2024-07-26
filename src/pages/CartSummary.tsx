import { CartContext } from "../contexts/CartContext";
import { useContext, useState } from "react";
import CartItem from "../component/CartItem";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Order } from "../types/Order";
import { v4 as uuidv4 } from "uuid";
import OrderSummaryPopUp from "../component/OrderSummaryPopUp";
import config from "../config";

const sendData = (orderdata: Order) => {
  axios
    .post(`${config.api.baseUrl}/orders/insertorder`, orderdata)
    .then((res) => {
      console.log("SUCCESS", res);
    })
    .catch((error) => {
      throw new Error(error);
    });
};

const CartSummary = () => {
  const cartContext = useContext(CartContext);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const [showMyModal, setShowMyModal] = useState(false);
  const [orderNumber, setOrderNumber] = useState(0);

  if (!cartContext || !userContext) {
    throw new Error("Context is undefined.");
  }

  const handleModalClose = () => setShowMyModal(false);
  const [showLoginMessage, setShowLoginMessage] = useState(false);

  const { cart, clearCart, total, itemAmount, submitCart } = cartContext;

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
      setShowLoginMessage(true);
      alert("Not Loggedin");
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-20   ">
      <div className="container mx-auto p-4 w-full max-w-4xl bg-white shadow-md rounded-lg mb-6">
        <div className="flex items-center justify-between py-4 border-b">
          <div className="uppercase text-lg font-semibold">
            Shopping bag ({itemAmount})
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center">
          <h2 className="text-lg font-bold">Total: ${total.toFixed(2)}</h2>
          <div className="flex gap-x-2">
            <button
              onClick={handleSubmitOrder}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
            >
              Submit Order
            </button>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
            >
              Clear Cart
            </button>
          </div>
        </div>
        {showLoginMessage && (
          <div className="mt-4 text-center">
            <p className="text-red-500">
              You are not logged in. Please sign up or log in to submit your
              order.
            </p>
            <div className="flex items-center justify-center gap-x-2">
              <button
                onClick={() => navigate("/")}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transitio"
              >
                Log in
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transitio"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
      <OrderSummaryPopUp
        ordernumber={orderNumber}
        onClose={handleModalClose}
        visible={showMyModal}
      />
    </div>
  );
};

const generateOrderNumber = () => {
  return Date.now();
};

export default CartSummary;
