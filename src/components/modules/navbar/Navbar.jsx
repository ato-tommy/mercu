import React, {  useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const menuItems = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Products", path: "/products" },
    // { id: 3, title: "Projects", path: "/projects" },
    { id: 4, title: "Services", path: "/services" },
    { id: 5, title: "About Us", path: "/aboutus" },
    { id: 6, title: "Contact Us", path: "/contactus" },
  ];

  const [showMenu, setShowMenu] = useState(false);
  const [showBars, setShowBars] = useState(true);
  const [pageOffset, setPageOffset] = useState();
  const navContainer = useRef();
  window.addEventListener("scroll", () => {
    setPageOffset(window.pageYOffset);
  });



  return (
    <>
      <div
        className="navbarWrapper w-full fixed top-0 left-0 z-50 "
        ref={navContainer}
        style={{backgroundColor:`${pageOffset > 0 ? '#333' : ''}`}}
      >
        <div className=" w-full flex justify-between">
          <div className="logo flex justify-center items-center ">
            <img src="./logo.png" className="w-56" alt="" />
          </div>
          {showBars && (
            <div className="block lg:hidden text-white text-xl absolute top-6 right-6 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setShowMenu(!showMenu);
                  setShowBars(false);
                }}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 hw-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          )}

          {!showBars && (
            <div
              className={
                showMenu
                  ? "block lg:hidden text-white text-xl absolute top-6 right-6"
                  : "hidden lg:hidden text-white text-xl absolute top-6 right-6"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
                onClick={() => {
                  setShowMenu(!showMenu);
                  setShowBars(true);
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}

          <div className="navbarItems hidden lg:flex justify-around items-center  w-[75%] ">
            {menuItems.map((item) => (
              <NavLink
                to={item.path}
                key={item.id}
                className={(itemm) =>
                  itemm.isActive
                    ? " block text-amber-700 !text-2xl font-semibold  text-center   py-3 cp"
                    : "text-lg block text-white  text-center text-xl  py-3 cp"
                }
                onClick={() => {
                  setShowMenu(false);
                  setShowBars(true);
                }}
              >
                {item.title}
              </NavLink>
            ))}
            <div className="serachContainer relative">
              <input
                type="text"
                className="rounded-md w-full h-full px-3 py-1"
                placeholder="Search ... "
              />
              <button className="text-gray-600 absolute top-1 right-0 pr-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            showMenu
              ? "block lg:hidden navbar-menu relative"
              : "hidden navbar-menu  relative"
          }
        >
          {menuItems.map((item) => (
            <NavLink
              to={item.path}
              key={item.id}
              className={(itemm) =>
                itemm.isActive
                  ? "text-lg block text-green-500 bg-slate-600 text-center text-xl border border-b border-gray-400 py-3 cp"
                  : "text-lg block text-white bg-slate-600 text-center text-xl border border-b border-gray-400 py-3 cp"
              }
              onClick={() => {
                setShowMenu(false);
                setShowBars(true);
              }}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
