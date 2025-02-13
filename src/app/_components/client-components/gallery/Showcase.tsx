"use client";

import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import {
  daycare,
  daycare1,
  daycare2,
  daycare3,
  oneOnOneRoom,
  oneOnOneRoom1,
  oneOnOneRoom2,
  oneOnOneRoom3,
  siRoom,
  siRoom1,
  siRoom2,
  siRoom3,
} from "@/app/assets/facilities";

export default function Showcase() {
  const [showIndex, setShowIndex] = useState<number>(0);
  const [isNext, setIsNext] = useState<boolean>(false);
  const data = [
    {
      title: "Sensory Integration Room",
      description:
        "A sensory integration room is a specially designed space designed to provide a controlled environment for children to explore and interact with various sensory stimuli. It is often used as part of occupational therapy for children with sensory processing disorders or other developmental challenges. Sensory integration therapy is a valuable tool for helping children with sensory processing disorders and other developmental challenges. By providing a stimulating and supportive environment, sensory integration rooms can help children develop essential skills and improve their overall quality of life.",
      images: [siRoom, siRoom1, siRoom2, siRoom3],
    },
    {
      title: "One on One Classroom",
      description:
        "Our one-on-one classrooms offer a personalized and supportive learning environment where your child can thrive. In these cozy and comfortable spaces, your child will receive undivided attention from our experienced therapists. Our classrooms are equipped with everything your child needs to succeed, including comfortable seating, ample natural light, and a variety of learning materials. With one-on-one instruction, your child can learn at their own pace and receive tailored guidance to address their individual needs and learning style.",
      images: [oneOnOneRoom, oneOnOneRoom3, oneOnOneRoom1, oneOnOneRoom2],
    },
    {
      title: "Daycare Class",
      description:
        "Our daycare classroom is a bright and inviting space designed to foster learning and development. Equipped with ample natural light, comfortable seating, and interactive learning tools, our classroom provides a stimulating environment for children of all ages. From sensory exploration and group activities to individual learning and rest, our classroom offers a variety of opportunities for children to grow and thrive. With a focus on safety, comfort, and engagement, our daycare classroom is the perfect place for your child to learn and play.",
      images: [daycare, daycare1, daycare3, daycare2],
    },
  ];

  const handleNext = () => {
    setShowIndex((prev) => (prev + 1) % data.length);
  };

  return (
    <>
      <svg width="0" height="0">
        <linearGradient id="text-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#0096fe" offset="0%" />
          <stop stopColor="#2dbd6e" offset="100%" />
        </linearGradient>
      </svg>
      <div className="w-full overflow-x-hidden relative h-[500px]">
        {data.map((item, index) => {
          const isCurrent = showIndex === index;
          const isLeaving =
            (showIndex - 1 + data.length) % data.length === index;

          return (
            <div
              key={index}
              className={`absolute h-auto w-full overflow-y-hidden transition-all duration-500 ${
                isCurrent
                  ? "translate-x-0 opacity-100"
                  : isLeaving
                  ? "translate-x-full opacity-0"
                  : "-translate-x-full opacity-0"
              }`}
            >
              <div className="mt-10 flex flex-col gap-5">
                <h1 className="font-bold text-2xl">
                  <span className="text-card-1">{item.title}</span>
                </h1>
                <div className="flex flex-row gap-10">
                  <div className="w-96 grid grid-cols-3 gap-4">
                    <div className="col-span-3">
                      <Image
                        width={500}
                        height={300}
                        src={item.images[0]}
                        alt={"placeholder"}
                        className="w-full h-full max-h-60 object-cover"
                      />
                    </div>
                    <div className="col-span-1">
                      <Image
                        width={150}
                        height={150}
                        src={item.images[1]}
                        alt={"placeholder"}
                        className="w-full h-full aspect-square object-cover"
                      />
                    </div>
                    <div className="col-span-1">
                      <Image
                        width={150}
                        height={150}
                        src={item.images[2]}
                        alt={"placeholder"}
                        className="w-full h-full aspect-square object-cover"
                      />
                    </div>
                    <div className="col-span-1">
                      <Image
                        width={150}
                        height={150}
                        src={item.images[3]}
                        alt={"placeholder"}
                        className="w-full h-full aspect-square object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-5">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="inline-flex w-full flex-row justify-end">
                <button
                  onClick={() => handleNext()}
                  className="inline-flex flex-row gap-2 items-center italic bg-clip-text bg-gradient-to-r from-primary-100 to-secondary-100 group"
                >
                  <span className="transition duration-500 text-text-60 group-hover:text-transparent">
                    {data[(index + 1) % data.length].title}
                  </span>
                  <span className="relative w-4 h-4">
                    <FaAngleRight className="opacity-100 group-hover:opacity-0 absolute w-full h-full transition duration-500 fill-text-60" />
                    <FaAngleRight className="opacity-0 group-hover:opacity-100 absolute w-full h-full transition duration-500 fill-[url(#text-gradient)]" />
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
