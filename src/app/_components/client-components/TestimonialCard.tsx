"use client";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import { TestimonialData } from "@/app/assets/user-data";
import Image from "next/image";

export default function TestimonialCard() {
  const [cardNumber, setCardNumber] = useState<number>(0);

  const handleNext = () => {
    setCardNumber((prev) => (prev + 1) % TestimonialData.length);
  };

  const handlePrev = () => {
    setCardNumber(
      (prev) => (prev - 1 + TestimonialData.length) % TestimonialData.length
    );
  };

  const getCardPosition = (index: number) => {
    if (index === cardNumber) {
      return "translate-x-0 scale-100 z-20";
    }
    if (
      index ===
      (cardNumber - 1 + TestimonialData.length) % TestimonialData.length
    ) {
      return "-translate-x-full scale-75 z-10";
    }
    if (index === (cardNumber + 1) % TestimonialData.length) {
      return "translate-x-full scale-75 z-10";
    }

    return "opacity-0 scale-50";
  };

  return (
    <div className="mt-20 flex flex-col w-full justify-center items-center">
      <div className="flex flex-row gap-5 justify-center items-center w-full h-[30rem] overflow-x-hidden relative">
        {TestimonialData.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-500 ease-in-out ${getCardPosition(
              index
            )}`}
          >
            <div
              className={`rounded-xl w-[35rem] ${testimonial.cardColor} relative py-10 px-8`}
            >
              <div className="p-[2px] rounded-[14px] bg-neutral-100 absolute top-0 -translate-y-[70%] left-[calc(50%_-_100px)] drop-shadow-2xl shadow-2xl">
                <Image
                  width={200}
                  height={128}
                  className="rounded-xl object-cover w-[12.5rem] h-32"
                  src={testimonial.image.url}
                  alt={testimonial.image.alt}
                />
              </div>
              <p className="text-center mt-4">{testimonial.testimonial}</p>
              <div className="mt-5 flex flex-col items-center justify-center text-neutral-100">
                <h2 className="text-lg font-bold">{testimonial.name}</h2>

                <h3
                  className={`text-xs italic ${
                    index === cardNumber ? "visible" : "invisible"
                  }`}
                >
                  {testimonial.role}
                </h3>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute w-32 -bottom-8 left-[calc(50%_-_4rem)] inline-flex justify-center items-center gap-3 -translate-y-10">
          <button
            onClick={() => handleNext()}
            className="rounded-full border border-card-1 p-2 hover:bg-card-1 group transition duration-500"
          >
            <FaAngleLeft className="fill-card-1 group-hover:fill-white transition duration-500" />
          </button>
          <button
            onClick={() => handlePrev()}
            className="rounded-full border border-card-1 p-2 hover:bg-card-1 group transition duration-500"
          >
            <FaAngleRight className="fill-card-1 group-hover:fill-white transition duration-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
