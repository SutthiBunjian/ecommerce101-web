import React, { useContext } from "react";
import { Product } from "../types/Product";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

interface CartItemProps {
  item: Product & { amount: number };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error(
      "CartContext is undefined. Make sure you have wrapped your components with CartProvider."
    );
  }

  const { removeFromCart, increaseAmount, decreaseAmount } = cartContext;
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex gap-x-4 px-2 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-[150px] flex items-center">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px] m-2" src={image} alt={title} />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around">
              $ {price}
            </div>
            <div className="flex-1 flex items-center justify-around">
              {`$ ${(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
