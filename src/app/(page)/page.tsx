import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import Image from "next/image";
import {
  homeUser,
  mind,
  plant,
  service,
  service1,
  service2,
} from "@/app/assets/home";
import LinkWithGradientBackground from "@/app/_components/LinkWithGradientBackground";
import TestimonialCard from "@/app/_components/client-components/TestimonialCard";
import BookAppointment from "@/app/_components/BookAppointment";
import BannerHome from "@/app/_components/client-components/home/BannerHome";

const data = {
  service: [
    {
      imageUrl: service,
      imageAlt: "Integrated Therapy",
      title: "Integrated Therapy",
    },
    {
      imageUrl: service1,
      imageAlt: "Day Care",
      title: "Day Care",
    },
    {
      imageUrl: service2,
      imageAlt: "Phsycological Services",
      title: "Phsycological Services",
    },
  ],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-6 lg:px-16">
        <BannerHome />
        <div className="inline-flex flex-col justify-center items-center w-full mt-20 gap-10">
          <div className="inline-flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-bold">
              Your <span className="text-gradient">Child’s Future</span>,
            </h1>
            <h1 className="text-3xl font-bold">
              It’s <span className="text-gradient">Our Focus</span>
            </h1>
          </div>
          <p className="max-w-2xl text-center">
            As the 1<sup>st</sup> integrated therapy center in Denpasar, Bali,
            we offer a nurturing and supportive environment where your child{" "}
            <span className="font-bold text-card-1">can thrive</span> and{" "}
            <span className="font-bold text-card-1">reach</span> their{" "}
            <span className="font-bold text-card-1">full potential</span>. Our
            personalized approach and experienced therapists provide a safe and
            stimulating space for learning, growth, and development.
          </p>
          <div className="inline-flex gap-3">
            <Image className="w-16" src={homeUser} alt="Safe" />
            <Image className="w-16" src={plant} alt="Growth" />
            <Image className="w-16" src={mind} alt="Learning" />
          </div>
          <LinkWithGradientBackground href="/about">
            Learn More
          </LinkWithGradientBackground>
        </div>
        <div className="mt-20 flex flex-col lg:grid lg:grid-cols-3 gap-5">
          {data.service.map((service, index) => (
            <div key={index} className="w-full relative">
              <Image
                width={400}
                height={400}
                src={service.imageUrl}
                className="w-full h-36 lg:h-full object-cover"
                alt={service.imageAlt}
              />
              <div className="absolute opacity-0 bg-black/20 transition duration-500 w-full h-full top-0 left-0 hover:opacity-100 inline-flex justify-center items-center lg:items-end">
                <span className="text-white text-2xl font-bold p-5">
                  {service.title}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="inline-flex flex-col justify-center items-center w-full mt-20 gap-10">
          <div className="inline-flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-bold">
              Therapy That <span className="text-gradient">Supports</span>
            </h1>
            <h1 className="text-3xl font-bold">
              Your <span className="text-gradient">Child’s Unique Needs</span>
            </h1>
          </div>
          <p className="max-w-2xl text-center">
            We believe every child has unlimited potential. At Focus Learning
            Center, our{" "}
            <span className="font-bold text-card-1">
              experienced therapists
            </span>{" "}
            work closely with{" "}
            <span className="font-bold text-card-1">
              qualified psychologist
            </span>{" "}
            to provide personalized care tailored to individual needs and
            learning styles.
          </p>
        </div>
      </main>
      <TestimonialCard />
      <BookAppointment />
      <Footer />
    </>
  );
}
