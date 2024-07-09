import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(true);

  const sidebarContext = useContext(SidebarContext);
  const cartContext = useContext(CartContext);

  if (!sidebarContext || !cartContext) {
    throw new Error("Contexts are not defined");
  }

  const { isOpen, setIsOpen } = sidebarContext;
  const { itemAmount } = cartContext;

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
    console.log("Sidebar state toggled:", isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={`/home`}>
          <div>
            <img className="w-[40px]" src={Logo} alt="" />
          </div>
        </Link>

        <div onClick={toggleSidebar} className="cursor-pointer flex relative">
          <BsBag className="text-2xl" />
          <div
            className="bg-red-500 absolute -right-2 -bottom-2 
                      text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center"
          >
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
