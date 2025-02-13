import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import Image from "next/image";
import LinkWithGradientBackground from "@/app/_components/LinkWithGradientBackground";
import Link from "next/link";
import {
  dayCare1,
  dayCare2,
  dayCare3,
  dayCareTopBanner,
} from "@/app/assets/services";

export default function Daycare() {
  return (
    <>
      <Navbar />
      <main className="px-16">
        <div className="mt-10 w-full flex justify-center items-center">
          <Image
            width={1280}
            height={300}
            src={dayCareTopBanner}
            className="w-full"
            priority={true}
            alt="Banner Image"
          />
        </div>
        <div className="mt-20 flex flex-col gap-10">
          <h1 className="font-bold text-2xl">
            <span className="text-gradient">
              “ Growing Together, Learning Together ”
            </span>
          </h1>
          <div className="flex flex-row justify-center">
            <p className="w-full">
              A specially designed full-day program that offers warm attention,
              high-quality care, and support for the intellectual development of
              children in a safe and structured environment.
            </p>
          </div>
          <div className="flex flex-row gap-8 justify-center">
            <Image width={300} height={300} src={dayCare2} alt="" />
            <Image width={300} height={300} src={dayCare3} alt="" />
            <Image width={300} height={300} src={dayCare1} alt="" />
          </div>
          <div className="flex flex-col gap-8">
            <div className="w-full">
              At <span className="font-bold">Focus Learning’s Daycare</span>, we
              believe in fostering a stimulating and nurturing environment where
              children can grow and learn. Our full-day program offers a variety
              of engaging activities designed to support your {"child's"}{" "}
              development.
            </div>
            <div className="w-full">
              Our Activities Include:
              <ul className="list-outside list-disc px-8">
                <li>
                  <span className="font-bold">Exercise:</span>{" "}
                  <span className="italic">
                    Engage in a variety of physical activities, including yoga,
                    dance, and aerobics.
                  </span>
                </li>
                <li>
                  <span className="font-bold">Arts and crafts:</span>{" "}
                  <span className="italic">
                    Develop fine motor skills, artistic expression, and
                    imagination.
                  </span>
                </li>
                <li>
                  <span className="font-bold">Educational activities:</span>{" "}
                  <span className="italic">
                    Explore various subjects through fun and engaging
                    activities, such as storytelling, puzzles, and experiments.
                  </span>
                </li>
                <li>
                  <span className="font-bold">Outdoor play:</span>{" "}
                  <span className="italic">
                    Enjoy the benefits of fresh air and physical activity in our
                    safe and spacious playground.
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full">
              By participating in these activities, your child will have the
              opportunity to:
              <ul className="list-outside list-disc px-8">
                <li>
                  <span className="font-bold">Develop social skills:</span>{" "}
                  <span className="italic">
                    Interact with peers and learn to share, cooperate, and
                    communicate effectively.
                  </span>
                </li>
                <li>
                  <span className="font-bold">Enhance cognitive skills:</span>{" "}
                  <span className="italic">
                    Strengthen problem-solving, critical thinking, and
                    creativity.
                  </span>
                </li>
                <li>
                  <span className="font-bold">Improve physical fitness:</span>{" "}
                  <span className="italic">
                    Develop motor skills, coordination, and strength.
                  </span>
                </li>
                <li>
                  <span className="font-bold">Foster a love of learning:</span>{" "}
                  <span className="italic">
                    Discover a passion for exploration and discovery.
                  </span>
                </li>
              </ul>
            </div>

            <div className="w-full">
              We believe that a balanced approach to learning and play is
              essential for a {"child's"} holistic development.
            </div>
          </div>
          <div className="px-16 mt-10">
            <div className="w-2/3 mx-auto flex flex-col items-center justify-center gap-3">
              <div className="flex flex-col">
                <span className="text-gradient font-bold text-xl text-center">
                  {"Let's"} make your {"child's"} day brighter.
                </span>{" "}
                <span className="font-bold text-xl text-center">
                  Contact us for enrollment information.
                </span>
              </div>
              <LinkWithGradientBackground
                className="px-5 py-3.5"
                href="/contact"
              >
                Book Appointment
              </LinkWithGradientBackground>
            </div>
          </div>
          <hr className="border-t-[1.5px] h-1.5 my-10" />
          <div className="flex flex-row justify-center gap-16 mb-20">
            <Link
              href="/services/integrated-therapy"
              className="border border-secondary-100 rounded-md px-6 py-2 text-text-60 w-1/4 inline-flex justify-center transition duration-500 hover:bg-text-40 hover:text-secondary-100"
            >
              Integrated Therapy
            </Link>
            <Link
              href="/services/daycare"
              className="border border-secondary-100 rounded-md px-6 py-2 text-text-60 w-1/4 inline-flex justify-center transition duration-500 hover:bg-text-40 hover:text-secondary-100"
            >
              Day Care
            </Link>
            <Link
              href="/services/psychological-services"
              className="border border-secondary-100 rounded-md px-6 py-2 text-text-60 w-1/4 inline-flex justify-center transition duration-500 hover:bg-text-40 hover:text-secondary-100"
            >
              Psychological Services
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
