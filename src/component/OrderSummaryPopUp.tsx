import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { BsCheckCircle } from "react-icons/bs";

interface OrderSummaryPopUpProps {
  visible: boolean;
  onClose: () => void;
  ordernumber: number;
}

const OrderSummaryPopUp: React.FC<OrderSummaryPopUpProps> = ({
  onClose,
  visible,
  ordernumber,
}) => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("CartContext is undefined.");
  }

  if (!visible) {
    return null;
  }

  const { cart, total } = cartContext;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="relative container p-10 w-11/12 max-w-lg h-4/5 max-h-[800px] bg-white shadow-md rounded-lg overflow-auto">
        <button
          className="absolute top-2 px-4 py-2 right-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          onClick={onClose}
        >
          X
        </button>
        <div className="flex flex-col items-center mb-4">
          <BsCheckCircle className="text-green-500 text-5xl mb-2" />
          <div className="text-lg font-semibold">THANK YOU FOR ORDERING</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="uppercase text-lg font-semibold">Order Summary</div>
        </div>
        <div>Order Number: {ordernumber}</div>
        <br />
        <div className="flex flex-col border-t border-b">
          <br />
          <div className="flex-1 overflow-y-auto max-h-[350px]">
            <div className="flex flex-col gap-y-2">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-x-4 border-gray-200 py-2 px-4"
                >
                  <img
                    className="max-w-[50px]"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="flex flex-col text-sm font-semibold flex-grow pl-2">
                    <span>{item.title}</span>
                  </div>
                  <div className="flex flex-col items-end text-sm">
                    <span className="font-semibold">${item.price}</span>
                    <span>Qty: {item.amount}</span>
                  </div>
                </div>
              ))}
              <br />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4 uppercase font-semibold">
          <span className="">Total:</span> ${total.toFixed(2)}
          <br />
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryPopUp;
