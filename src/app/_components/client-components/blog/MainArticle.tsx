"use client";

import Image from "next/image";
import LinkWithGradientBackground from "@/app/_components/LinkWithGradientBackground";

export default function MainArticle({
  title,
  description,
  image,
  altImage,
  slug,
}: {
  title: string;
  description: string;
  image: string;
  altImage: string;
  slug: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-96 mx-auto">
          <Image
            width={1000}
            height={700}
            src={image}
            alt={altImage}
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <span className="text-gradient font-bold text-xl">{title}</span>
          <div className={`mt-5 mb-5`}>
            <p className="line-clamp-5">{description}</p>
          </div>
          <div className="inline-flex justify-end">
            <LinkWithGradientBackground
              href={`/facilities/blog/article/${slug}`}
              className="px-8 py-3"
            >
              Read More
            </LinkWithGradientBackground>
          </div>
        </div>
      </div>
    </div>
  );
}
