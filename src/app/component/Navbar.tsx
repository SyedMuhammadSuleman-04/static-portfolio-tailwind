import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="justify-between mt-3">
        <ul className="flex justify-center gap-x-3 items-center ">
          <li>
            <Link
              href={"#home"}
              className=" text-slate-300 sm:text-xl md:p-0 hover:text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"#about"}
              className=" text-slate-300 sm:text-xl md:p-0 hover:text-white"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={"#skills"}
              className=" text-slate-300 sm:text-xl md:p-0 hover:text-white"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className=" text-slate-300 sm:text-xl md:p-0 hover:text-white"
              href={"#contact"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
