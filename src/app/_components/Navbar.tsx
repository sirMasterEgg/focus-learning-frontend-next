import Image from "next/image";
import { mainLogo } from "@/app/assets/navbar";
import LinkWithActive from "@/app/_components/client-components/LinkWithActive";
import Link from "next/link";
import DropdownActive from "@/app/_components/client-components/DropdownActive";
import { NavbarData } from "@/app/assets/user-data";
import SignInFlag from "@/app/_components/auth/SignInOrSignUpFlag";
import MobileNavbarMenu from "@/app/_components/MobileNavbarMenu";

export default function Navbar() {
  return (
    <>
      <SignInFlag />
      <nav className="flex flex-row justify-between px-6 py-3 lg:px-16 lg:py-8 items-center sticky top-0 z-30 bg-white/95">
        <Link href="/">
          <Image
            src={mainLogo}
            alt={"Main logo"}
            priority={true}
            className="w-32"
          />
        </Link>
        <ul className="lg:inline-flex flex-row gap-10 items-center justify-center hidden">
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
                <li key={item.href + "-" + index}>
                  <Link
                    key={item.href + "-" + index}
                    href="/donate"
                    className="border border-secondary-100 rounded-full px-4 text-secondary-100 hover:bg-secondary-100 hover:text-white transition-all duration-500 py-1"
                  >
                    Donate
                  </Link>
                </li>
              );
            }

            return (
              <li key={item.href + "-" + index}>
                <LinkWithActive key={item.href + "-" + index} href={item.href}>
                  {item.text}
                </LinkWithActive>
              </li>
            );
          })}
        </ul>
        <MobileNavbarMenu />
      </nav>
    </>
  );
}
