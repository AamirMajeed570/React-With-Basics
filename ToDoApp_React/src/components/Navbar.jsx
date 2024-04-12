import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-slate-700 text-white">
      <div className="logo">
        <span className="font-bold text-xl mx-8">iTask</span>
      </div>
      <ul className="flex gap-10 mx-9">
        <li className="cursor-pointer my-8 font-semibold text-xl hover:font-bold transition-all transition-duration">Home</li>
        <li className="cursor-pointer my-8 font-semibold text-xl hover:font-bold transition-all transition-duration">Your Tasks</li>
      </ul>
    </nav>
  );
};

export default Navbar;
