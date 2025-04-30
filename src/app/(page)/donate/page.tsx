import Navbar from "@/app/_components/Navbar";
import Image from "next/image";
import Footer from "@/app/_components/Footer";
import { donationBanner, donationBannerBottom } from "@/app/assets/donations";
import Link from "next/link";
import DonationList from "@/app/_components/client-components/donation/DonationList";

export default async function AllDonationPage() {
  return (
    <>
      <Navbar />
      <main className="px-6 lg:px-16">
        <div className="mt-10 w-full flex justify-center items-center">
          <Image
            width={1280}
            height={300}
            src={donationBanner}
            className="w-full h-36 lg:h-auto object-cover"
            priority={true}
            alt="Banner Image"
          />
        </div>
        <div className="inline-flex flex-col justify-center items-center w-full my-10 lg:my-20 gap-10">
          <div className="inline-flex flex-col items-center justify-center text-center lg:text-left">
            <h1 className="text-3xl font-bold text-gradient">
              Give the Gift of Hope: Donate to Our Therapy Center
            </h1>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center justify-items-center min-h-[calc(100vh_-_122px_-_8rem_-_3rem_-_5rem_-_0rem)]">
            <DonationList />
          </div>
          <div
            className="w-full h-48 bg-cover relative mt-10"
            style={{
              backgroundImage: `url('${donationBannerBottom.src}')`,
            }}
          >
            <Image
              src={donationBannerBottom}
              className="w-full h-full object-fill"
              alt={""}
            />
            <Link
              href="/contact"
              className="absolute top-[calc(50%_+_20%)] left-[calc(50%_-_9rem)] gradient-background rounded-lg overflow-hidden"
            >
              <div className="px-4 py-2 bg-secondary-100 text-white font-semibold transition duration-500 hover:bg-secondary-100/20">
                Contact Us
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
