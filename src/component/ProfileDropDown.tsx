import React from "react";
import { useNavigate } from "react-router-dom";
import { GoSignOut, GoHome } from "react-icons/go";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

interface ProfilePopupProps {
  isVisible: boolean;
}

const ProfilePopup: React.FC<ProfilePopupProps> = ({ isVisible }) => {
  const navigate = useNavigate();

  if (!isVisible) return null;

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userInfo = localStorage.getItem("userInfo");

  let firstname = "";

  if (userInfo) {
    try {
      const parsedInfo = JSON.parse(userInfo);
      firstname = parsedInfo.firstName || "";
    } catch (error) {
      console.error("Error parsing user info:", error);
    }
  }

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div
      className="absolute right-[-50px] mt-5 w-48 rounded-md shadow-lg bg-slate-100"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
    >
      {!isLoggedIn && (
        <div className="flex flex-col justify-center items-center pt-4 text-gray-700 border-b">
          <CgProfile className="text-4xl" />
          <div className="block text-center py-1 text-gray-700">
            Hello, Guest
          </div>
        </div>
      )}
      {isLoggedIn && (
        <div className="flex flex-col justify-center items-center pt-4 text-gray-700 border-b">
          <CgProfile className="text-4xl" />
          <div className="block text-center py-1 text-gray-700">
            Hello, {firstname}
          </div>
        </div>
      )}
      <div className="py-1">
        <a
          onClick={() => {
            navigate("/home");
          }}
          className="flex items-center  px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer"
        >
          <GoHome className="mr-2" />
          Home
        </a>

        <a
          onClick={() => {
            navigate("/Cart");
          }}
          className="flex items-center  px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer"
        >
          <RiShoppingCart2Line className="mr-2" />
          <span>View Cart</span>
        </a>
        <a
          onClick={handleSignOut}
          className="flex items-center  px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer"
        >
          <GoSignOut className="mr-2" />
          <span>Sign Out</span>
        </a>
      </div>
    </div>
  );
};

export default ProfilePopup;
