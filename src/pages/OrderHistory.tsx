import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";
import { Order } from "../types/Order";
import { useNavigate } from "react-router-dom";

const OrderHistory = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState("");

  const userInfo = localStorage.getItem("userInfo");
  let userID = 0;
  if (userInfo) {
    const user = JSON.parse(userInfo);
    userID = user.uid;
  }

  useEffect(() => {
    if (userID) {
      axios
        .get(`${config.api.baseUrl}/orders/list/${userID}`)
        .then((response) => {
          const fetchedOrders = response.data.data;
          if (Array.isArray(fetchedOrders)) {
            setOrders(fetchedOrders);
          } else {
            setError("Invalid response format.");
          }
        })
        .catch((error) => {
          setError("Failed to fetch order history.");
          console.error(error);
        });
    }
  }, [userID]);

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-20">
      <div className="container mx-auto p-4 w-full max-w-4xl bg-white shadow-md rounded-lg mb-6">
        <div className="flex items-center justify-between py-4 border-b">
          <div className="uppercase text-lg font-semibold">Order History</div>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orders.map((order) => (
            <div key={order.ordernumber} className="border-b py-4">
              <h3 className="font-semibold mb-2">Order #{order.ordernumber}</h3>
              {order.products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between mb-2"
                >
                  <div className="flex items-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-12 h-12 object-cover mr-4 cursor-pointer"
                      onClick={() => {
                        navigate(`/product/${product.id}`);
                      }}
                    />
                    <div>
                      <h4 className="font-semibold">{product.title}</h4>
                      <p className="text-sm">Quantity: {product.quantity}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end w-1/4 text-right">
                    <h4 className="font-semibold">
                      ${(product.price * product.quantity).toFixed(2)}
                    </h4>
                    <p className="text-xs ">
                      ${product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
              ))}

              <div className="border-t pt-2 mt-2 flex justify-between">
                <h4 className="font-semibold">Total:</h4>
                <p className="font-semibold">
                  $
                  {order.products
                    .reduce(
                      (total, product) =>
                        total + product.price * product.quantity,
                      0
                    )
                    .toFixed(2)}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
