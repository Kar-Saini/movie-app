import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
interface HeaderItemProps {
  title: string;
  address: string;
  Icon: IconType;
}

export default function HeaderItem({ title, Icon, address }: HeaderItemProps) {
  return (
    <Link
      href={address}
      className="hover:scale-105 hover:cursor-pointer transition hover:font-semibold"
    >
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
}
