import Image from "next/image";

export default function RoundedIcon({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-full bg-card-1 w-8 h-8 flex justify-center items-center ${className}`}
    >
      <Image width={16} height={16} className="w-auto" src={src} alt={alt} />
    </div>
  );
}
