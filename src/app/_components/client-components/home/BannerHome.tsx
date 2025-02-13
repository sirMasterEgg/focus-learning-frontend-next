"use client";
import Image from "next/image";
import { banner, banner1, banner2 } from "@/app/assets/home";
import { useEffect, useState } from "react";

const bannerImages = [
  {
    image: banner2,
    alt: "Banner Image",
  },
  {
    image: banner,
    alt: "Banner Image",
  },
  {
    image: banner1,
    alt: "Banner Image",
  },
];

export default function BannerHome() {
  const [activeBanner, setActiveBanner] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % bannerImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-10 w-full flex justify-center items-center relative">
      {bannerImages.map((banner, i) => {
        return (
          <Image
            key={i}
            src={banner.image}
            className={`w-full ${
              activeBanner === i ? "opacity-100" : "opacity-0 absolute"
            } transition-all duration-500 ease-in-out`}
            alt={banner.alt}
          />
        );
      })}
    </div>
  );
}
