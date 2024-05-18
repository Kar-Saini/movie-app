import React from "react";
import HeaderItem from "./HeaderItem";
import { AiFillHome } from "react-icons/ai";
import { FaCircleInfo } from "react-icons/fa6";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-5 max-w-6xl mx-auto shadow-sm">
      <div className="flex gap-4">
        <HeaderItem title="Home" Icon={AiFillHome} address="/" />
        <HeaderItem title="About" Icon={FaCircleInfo} address="/about" />
      </div>
      <Link
        href="/"
        className="hover:scale-110 hover:cursor-pointer transition"
      >
        <span className="text-2xl font-bold tracking-tighter bg-amber-500 p-2 rounded-xl">
          Movie-App
        </span>
      </Link>
    </div>
  );
}
