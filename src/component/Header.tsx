import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import ProfileDropdown from "./ProfileDropDown";

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(true);
  const [dropdownVisible, setDropdownVisible] = useState(false);

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

  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
    console.log("Dropdown state toggled:", dropdownVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={`/home`}>
          <div>
            <img className="w-[40px]" src={Logo} alt="Logo" />
          </div>
        </Link>

        <div className="flex items-center space-x-6">
          <div onClick={toggleSidebar} className="cursor-pointer flex relative">
            <BsBag className="text-2xl" />
            <div
              className="bg-red-500 absolute -right-2 -bottom-2 
                        text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center"
            >
              {itemAmount}
            </div>
          </div>
          <div className="relative">
            <button
              className="flex text-sm rounded-full md:me-0 hover:ring-4"
              onClick={toggleDropdown}
            >
              <AiOutlineUser className="text-3xl" />
            </button>
            <ProfileDropdown isVisible={dropdownVisible} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
