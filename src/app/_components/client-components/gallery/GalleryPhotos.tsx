"use client";

import Image from "next/image";
import {
  gallery1,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
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
    },
    {
      id: 3,
      src: gallery1,
      alt: "Image 3",
    },
    {
      id: 4,
      src: gallery3,
      alt: "Image 4",
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
      src: "https://placehold.co/100",
      alt: "Image 6",
    },
    {
      id: 7,
      src: gallery11,
      alt: "Image 7",
    },
    {
      id: 8,
      src: "https://placehold.co/100",
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
        <span className="text-2xl text-secondary-100 font-bold px-16">
          Our Activities
        </span>
        <div className="bg-team-bg">
          <div className="w-full max-h-[33rem] p-16 flex gap-5 transition-all duration-500 overflow-x-auto gallery">
            {galleryImage.map((image, index) => {
              if (index % 3 === 0) {
                return (
                  <div key={image.id} className="w-1/2 h-auto flex-shrink-0">
                    <div className="grid grid-cols-2 gap-5 h-full">
                      <Image
                        width={100}
                        height={100}
                        src={image.src}
                        alt={image.alt}
                        className={`w-full h-[calc(400px_/_2_-_1.25rem)] object-cover ${
                          index % 2 === 1 && index !== 0 ? "col-span-2" : ""
                        } ${image.id === 4 ? "object-[50%_80%]" : ""}`}
                      />
                      {galleryImage[index + 1] && (
                        <Image
                          width={100}
                          height={100}
                          src={galleryImage[index + 1].src}
                          alt={galleryImage[index + 1].alt}
                          className="w-full h-[calc(400px_/_2_-_1.25rem)] object-cover"
                        />
                      )}
                      {galleryImage[index + 2] && (
                        <Image
                          width={100}
                          height={100}
                          src={galleryImage[index + 2].src}
                          alt={galleryImage[index + 2].alt}
                          className={`${
                            image.id
                          } w-full h-[calc(400px_/_2_-_1.25rem)] object-cover ${
                            index % 2 === 0 ? "col-span-2" : ""
                          } ${image.id === 1 ? "object-[50%_80%]" : ""}`}
                        />
                      )}
                    </div>
                  </div>
                );
              }
              return null;
            })}
            <div className="w-1/2 h-auto flex-shrink-0">
              <div className="grid grid-cols-3 gap-5 h-full">
                {gridImage.map((image) => (
                  <Image
                    key={image.id}
                    width={100}
                    height={100}
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-[calc(400px_/_3_-_1.25rem)] object-cover`}
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
