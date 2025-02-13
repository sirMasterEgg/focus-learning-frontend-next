import Link from "next/link";

export default function LinkWithGradientBackground({
  href,
  children,
  className = "px-8 py-4",
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="gradient-background rounded-lg">
      <div
        className={`${className} rounded-lg font-semibold text-neutral-100 transition-all duration-500 bg-secondary-100 hover:bg-secondary-100/20`}
      >
        {children}
      </div>
    </Link>
  );
}
