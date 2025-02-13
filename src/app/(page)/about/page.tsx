import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import BookAppointment from "@/app/_components/BookAppointment";
import Image from "next/image";
import {
  banner,
  bigTeams,
  coreValues,
  founder,
  MissDebby,
  MissDevi,
  MissEcha,
  MissEllin,
  MissFebby,
  MissHesti,
  missionBackground,
  MissKayla,
  MissNurma,
  MissOktha,
  MissSelvi,
  MissSepti,
  MissWinda,
  MrsSiska,
  SirAdit,
  visionBackground,
} from "@/app/assets/about";
import RoundedIcon from "@/app/_components/RoundedIcon";
import { aboutPageCoreValues } from "@/app/assets/user-data";

const teachers = [
  {
    image: {
      url: MrsSiska,
      alt: "Mrs. Siska",
      position: "object-top",
    },
    name: "Mrs. Siska",
    position: "Finance Accounting",
  },
  {
    image: {
      url: MissKayla,
      alt: "Miss Kayla",
      position: "object-center",
    },
    name: "Miss Kayla",
    position: "Administration",
  },
  {
    image: {
      url: MissFebby,
      alt: "Miss Febby",
      position: "object-center",
    },
    name: "Miss Febby",
    position: "Integration Therapist",
  },
  {
    image: {
      url: MissSelvi,
      alt: "Miss Selvi",
      position: "object-top",
    },
    name: "Miss Selvi",
    position: "Integration Therapist",
  },
  {
    image: {
      url: MissSepti,
      alt: "Miss Septi",
      position: "object-top",
    },
    name: "Miss Septi",
    position: "Integration Therapist",
  },
  {
    image: {
      url: MissOktha,
      alt: "Miss Oktha",
      position: "object-[50%_5%]",
    },
    name: "Miss Oktha",
    position: "Integration Therapist",
  },
  {
    image: {
      url: MissEllin,
      alt: "Miss Ellyn",
      position: "object-center",
    },
    name: "Miss Ellyn",
    position: "Integration Therapist",
  },
  {
    image: {
      url: SirAdit,
      alt: "Sir Adit",
      position: "object-center",
    },
    name: "Sir Adit",
    position: "Integration Therapist",
  },
  {
    image: {
      url: MissDevi,
      alt: "Miss Devi",
      position: "object-[50%_40%]",
    },
    name: "Miss Devi",
    position: "Physio Therapist",
  },
  {
    image: {
      url: MissNurma,
      alt: "Miss Nurma",
      position: "object-center",
    },
    name: "Miss Nurma",
    position: "Daycare Teacher",
  },
  {
    image: {
      url: MissWinda,
      alt: "Miss Winda",
      position: "object-[50%_25%]",
    },
    name: "Miss Winda",
    position: "Daycare Teacher",
  },
  {
    image: {
      url: MissDebby,
      alt: "Miss Debby",
      position: "object-center",
    },
    name: "Miss Debby",
    position: "Daycare Teacher",
  },
  {
    image: {
      url: MissHesti,
      alt: "Miss Hesti",
      position: "object-center",
    },
    name: "Miss Hesti",
    position: "Daycare Teacher",
  },
  {
    image: {
      url: MissEcha,
      alt: "Miss Echa",
      position: "object-[50%_20%]",
    },
    name: "Miss Echa",
    position: "Daycare Teacher",
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main className="px-16">
        <div className="mt-10 w-full flex justify-center items-center">
          <Image
            width={1280}
            height={300}
            src={banner}
            className="w-full"
            priority={true}
            alt="Banner Image"
          />
        </div>
        <div className="flex flex-row gap-10 mt-10">
          <div className="w-48 h-48">
            <Image
              width={300}
              height={300}
              src={founder}
              className="w-full"
              alt="Banner Image"
            />
          </div>
          <div className="flex-1">
            <p>
              <span className="font-bold text-card-1">
                Focus Learning Support Center
              </span>{" "}
              has been dedicated to empowering exceptional children and
              adolescents since 2015. Originally founded as Full Heart Center,
              our institution has evolved over the years to become a specialized
              educational center focused on unlocking the full potential of
              every child.
            </p>
            <p className="mt-5">
              Under the visionary leadership of the{" "}
              <span className="font-bold text-card-1 italic">late Dwi Ana</span>
              , we underwent a rebranding in 2020 to better reflect our
              commitment to providing comprehensive and innovative therapeutic
              approaches. Today, Focus Learning Support Center is a beacon of
              hope for families seeking specialized care for their children with
              special needs.
            </p>
          </div>
        </div>
        <div className="mt-20 flex flex-row gap-5">
          <div
            className="w-1/2 h-72 flex flex-col justify-end items-start px-10 py-5 gap-3"
            style={{
              backgroundImage: `url('${visionBackground.src}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-2xl font-bold text-secondary-100">
              Our Vision
            </h1>
            <span className="text-neutral-100 italic">
              Unlocking the full potential of children and adolescents through a
              comprehensive and innovative therapeutic approach.
            </span>
          </div>
          <div
            className="w-1/2 h-72 flex flex-col justify-end items-start px-10 py-5 gap-3"
            style={{
              backgroundImage: `url('${missionBackground.src}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-2xl font-bold text-card-1">Our Mission</h1>
            <span className="text-neutral-100 italic">
              Supporting children and adolescents to grow and develop by
              providing comprehensive and optimal training and education.
            </span>
          </div>
        </div>
        <div className="mt-20 flex flex-col items-center justify-center gap-10">
          <h1 className="text-2xl font-bold">
            <span className="text-gradient">Core Values</span>
          </h1>
          <div className="flex flex-row w-full gap-5 h-80">
            <div className="w-1/2 flex flex-col gap-5">
              {aboutPageCoreValues.map((value, index) => (
                <div key={index} className="flex flex-row items-center gap-3">
                  <div className="w-8">
                    <RoundedIcon src={value.iconSrc} alt={value.altIcon} />
                  </div>
                  <p>
                    <span className="font-bold">{value.title}</span>{" "}
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-1/2">
              <Image
                className="w-full h-full object-cover object-center"
                width={1000}
                height={500}
                src={coreValues}
                alt={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col items-center justify-center gap-10">
          <h1 className="text-2xl font-bold">
            <span className="text-gradient">Our Team</span>
          </h1>
          <div className="bg-team-bg w-full px-14 py-10 grid grid-cols-8 gap-8">
            <div className="w-full h-fit col-span-8">
              <Image
                className="w-full object-cover rounded-lg"
                src={bigTeams}
                alt="Focus learning team"
                width={1000}
                height={500}
              />
            </div>
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className={`${
                  index % 8 === 0 && index !== 0 ? "col-start-2 " : ""
                }flex flex-col items-center justify-start gap-2`}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <Image
                    width={68}
                    height={68}
                    className={`w-full h-full object-cover ${teacher.image.position}`}
                    src={teacher.image.url}
                    alt={teacher.image.alt}
                  />
                </div>
                <span className="font-bold text-lg text-center">
                  {teacher.name}
                </span>
                <span className="text-secondary-100 text-center">
                  {teacher.position}
                </span>
              </div>
            ))}
            <div
              className={`col-start-3 translate-x-3/4 flex flex-col items-center justify-start gap-2`}
            >
              <div className="w-48 h-48 rounded-full overflow-hidden">
                <Image
                  width={68}
                  height={68}
                  className={`w-full h-full object-cover ${teachers[0].image.position}`}
                  src={teachers[0].image.url}
                  alt={teachers[0].image.alt}
                />
              </div>
              <span className="font-bold text-lg text-center">
                {teachers[0].name}
              </span>
              <span className="text-secondary-100 text-center">
                {teachers[0].position}
              </span>
            </div>
            <div
              className={`col-start-6 -translate-x-3/4 flex flex-col items-center justify-start gap-2`}
            >
              <div className="w-48 h-48 rounded-full overflow-hidden">
                <Image
                  width={68}
                  height={68}
                  className={`w-full h-full object-cover ${teachers[0].image.position}`}
                  src={teachers[0].image.url}
                  alt={teachers[0].image.alt}
                />
              </div>
              <span className="font-bold text-lg text-center">
                {teachers[0].name}
              </span>
              <span className="text-secondary-100 text-center">
                {teachers[0].position}
              </span>
            </div>
          </div>
        </div>
      </main>
      <BookAppointment />
      <Footer />
    </>
  );
}
