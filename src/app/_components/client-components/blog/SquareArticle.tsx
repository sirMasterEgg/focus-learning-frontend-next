import Image from "next/image";
import Link from "next/link";

export default function SquareArticle({
  title,
  image,
  altImage,
  slug,
}: {
  title: string;
  image: string;
  altImage: string;
  slug: string;
}) {
  return (
    <Link href={`/facilities/blog/article/${slug}`}>
      <div className="bg-team-bg w-full h-fit hover:scale-105 transition duration-500 rounded-lg overflow-hidden">
        <Image
          width={400}
          height={300}
          src={image}
          className="w-full h-full aspect-video object-cover"
          alt={altImage}
          title={title}
        />
        <div className="p-4 inline-flex flex-col gap-5">
          <p className="font-bold w-full line-clamp-2" title={title}>
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
}
