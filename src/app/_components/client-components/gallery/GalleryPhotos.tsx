"use client";

import Image from "next/image";
import {
  gallery1,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery9,
} from "@/app/assets/facilities";

export default function GalleryPhotos() {
  const galleryImage = [
    {
      id: 1,
      src: gallery13,
      alt: "Image 1",
    },
    {
      id: 2,
      src: gallery12,
      alt: "Image 2",
      classname: "object-[50%_45%]",
    },
    {
      id: 3,
      src: gallery1,
      alt: "Image 3",
      classname: "object-[50%_100%]",
    },
    {
      id: 4,
      src: gallery3,
      alt: "Image 4",
      classname: "object-[50%_80%]",
    },
    {
      id: 5,
      src: gallery9,
      alt: "Image 5",
    },
    {
      id: 6,
      src: gallery14,
      alt: "Image 6",
      classname: "object-[50%_55%]",
    },
  ];

  const gridImage = [
    {
      id: 1,
      src: gallery6,
      alt: "Image 1",
    },
    {
      id: 2,
      src: gallery4,
      alt: "Image 2",
    },
    {
      id: 3,
      src: gallery10,
      alt: "Image 3",
    },
    {
      id: 4,
      src: gallery2,
      alt: "Image 4",
    },
    {
      id: 5,
      src: gallery7,
      alt: "Image 5",
    },
    {
      id: 6,
      src: gallery15,
      alt: "Image 6",
    },
    {
      id: 7,
      src: gallery11,
      alt: "Image 7",
    },
    {
      id: 8,
      src: gallery16,
      alt: "Image 8",
    },
    {
      id: 9,
      src: gallery5,
      alt: "Image 9",
    },
  ];

  return (
    <>
      <div className="my-20 flex flex-col gap-10">
        <span className="text-2xl text-secondary-100 font-bold px-6 lg:px-16">
          Our Activities
        </span>
        <div className="bg-team-bg">
          <div className="w-full max-h-[33rem] p-6 lg:p-16 flex flex-col lg:flex-row gap-5 transition-all duration-500 overflow-x-auto gallery">
            {galleryImage.map((image, index) => {
              if (index % 3 === 0) {
                const sectionIndex = Math.floor(index / 3);
                const firstImage = galleryImage[index];
                const secondImage = galleryImage[index + 1];
                const thirdImage = galleryImage[index + 2];

                return (
                  <div
                    key={image.id}
                    className="w-full lg:w-1/2 h-auto shrink-0"
                  >
                    {sectionIndex % 2 === 0 ? (
                      <>
                        <div className="flex flex-row flex-wrap gap-5 h-full">
                          <Image
                            src={firstImage.src}
                            alt={firstImage.alt}
                            width={1000}
                            height={1000}
                            className={`w-[calc(50%-1.25rem/2)] h-[35%] object-cover ${firstImage.classname}`}
                          />
                          <Image
                            src={secondImage.src}
                            alt={secondImage.alt}
                            width={1000}
                            height={1000}
                            className={`w-[calc(50%-1.25rem/2)] h-[35%] object-cover ${secondImage.classname}`}
                          />
                          <Image
                            src={thirdImage.src}
                            alt={thirdImage.alt}
                            width={1000}
                            height={1000}
                            className={`w-full h-[calc(65%-1.25rem)] object-cover ${thirdImage.classname}`}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex flex-row flex-wrap gap-5 h-full">
                          <Image
                            src={firstImage.src}
                            alt={firstImage.alt}
                            width={1000}
                            height={1000}
                            className={`w-full h-[calc(65%-1.25rem)] object-cover ${firstImage.classname}`}
                          />
                          <Image
                            src={secondImage.src}
                            alt={secondImage.alt}
                            width={1000}
                            height={1000}
                            className={`w-[calc(50%-1.25rem/2)] h-[35%] object-cover ${secondImage.classname}`}
                          />
                          <Image
                            src={thirdImage.src}
                            alt={thirdImage.alt}
                            width={1000}
                            height={1000}
                            className={`w-[calc(50%-1.25rem/2)] h-[35%] object-cover ${thirdImage.classname}`}
                          />
                        </div>
                      </>
                    )}
                  </div>
                );
              }
              return null;
            })}
            {/*{galleryImage.map((image, index) => {*/}
            {/*  if (index % 3 === 0) {*/}
            {/*    return (*/}
            {/*      <div*/}
            {/*        key={image.id}*/}
            {/*        className="w-full lg:w-1/2 h-auto shrink-0"*/}
            {/*      >*/}
            {/*        <div className="grid grid-cols-2 gap-5 h-full">*/}
            {/*          <Image*/}
            {/*            width={1000}*/}
            {/*            height={1000}*/}
            {/*            src={image.src}*/}
            {/*            alt={image.alt}*/}
            {/*            className={`w-full h-[calc(400px/2-1.25rem)] object-cover ${*/}
            {/*              index % 2 === 1 && index !== 0 ? "col-span-2" : ""*/}
            {/*            } ${image.id === 4 ? "object-[50%_80%]" : ""}`}*/}
            {/*          />*/}
            {/*          {galleryImage[index + 1] && (*/}
            {/*            <Image*/}
            {/*              width={1000}*/}
            {/*              height={1000}*/}
            {/*              src={galleryImage[index + 1].src}*/}
            {/*              alt={galleryImage[index + 1].alt}*/}
            {/*              className="w-full h-[calc(400px/2-1.25rem)] object-cover"*/}
            {/*            />*/}
            {/*          )}*/}
            {/*          {galleryImage[index + 2] && (*/}
            {/*            <Image*/}
            {/*              width={1000}*/}
            {/*              height={1000}*/}
            {/*              src={galleryImage[index + 2].src}*/}
            {/*              alt={galleryImage[index + 2].alt}*/}
            {/*              className={`${*/}
            {/*                image.id*/}
            {/*              } w-full h-[calc(400px/2-1.25rem)] object-cover ${*/}
            {/*                index % 2 === 0 ? "col-span-2" : ""*/}
            {/*              } ${image.id === 1 ? "object-[50%_80%]" : ""}`}*/}
            {/*            />*/}
            {/*          )}*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    );*/}
            {/*  }*/}
            {/*  return null;*/}
            {/*})}*/}
            <div className="w-full lg:w-1/2 h-auto shrink-0">
              <div className="grid grid-cols-3 gap-5 h-full">
                {gridImage.map((image) => (
                  <Image
                    key={image.id}
                    width={1000}
                    height={1000}
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-[calc(400px/3-1.25rem)] object-cover`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
