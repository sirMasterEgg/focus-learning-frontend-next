"use client";

import { usePathname } from "next/navigation";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";

type MenuItem = {
  href: string;
  text: string;
};

export default function DropdownActive({
  href,
  className = "text-secondary-100 font-bold",
  menu,
  menuItems,
}: {
  href: string;
  menu: string;
  className?: string;
  menuItems: MenuItem[];
}) {
  const pathname = usePathname();

  return (
    <>
      <li className="relative group">
        <span
          className={`inline-flex flex-row cursor-default items-center gap-1 ${
            href === "/" + pathname.split("/")[1] ? className : ""
          } `}
        >
          {menu}
          <FaAngleDown />
        </span>
        <div className="group-hover:opacity-100 group-hover:z-10 -z-10 opacity-0 group-hover:translate-y-0 -translate-y-2.5 transition-all duration-500 absolute top-full -left-2 min-w-[calc(100%_+_1rem)] w-48 border border-secondary-100 bg-neutral-100 rounded-lg shadow-2xl">
          <ul className="flex flex-col py-2">
            {menuItems.map((item, index) => (
              <Link key={item.href + "-" + index} href={href + item.href}>
                <li className="px-2 hover:bg-secondary-100 hover:text-neutral-100 transition duration-500 cursor-pointer">
                  {item.text}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </li>
    </>
  );
}
