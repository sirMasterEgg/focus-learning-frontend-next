"use client";
import Image from "next/image";
import Progress from "@/app/_components/Progress";
import Link from "next/link";
import { forwardRef } from "react";

type DonationCardProps = {
  thumbnail?: string;
  title?: string;
  target?: number;
  current_donation?: number;
  id?: string;
  isLoading?: boolean;
};

const DonationCard = forwardRef<HTMLAnchorElement, DonationCardProps>(
  ({ thumbnail, id, title, target, current_donation, isLoading }, ref) => {
    return (
      <>
        <Link
          ref={ref}
          href={!isLoading ? "/donate/[id]" : "#"}
          as={!isLoading ? `/donate/${id}` : "#"}
          className="hover:scale-105 transition-all"
        >
          <div className="w-72 h-80 bg-card-donation rounded-lg overflow-hidden shadow-lg">
            {!isLoading ? (
              <Image
                src={thumbnail!}
                className="w-full h-auto min-h-40 max-h-40 object-cover"
                width={288}
                height={160}
                alt={title!}
              />
            ) : (
              <div className="w-full h-40 bg-gray-400 animate-pulse"></div>
            )}
            <div className="max-h-40 h-full flex flex-col p-4">
              {!isLoading ? (
                <span className="font-bold max-h-20 line-clamp-3 min-h-16 max-w-full">
                  {title}
                </span>
              ) : (
                <div className="min-h-16 w-full inline-flex flex-col gap-2">
                  <span className="w-full h-2.5 rounded-full bg-gray-400 animate-pulse"></span>
                  <span className="w-3/4 h-2.5 rounded-full bg-gray-400 animate-pulse"></span>
                  <span className="w-1/2 h-2.5 rounded-full bg-gray-400 animate-pulse"></span>
                  <span className="w-3/4 h-2.5 rounded-full bg-gray-400 animate-pulse"></span>
                </div>
              )}
              <hr className="h-[1px] border-t-0 my-2 bg-gray-500/25" />
              <div className="w-full gap-2 inline-flex flex-col max-h-16">
                {!isLoading ? (
                  <span className="font-bold text-sm">
                    Raised{" "}
                    {current_donation!.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumFractionDigits: 0,
                    })}{" "}
                    of{" "}
                    {target!.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumFractionDigits: 0,
                    })}
                  </span>
                ) : (
                  <span className="w-1/2 h-2.5 rounded-full bg-gray-400 animate-pulse"></span>
                )}
                {!isLoading ? (
                  <Progress maxValue={target!} value={current_donation!} />
                ) : (
                  <div className="w-full bg-gray-400 animate-pulse rounded-full h-2.5"></div>
                )}
              </div>
            </div>
          </div>
        </Link>
      </>
    );
  }
);
DonationCard.displayName = "DonationCard";

export default DonationCard;
