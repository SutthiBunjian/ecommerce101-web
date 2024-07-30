import Footer from "../component/Footer";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import CartSummary from "../pages/CartSummary";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import SignUp from "../pages/SignUp";

export const routes = [
  {
    element: <Login />,
    path: "/",
  },
  {
    element: <SignUp />,
    path: "/signup",
  },
  {
    element: (
      <>
        <Header />
        <Home />
        <Sidebar />
        <Footer />
      </>
    ),
    path: "/home",
  },
  {
    element: (
      <>
        <Header />
        <CartSummary />
        <Sidebar />
        <Footer />
      </>
    ),
    path: "/cart",
  },
  {
    element: (
      <>
        <Header />
        <ProductDetails />
        <Sidebar />
        <Footer />
      </>
    ),
    path: "/product/:id",
  },
];
