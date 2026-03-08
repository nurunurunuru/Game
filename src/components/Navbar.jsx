import React from "react";
import { BsCollectionFill } from "react-icons/bs";
import { FaRegWindowClose } from "react-icons/fa";
import { SiAtlassian, SiGooglehome, SiMaildotcom } from "react-icons/si";
import { Link, NavLink } from "react-router";

const Navbar = ({ containerStyles, toggleMenu, menuOpened }) => {

  const navItems = [
    { to: "/", label: "Home", icon: <SiGooglehome /> },
    { to: "/collection", label: "Players", icon: <BsCollectionFill /> },
    { to: "/about", label: "About", icon: <SiAtlassian /> },
    // { to: "/contact", label: "Contact", icon: <SiMaildotcom /> },
  ];

  return (
    <nav className={containerStyles}>

      {menuOpened && (
        <div className="flex justify-between items-center mb-10">
          <Link to="/" className="text-2xl font-bold text-purple-700">
            🎮 Esports
          </Link>

          <FaRegWindowClose
            onClick={toggleMenu}
            className="text-2xl cursor-pointer hover:text-red-500 transition"
          />
        </div>
      )}

      <div className="flex flex-col xl:flex-row gap-6">

        {navItems.map(({ to, label, icon }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 font-medium transition duration-300 relative group
              ${
                isActive
                  ? "text-purple-700"
                  : "text-gray-700 hover:text-purple-500"
              }`
            }
          >
            <span className="text-lg">{icon}</span>

            {label}

            {/* hover underline */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-700 transition-all duration-300 group-hover:w-full"></span>

          </NavLink>
        ))}

      </div>
    </nav>
  );
};

export default Navbar;