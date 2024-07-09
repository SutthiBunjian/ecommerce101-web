import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext, CartContextProps } from "../contexts/CartContext";
import { ProductContext, ProductContextType } from "../contexts/ProductContext";
import { Product } from "../types/Product";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  const productContext = useContext<ProductContextType | undefined>(
    ProductContext
  );
  const cartContext = useContext<CartContextProps | undefined>(CartContext);

  if (!cartContext) {
    return "CartContext not defined";
  }
  const products = productContext?.products;
  const addToCart = cartContext?.addToCart;

  const product = products?.find((item: Product) => {
    if (id) {
      return item.id === parseInt(id);
    }
  });
  console.log(product);

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  const { title, price, description, image } = product;
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img src={image} alt="" className="max-w-[200px] lg:max-w-sm" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xs text-red-500 font-medium mb-6">
              $ {price}
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-black py-4 px-8 text-white"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
