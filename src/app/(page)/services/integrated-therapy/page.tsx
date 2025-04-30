import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import Image from "next/image";
import BookAppointment from "@/app/_components/BookAppointment";
import Link from "next/link";
import IntegratedTherapyCollapse from "@/app/_components/client-components/services/IntegratedTherapyCollapse";
import {
  integratedTherapy2,
  integratedTherapy3,
  integratedTherapy4,
  integratedTherapy5,
  integratedTherapyBottomBanner,
  integratedTherapyTopBanner,
} from "@/app/assets/services";

export default function IntegratedTherapy() {
  return (
    <>
      <Navbar />
      <main className="px-6 lg:px-16">
        <div className="mt-10 w-full flex justify-center items-center">
          <Image
            width={1280}
            height={300}
            src={integratedTherapyTopBanner}
            className="w-full h-36 lg:h-auto object-cover"
            priority={true}
            alt="Banner Image"
          />
        </div>
        <div className="mt-10 lg:mt-20 flex flex-col gap-10">
          <h1 className="font-bold text-2xl text-center lg:text-left">
            <span className="text-gradient">
              A Holistic Approach to Child Development
            </span>
          </h1>
          <IntegratedTherapyCollapse />
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full flex flex-row gap-5 lg:block lg:w-40">
              <Image
                width={300}
                height={300}
                className="w-[calc(50%-0.625rem)] lg:w-40 object-cover"
                src={integratedTherapy2}
                alt=""
              />
              <Image
                width={300}
                height={300}
                className="w-[calc(50%-0.625rem)] lg:w-0 lg:hidden object-cover"
                src={integratedTherapy5}
                alt=""
              />
            </div>
            <div className="flex flex-1 flex-col gap-5">
              <p>
                To provide comprehensive care, we combine integrated therapy
                with specialized pediatric physiotherapy services.
              </p>
              <div>
                <p>
                  <span className="font-bold">Pediatric physiotherapy</span> is
                  a specialized field of physical therapy that focuses on the
                  assessment, diagnosis, and treatment of movement disorders and
                  physical impairments in children.
                </p>
                <p>
                  It involves the evaluation and management of various
                  conditions related to:
                </p>
                <ul className="list-disc list-outside italic px-8">
                  <li>
                    <span className="font-bold not-italic">
                      Musculoskeletal system:{" "}
                    </span>
                    Issues with bones, muscles, joints, and ligaments.
                  </li>
                  <li>
                    <span className="font-bold not-italic">
                      Neurological system:{" "}
                    </span>
                    Conditions affecting the brain, spinal cord, and nerves.
                  </li>
                  <li>
                    <span className="font-bold not-italic">
                      Developmental delays:{" "}
                    </span>
                    Delays in reaching developmental milestones.
                  </li>
                  <li>
                    <span className="font-bold not-italic">
                      Congenital anomalies:{" "}
                    </span>
                    Birth defects or abnormalities.
                  </li>
                  <li>
                    <span className="font-bold not-italic">
                      Acquired injuries:{" "}
                    </span>
                    Injuries sustained after birth.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <p className="w-full">
              Our holistic approach to child development combines integrated
              therapy and pediatric physiotherapy to provide comprehensive care.
              Contact us to learn more and discover how we can support your
              {" child's"} journey.
            </p>
          </div>
          <div className="hidden lg:w-full lg:flex flex-row gap-8 justify-center">
            <Image
              width={300}
              height={300}
              className="size-[calc((100%-2*2rem)/3)] object-cover"
              src={integratedTherapy5}
              alt=""
            />
            <Image
              width={300}
              height={300}
              className="size-[calc((100%-2*2rem)/3)] object-cover"
              src={integratedTherapy3}
              alt=""
            />
            <Image
              width={300}
              height={300}
              className="size-[calc((100%-2*2rem)/3)] object-cover"
              src={integratedTherapy4}
              alt=""
            />
          </div>
          <BookAppointment className="px-0" />
          <hr className="hidden lg:block border-t-[1.5px] h-1.5 my-10" />
          <div className="hidden lg:flex flex-row justify-center gap-16 mb-20">
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
          <div className="my-10 lg:mt-0 inline-flex justify-center items-center">
            <Image
              src={integratedTherapyBottomBanner}
              height={300}
              width={1200}
              alt={""}
              className="aspect-13/5 w-full"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
