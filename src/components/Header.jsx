import React, { useState, useContext } from "react";
import { Link } from "react-router";
import Navbar from "./Navbar";
import { FaBarsStaggered, FaRegCircleUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { GiBeachBag } from "react-icons/gi";
import { TbArrowNarrowRight } from "react-icons/tb";
import { ShopContext } from "../context/ShopContext";

const Header = () => {

  const { setShowSearch, getCartCount, navigate, token, setToken } = useContext(ShopContext);

  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
  };

  return (

    <header className="w-full bg-purple-50/70 backdrop-blur-md sticky top-0 z-50 border-b border-purple-700 shadow-sm">

      <div className="max-padd-container flexBetween py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-purple-700">
          🎮 Esports
        </Link>

        {/* Navbar */}
        <div className="flex-1 flex justify-center">
          <Navbar
            menuOpened={menuOpened}
            toggleMenu={toggleMenu}
            containerStyles={`${
              menuOpened
                ? "flex flex-col gap-y-6 h-screen w-3/4 max-w-xs bg-white shadow-xl fixed top-0 left-0 px-8 py-10 z-40"
                : "hidden xl:flex gap-x-10 items-center"
            }`}
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {!menuOpened && (
            <FaBarsStaggered
              onClick={toggleMenu}
              className="xl:hidden text-2xl cursor-pointer"
            />
          )}

          {/* Search */}
          <FaSearch
            onClick={() => setShowSearch((prev) => !prev)}
            className="text-lg cursor-pointer hover:text-purple-500 transition"
          />

          {/* Cart */}
          <Link to="/cart" className="relative">

            <GiBeachBag className="text-[26px]" />

            <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs w-5 h-5 flexCenter rounded-full">
              {getCartCount()}
            </span>

          </Link>

          {/* Profile */}
          <div className="relative group">

            <FaRegCircleUser
              onClick={() => !token && navigate("/login")}
              className="text-2xl cursor-pointer"
            />

            {token && (
              <ul className="absolute right-0 top-8 bg-white shadow-lg rounded-lg p-3 w-36 hidden group-hover:flex flex-col">

                <li
                  onClick={() => navigate("/orders")}
                  className="flexBetween cursor-pointer hover:text-yellow-500"
                >
                  <p>Orders</p>
                  <TbArrowNarrowRight />
                </li>

                <hr className="my-2" />

                <li
                  onClick={logout}
                  className="flexBetween cursor-pointer hover:text-red-500"
                >
                  <p>Logout</p>
                  <TbArrowNarrowRight />
                </li>

              </ul>
            )}

          </div>

        </div>

      </div>

    </header>

  );
};

export default Header;