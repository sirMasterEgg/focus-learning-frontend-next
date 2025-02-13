"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LinkWithActive({
  href,
  activeClassName = "text-secondary-100 font-bold",
  inActiveClassName = "",
  children,
}: {
  href: string;
  activeClassName?: string;
  inActiveClassName?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${
        pathname === href ? activeClassName : inActiveClassName
      } underline-animation`}
    >
      {children}
    </Link>
  );
}
