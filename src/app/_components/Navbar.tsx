import Image from "next/image";
import { mainLogo } from "@/app/assets/navbar";
import LinkWithActive from "@/app/_components/client-components/LinkWithActive";
import Link from "next/link";
import DropdownActive from "@/app/_components/client-components/DropdownActive";
import { NavbarData } from "@/app/assets/user-data";

export default function Navbar() {
  return (
    <>
      <a href="/auth/login">
        <div className="flex w-full relative h-12">
          <div className="absolute bg-card-1 px-6 py-3 top-0 right-16 rounded-b-lg inline-flex justify-center items-center text-neutral-100 gap-1">
            <div className="font-bold">
              Sign In <span className="font-normal">or</span> Create Account
            </div>
          </div>
        </div>
      </a>
      <nav className="flex flex-row justify-between px-16 py-8 items-center sticky top-0 z-30 bg-white/95">
        <Link href="/">
          <Image
            src={mainLogo}
            alt={"Main logo"}
            priority={true}
            className="w-32"
          />
        </Link>
        <ul className="inline-flex flex-row gap-10 items-center justify-center">
          {NavbarData.map((item, index) => {
            if (item.subMenu) {
              return (
                <DropdownActive
                  key={item.href + "-" + index}
                  href={item.href}
                  menu={item.text}
                  menuItems={item.subMenu}
                />
              );
            }

            if (item.text === "Donate") {
              return (
                <Link
                  key={item.href + "-" + index}
                  href="/donate"
                  className="border border-secondary-100 rounded-full px-4 text-secondary-100 hover:bg-secondary-100 hover:text-white transition-all duration-500 py-1"
                >
                  <li>Donate</li>
                </Link>
              );
            }

            return (
              <LinkWithActive key={item.href + "-" + index} href={item.href}>
                <li>{item.text}</li>
              </LinkWithActive>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
