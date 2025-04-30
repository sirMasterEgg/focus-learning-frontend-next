import {
  facebook,
  floatingWhatsappLogo,
  instagram,
  linkedin,
  union,
  whiteLogo,
} from "@/app/assets/footer";
import Image from "next/image";
import { UserData } from "@/app/assets/user-data";
import Link from "next/link";

export default function Footer({
  footerBackgroundColor = "",
}: {
  footerBackgroundColor?: string;
}) {
  return (
    <>
      <footer className={`relative pt-[122px] ${footerBackgroundColor}`}>
        <div
          style={{
            backgroundImage: `url('${union.src}')`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            height: "122px",
            width: "100%",
          }}
          className="absolute top-1 left-0"
        ></div>
        <div className="bg-footer text-neutral-100 px-6 lg:px-16 py-8 flex flex-col lg:grid lg:grid-cols-4 gap-4 relative">
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Visit</h1>
            <p className="text-sm text-text-60">
              {UserData.footerData.address}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Connect</h1>
            <div className="text-sm inline-flex flex-col text-text-60">
              <span>Whatsapp :</span>
              <span>{UserData.footerData.contact.whatsapp}</span>
            </div>
            <div className="text-sm inline-flex flex-col text-text-60">
              <span>Email :</span>
              <span>{UserData.footerData.contact.email}</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Opening Hours</h1>
            <div className="text-sm inline-flex flex-col text-text-60">
              <span>{UserData.footerData.openingHours.day}</span>
              <span>{UserData.footerData.openingHours.time}</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Socials</h1>
            <div className="text-sm inline-flex flex-row gap-3">
              <Link href={UserData.footerData.link.facebook}>
                <Image src={facebook} alt="Icon Facebook" className="w-5 h-5" />
              </Link>
              <Link href={UserData.footerData.link.instagram}>
                <Image
                  src={instagram}
                  alt="Icon Instagram"
                  className="w-5 h-5"
                />
              </Link>
              <Link href={UserData.footerData.link.linkedin}>
                <Image src={linkedin} alt="Icon Linkedin" className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <Link
            href={UserData.footerData.link.home}
            className="absolute -top-10 left-[calc(50%-128px/2)] bottom-auto right-auto lg:top-auto lg:left-auto lg:bottom-4 lg:right-12"
          >
            <div
              style={{
                backgroundImage: `url('${whiteLogo.src}')`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                width: "128px",
                height: "42px",
              }}
              className="brightness-[80%] hover:brightness-100 transition-all duration-500"
            ></div>
          </Link>
        </div>
        <div className="bg-footer-accent px-6 lg:px-16">
          <p className="text-center lg:text-right text-neutral-100 text-sm py-2">
            © 2024 Copyright by Focus Learning Support Center
          </p>
        </div>
      </footer>
      <Link
        className="hidden lg:block"
        href={UserData.footerData.contact.whatsapp}
      >
        <div className="fixed z-10 bottom-10 right-10 rounded-full p-4 bg-floating-whatsapp w-16 h-16 group">
          <Image
            alt="logo whatsapp floating"
            src={floatingWhatsappLogo}
            className="w-full h-full"
          />
          <span className="absolute whitespace-nowrap top-[calc(50%-1rem)] right-[90%] rounded-l-lg px-4 py-1 bg-floating-whatsapp max-w-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-xs transition-all duration-500">
            Need Assistance? Chat us now!
          </span>
        </div>
      </Link>
    </>
  );
}
