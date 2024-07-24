import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../component/Product";
import Hero from "../component/Hero";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const context = useContext(ProductContext);
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    navigate("/");
  }
  if (!context) {
    console.log("Context is undefined");
    return <div>Loading...</div>;
  }

  const { products } = context;

  if (!products) {
    console.log("Products are undefined");
    return <div>Loading...</div>;
  }

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5
                    gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0"
          >
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
