import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";


const Header = () => {
    const sidebarContext = useContext(SidebarContext);

    if (!sidebarContext) {
        throw new Error("SidebarContext is undefined. Make sure you have wrapped your components with SidebarProvider.");
    }

    const { isOpen, setIsOpen } = sidebarContext;


    const toggleSidebar = () => {
        setIsOpen(prevState => !prevState)
        console.log("Sidebar state toggled:", isOpen);
    };

    return (
        <div className="bg-pink-200">
            <div>Header</div>
            <div onClick={toggleSidebar}
            className="cursor-pointer flex relative">
            <BsBag className="text-2xl"/>
            </div>
        </div>
    );
};

export default Header;
