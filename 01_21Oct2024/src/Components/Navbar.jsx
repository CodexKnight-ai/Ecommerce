import React from "react";

function Navbar() {
  return (
    <nav className="flex w-screen h-[8vh] fixed top-0 z-20 ">
      <div className="w-[30%] bg-black h-full flex items-center justify-center gap-6">
        <span className="h-full w-auto">
          <img
            className="h-full w-auto"
            src="/image.png"
            alt="Prithvi Steel Art Logo"
          />
        </span>
        <span className="text-2xl text-white">PRITHVI STEEL ART</span>
      </div>
      <div className="w-[70%] bg-[#252323] h-full flex justify-between px-10">
        <ul className="flex gap-10 items-center h-full text-white">
          <li className="cursor-pointer hover:underline hover:decoration-yellow-500">
            <a href="#home">HOME</a>
          </li>
          <li className="cursor-pointer hover:underline hover:decoration-yellow-500">
            <a href="#shop">SHOP</a>
          </li>
          <li className="cursor-pointer hover:underline hover:decoration-yellow-500">
            <a href="#about">ABOUT</a>
          </li>
        </ul>
        <div className="w-auto h-full justify-self-end">
          <a href="#login">
            <img className="h-full w-auto" src="/login.png" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
