"use client";

import { NavbarData } from "@/app/assets/user-data";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { Fragment, useEffect, useState } from "react";
import SignInOrSignUpFlagMobile from "@/app/_components/auth/SignInOrSignUpFlagMobile";
import { FaAngleDown } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";

export default function MobileNavbarMenu() {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const [openedHref, setOpenedHref] = useState<string[]>([]);

  useEffect(() => {
    if (!open) {
      setOpenedHref([]);
    }
  }, [open]);

  return (
    <>
      <ul className="inline-flex lg:hidden flex-row gap-2 items-center justify-center">
        <>
          {NavbarData.find((item) => item.text === "Donate") && (
            <li>
              <Link
                href="/donate"
                className="border border-secondary-100 rounded-lg px-6 text-secondary-100 hover:bg-secondary-100 hover:text-white transition-all duration-500 py-0.5"
              >
                Donate
              </Link>
            </li>
          )}
        </>
        <li onClick={() => setOpen(!open)}>
          <RxHamburgerMenu className="size-6 text-secondary-100" />
        </li>
        <aside
          className={
            "h-full w-64 bg-sidebar-100 fixed top-0 right-0 z-50 transition-all duration-500 " +
            (open ? "translate-x-0" : "translate-x-full")
          }
        >
          <div className="px-4 pt-16 pb-24 h-[calc(100%_-_8rem)]">
            <div className="flex flex-col h-full items-end justify-center gap-3 text-right">
              <button className="mb-8" onClick={() => setOpen(false)}>
                <IoCloseOutline className="size-8" />
              </button>
              {NavbarData.map((item, index) => {
                if (item.subMenu) {
                  return (
                    <Fragment key={item.href + "-" + index}>
                      <div
                        className={`max-h-7 overflow-hidden transition-all duration-500 ${
                          openedHref.includes(item.href) ? "max-h-full" : ""
                        }`}
                      >
                        <span
                          onClick={() => {
                            if (openedHref.includes(item.href)) {
                              setOpenedHref((prev) =>
                                prev.filter((href) => href !== item.href)
                              );
                            } else {
                              setOpenedHref((prev) => [...prev, item.href]);
                            }
                          }}
                          className={`text-secondary-100 text-lg inline-flex flex-row items-center justify-center gap-2 ${
                            pathname.split("/")[1] === item.href.split("/")[1]
                              ? "font-bold underline-animation after:opacity-100"
                              : ""
                          }`}
                        >
                          {item.text}
                          <FaAngleDown className="size-4" />
                        </span>
                        <div className="flex flex-col gap-2 mt-2">
                          {item.subMenu.map((subItem, subIndex) => (
                            <Link
                              key={subItem.href + "-" + subIndex}
                              href={item.href + subItem.href}
                              className="text-secondary-100"
                            >
                              {subItem.text}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Fragment>
                  );
                }

                return (
                  <Link
                    key={item.href + "-" + index}
                    href={item.href}
                    className={`text-secondary-100 text-lg ${
                      pathname.split("/")[1] === item.href.split("/")[1]
                        ? "font-bold underline-animation after:opacity-100"
                        : ""
                    }`}
                  >
                    {item.text}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="relative w-full h-12">
            <SignInOrSignUpFlagMobile />
          </div>
        </aside>
      </ul>
    </>
  );
}
