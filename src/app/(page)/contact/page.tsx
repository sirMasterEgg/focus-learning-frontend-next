import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import Image from "next/image";
import { UserData } from "@/app/assets/user-data";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { banner, locationIcon } from "@/app/assets/contact";
import ContactForm from "@/app/_components/client-components/contact/ContactForm";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="px-6 lg:px-16">
        <div className="mt-10 w-full flex justify-center items-center">
          <Image
            width={1280}
            height={400}
            src={banner}
            className="w-full h-36 lg:h-auto object-cover"
            alt="Banner Image"
          />
        </div>
        <div className="inline-flex flex-col justify-center items-center w-full mt-20 gap-10">
          <div className="inline-flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">
              <span className="text-gradient">We’re Here to Help</span>
            </h1>
          </div>
          <p className="max-w-2xl text-center">
            Whether you have questions, need assistance, or simply want to share
            your experiences, our friendly and knowledgeable team is here to
            support you. {"Don't"} hesitate to reach out to us.
          </p>
        </div>
        <div className="mt-20 flex flex-col gap-5">
          <span className="text-card-1 text-xl font-bold">Contact Us</span>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="grow">
              <ContactForm />
            </div>
            <div className="lg:hidden inline-flex flex-col justify-center items-center w-full gap-1.5">
              <svg width="0" height="0">
                <linearGradient
                  id="whatsapp-color"
                  x1="100%"
                  y1="100%"
                  x2="0%"
                  y2="0%"
                >
                  <stop stopColor="#1FAF38" offset="0%" />
                  <stop stopColor="#60D669" offset="100%" />
                </linearGradient>
              </svg>
              <span className="max-w-2xl text-center">
                If you prefer
                <span className="inline-flex align-top">
                  <RiWhatsappFill className="size-5 mx-1 fill-[url(#whatsapp-color)]" />
                </span>
                WhatsApp, click here to chat with us at{" "}
                {UserData.footerData.contact.whatsapp}
              </span>
              <span className="max-w-2xl text-center">
                or email us to
                <span className="inline-flex align-middle">
                  <MdEmail className="size-5 mx-1 fill-card-1" />
                </span>
                {UserData.footerData.contact.email}
              </span>
            </div>
            <div className="w-auto">
              <iframe
                src="https://www.google.com/maps/embed?&pb=!1m18!1m12!1m3!1d63100.836613816!2d115.1594430319807!3d-8.710316683266063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247e02265f965%3A0xad4e822dd2273c7f!2sFOCUS%20Learning%20Support%20Center!5e0!3m2!1sen!2sid!4v1727601499902!5m2!1sen!2sid"
                className="size-full lg:size-[500px] aspect-square"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="w-full flex flex-col items-end mt-10 gap-5">
                <span className="text-card-1 font-bold text-lg inline-flex gap-2 flex-row items-center justify-center">
                  Visit Us {UserData.footerData.openingHours.day}
                  <Image
                    className="w-6 h-6"
                    width={31}
                    height={31}
                    src={locationIcon}
                    alt="Location Icon"
                  />
                </span>
                <span className="max-w-72 italic text-right">
                  {UserData.footerData.address}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:inline-flex flex-col justify-center items-center w-full mt-20 gap-1.5">
          <svg width="0" height="0">
            <linearGradient
              id="whatsapp-color-desktop"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#1FAF38" offset="0%" />
              <stop stopColor="#60D669" offset="100%" />
            </linearGradient>
          </svg>
          <span className="max-w-2xl text-center">
            If you prefer
            <span className="inline-flex align-top">
              <RiWhatsappFill className="size-5 mx-1 fill-[url(#whatsapp-color-desktop)]" />
            </span>
            WhatsApp, click here to chat with us at{" "}
            {UserData.footerData.contact.whatsapp}
          </span>
          <span className="max-w-2xl text-center">
            or email us to
            <span className="inline-flex align-middle">
              <MdEmail className="size-5 mx-1 fill-card-1" />
            </span>
            {UserData.footerData.contact.email}
          </span>
        </div>
      </main>
      <Footer />
    </>
  );
}
