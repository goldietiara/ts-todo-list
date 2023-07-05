import React from "react";

const NavBar = () => {
  return (
    <nav className=" bg-black text-white font-mono w-full h-fit py-2 px-5 flex justify-between">
      <div className=" font-medium hover:underline cursor-pointer">
        devbyodi
      </div>
      <div className=" hover:underline cursor-pointer">todo list app</div>
    </nav>
  );
};

export default NavBar;
