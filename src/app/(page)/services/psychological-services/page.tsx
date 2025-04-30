import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import Image from "next/image";
import LinkWithGradientBackground from "@/app/_components/LinkWithGradientBackground";
import Link from "next/link";

export default function PsychologicalServices() {
  return (
    <>
      <Navbar />
      <main className="px-6 lg:px-16">
        <div className="mt-10 w-full flex justify-center items-center">
          <Image
            width={1280}
            height={300}
            src={"https://placehold.co/1280x300"}
            className="w-full h-36 lg:h-auto object-cover"
            priority={true}
            alt="Banner Image"
          />
        </div>
        <div className="mt-10 lg:mt-20 flex flex-col gap-10">
          <h1 className="font-bold text-2xl text-center lg:text-left">
            <span className="text-gradient">
              Supporting Your {"Child's"} Mental and Emotional Well-being
            </span>
          </h1>
          <div className="flex flex-row justify-center">
            <p className="w-full">
              Our comprehensive psychological services are designed to address
              the unique needs of children and adolescents.
            </p>
          </div>
          <div className="flex flex-row gap-8 justify-center">
            <Image
              width={300}
              height={300}
              src={"https://placehold.co/300"}
              className="size-0 lg:size-[calc((100%-2*2rem)/3)] object-cover"
              alt=""
            />
            <Image
              width={300}
              height={300}
              src={"https://placehold.co/300"}
              className="size-52 lg:size-[calc((100%-2*2rem)/3)] object-cover"
              alt=""
            />
            <Image
              width={300}
              height={300}
              className="size-0 lg:size-[calc((100%-2*2rem)/3)] object-cover"
              src={"https://placehold.co/300"}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <div className="w-full">
                Our <span className="font-bold">qualified psychologist</span>{" "}
                offers a range of assessments and counselling services to
                support your {"child's"} mental and emotional health.
              </div>
              <div className="w-full">
                Services Offered:
                <ul className="list-outside list-disc px-8">
                  <li>
                    <span className="font-bold">
                      Child Assessment/Observation:
                    </span>{" "}
                    In-depth evaluation of a {"child's"}
                    cognitive, emotional, and social development.
                  </li>
                  <li>
                    <span className="font-bold">IQ Testing:</span> Assessment of
                    a {"child's"} intellectual abilities.
                  </li>
                  <li>
                    <span className="font-bold">
                      School Psychological Tests:
                    </span>{" "}
                    Evaluation of academic performance, learning difficulties,
                    and accommodations.
                  </li>
                  <li>
                    <span className="font-bold">
                      Psychological Tests (Recruitment, Promotion):
                    </span>{" "}
                    Assessments for job applicants or employees.
                  </li>
                  <li>
                    <span className="font-bold">Academic Counselling:</span>{" "}
                    Guidance and support for academic challenges and success.
                  </li>
                  <li>
                    <span className="font-bold">
                      Psychological Counselling:
                    </span>{" "}
                    Individualized therapy to address emotional and behavioral
                    issues.
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full">
              Our psychologist are committed to providing a safe and supportive
              environment where children can feel comfortable discussing their
              thoughts and feelings. We work closely with parents and educators
              to develop personalized treatment plans that address each{" "}
              {"child's"}
              unique needs.
            </div>

            <div className="flex lg:hidden flex-row gap-8 justify-center">
              <Image
                width={300}
                height={300}
                className="size-[calc((100%-1*2rem)/2)] object-cover"
                src={"https://placehold.co/300"}
                alt=""
              />
              <Image
                width={300}
                height={300}
                className="size-[calc((100%-1*2rem)/2)] object-cover"
                src={"https://placehold.co/300"}
                alt=""
              />
            </div>
          </div>
          <div className="lg:px-16 mt-10">
            <div className="w-11/12 mb-10 lg:mb-0 lg:w-2/3 mx-auto flex flex-col items-center justify-center gap-3">
              <span className="font-bold text-xl text-center">
                Contact us today to{" "}
                <span className="text-gradient">schedule an appointment</span>{" "}
                and discuss your
                {" child's"} specific needs.
              </span>
              <LinkWithGradientBackground
                className="px-5 py-3.5"
                href="/contact"
              >
                Book Appointment
              </LinkWithGradientBackground>
            </div>
          </div>
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
        </div>
      </main>
      <Footer />
    </>
  );
}
