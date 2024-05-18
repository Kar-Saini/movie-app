import React from "react";
import HeaderItem from "./HeaderItem";
import { AiFillHome } from "react-icons/ai";
import { FaCircleInfo } from "react-icons/fa6";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between items-center py-5 px-10 max-w-7xl mx-auto shadow-sm dark:shadow-slate-600 rounded-sm select-none">
      <div className="flex gap-4">
        <HeaderItem title="Home" Icon={AiFillHome} address="/" />
        <HeaderItem title="About" Icon={FaCircleInfo} address="/about" />
      </div>
      <div className="flex items-center gap-6">
        <DarkModeSwitch />
        <Link
          href="/"
          className="hover:scale-110 hover:cursor-pointer transition"
        >
          <span className="text-2xl font-bold tracking-tighter bg-amber-500 p-2 rounded-xl">
            Movie-App
          </span>
        </Link>
      </div>
    </div>
  );
}
