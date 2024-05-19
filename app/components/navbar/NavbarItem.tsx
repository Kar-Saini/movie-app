"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { clsx } from "clsx";

import React from "react";

export default function NavbarItem({
  title,
  fetchParam,
}: {
  title: string;
  fetchParam: string;
}) {
  const params = useSearchParams();
  console.log(params.get("genre") === fetchParam);
  return (
    <Link
      href={`/?genre=${fetchParam}`}
      className={clsx(
        "font-semibold text-lg hover:cursor-pointer hover:scale-105 transition hover:font-bold ",
        params.get("genre") === fetchParam &&
          "underline underline-offset-8 decoration-amber-600 decoration-4 text-xl"
      )}
    >
      {title}
    </Link>
  );
}
