"use client";
import { useState } from "react";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";
import { integratedTherapy1, integratedTherapy3 } from "@/app/assets/services";
import { Collapse } from "@/app/_components/client-components/Collapse";

export default function IntegratedTherapyCollapse() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="w-full flex flex-row gap-5 lg:block lg:w-40">
        <Image
          width={300}
          height={300}
          className="w-[calc(50%_-_0.625rem)] lg:w-40 object-cover"
          src={integratedTherapy1}
          alt=""
        />
        <Image
          width={300}
          height={300}
          className="w-[calc(50%_-_0.625rem)] lg:w-0 lg:hidden object-cover"
          src={integratedTherapy3}
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col gap-5">
        <p>
          <span
            className={`font-bold transition duration-500 ${
              isOpen ? "text-primary-100" : ""
            }`}
          >
            Integrated therapy
          </span>{" "}
          is a comprehensive approach that combines various therapeutic
          techniques to address the unique needs of children.
        </p>
        <p>
          This holistic approach aims to promote overall well-being and
          development by considering the {"child's"} physical, emotional,
          cognitive, and social factors.
        </p>
        <div>
          <span
            className={`font-bold transition duration-500 ${
              isOpen ? "text-secondary-100" : ""
            }`}
          >
            Benefits of Integrated Therapy:
          </span>
          <ul className="list-disc list-outside italic px-8">
            <li>Improved sensory processing</li>
            <li>Enhanced communication and social skills</li>
            <li>Improved motor skills</li>
            <li>Increased independence</li>
            <li>Enhanced emotional regulation</li>
            <li>Improved behavior</li>
            <li>Personalized approach</li>
          </ul>
        </div>
        <Collapse
          isOpen={isOpen}
          className={`flex flex-col gap-5`}
          // className={`transition-all duration-500 overflow-y-hidden ${
          //   isOpen ? "max-h-full ease-in" : "max-h-0 ease-out"
          // } flex flex-col gap-5`}
        >
          <p>
            Our integrated therapy program includes sensory integration,
            communication skills , and independence skills training.
          </p>
          <div>
            <span className="font-bold">Sensory Integration:</span> Engaging
            activities that stimulate the senses and help children develop
            better sensory processing. Examples include:
            <ul className="list-outside list-disc px-8">
              <li>
                Monkey bars: Promote balance, coordination, and upper body
                strength.
              </li>
              <li>
                Balance board: Enhance balance, coordination, and
                proprioception.
              </li>
              <li>
                Sensory bins: Explore different textures, materials, and scents.
              </li>
            </ul>
          </div>
          <div>
            <span className="font-bold">
              Language and Communication Skills:
            </span>{" "}
            Tailored activities to improve speech, language, and social skills.
            This includes:
            <ul className="list-disc list-outside px-8">
              <li>
                Storytelling: Encouraging children to create and share their own
                stories.
              </li>
              <li>
                Role-playing: Practicing social interactions and communication
                skills, including sharing, taking turns, and playing
                cooperatively.
              </li>
              <li>
                Speech exercises: Improving articulation, pronunciation, and
                fluency.
              </li>
            </ul>
          </div>
          <div>
            <span className="font-bold">Independence Skills Training:</span>{" "}
            Practical activities to develop daily living skills and promote
            independence. Examples include:
            <ul className="list-outside list-disc px-8">
              <li>
                Worksheet activities: Practicing academic skills and following
                instructions.
              </li>
              <li>
                Self-care skills: Learning to dress, eat, and perform personal
                hygiene tasks.
              </li>
              <li>
                Social skills: Developing skills like sharing, taking turns,
                following rules, and collaborating with others.
              </li>
            </ul>
          </div>
        </Collapse>
        <div className="inline-flex w-full flex-row justify-end">
          <svg width="0" height="0">
            <linearGradient
              id="text-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#0096fe" offset="0%" />
              <stop stopColor="#2dbd6e" offset="100%" />
            </linearGradient>
          </svg>
          <button
            onClick={() => handleCollapse()}
            className="inline-flex flex-row gap-2 items-center italic bg-clip-text bg-gradient-to-r from-primary-100 to-secondary-100 group"
          >
            <span className="transition duration-500 text-text-60 group-hover:text-transparent">
              {isOpen
                ? "I understand. Click here to hide details"
                : "Learn More About Integrated Therapy"}
              {/*Learn More About Integrated Therapy*/}
            </span>
            {/*<span
              className={`${
                isOpen ? "opacity-100" : "opacity-0"
              } transition duration-500 text-text-60 group-hover:text-transparent`}
            >
              I understand. Click here to hide details
            </span>*/}

            <span className="relative w-4 h-4">
              <FaAngleDown
                className={`${
                  isOpen ? "rotate-180" : ""
                } rotate-0 opacity-100 group-hover:opacity-0 absolute w-full h-full transition duration-500 fill-text-60`}
              />
              <FaAngleDown
                className={`${
                  isOpen ? "rotate-180" : ""
                } rotate-0 opacity-0 group-hover:opacity-100 absolute w-full h-full transition duration-500 fill-[url(#text-gradient)]`}
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
