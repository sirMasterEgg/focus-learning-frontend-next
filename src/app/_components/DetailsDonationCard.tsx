"use client";
import Link from "next/link";
import Progress from "@/app/_components/Progress";
import { RiLinkM } from "react-icons/ri";
import { GetDetailsDonationResponse } from "@/app/types/type";
import { useState } from "react";

type ShareButtonProps = {
  detailsDonation: GetDetailsDonationResponse;
};
export default function DetailsDonationCard({
  detailsDonation,
}: ShareButtonProps) {
  const url =
    process.env.NEXT_PUBLIC_URL +
    "/donate/" +
    detailsDonation.data.human_readable_id;

  const [shareButton, setShareButton] = useState<boolean>(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setShareButton(true);
    setTimeout(() => {
      setShareButton(false);
    }, 3000);
  };

  return (
    <>
      <div className="rounded-lg shadow p-5 space-y-4">
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-primary-100">
            {detailsDonation.data.current_donation.toLocaleString("id-ID", {
              currency: "IDR",
              style: "currency",
              maximumFractionDigits: 0,
            })}
          </span>
          <div className="italic text-gray-400">
            <span>raised of </span>
            <span>
              {detailsDonation.data.target.toLocaleString("id-ID", {
                currency: "IDR",
                style: "currency",
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </div>
        <Progress
          maxValue={detailsDonation.data.target}
          value={detailsDonation.data.current_donation}
        />
        <span className="block text-gray-400">
          {detailsDonation.data.total_donors.toLocaleString("id-ID", {
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
            style: "decimal",
          })}{" "}
          donations
        </span>

        <div className="flex flex-col gap-3 w-full items-center justify-center">
          <Link
            href={{
              pathname: "/donation",
              query: { donateId: detailsDonation.data.human_readable_id },
            }}
            className="gradient-background rounded-full w-full"
          >
            <div
              className={`rounded-full font-semibold text-neutral-100 text-center transition-all duration-500 bg-secondary-100 hover:bg-secondary-100/20 w-full px-10 py-2`}
            >
              Donate Now
            </div>
          </Link>
          <button
            onClick={() => handleCopyLink()}
            className="rounded-full px-10 py-2 border border-gray-400 font-bold text-gray-400 w-full"
          >
            Share
          </button>
        </div>
      </div>
      <div
        className={`w-full cursor-default opacity-0 transition duration-500 ${
          shareButton && "opacity-100"
        } bg-floating-whatsapp text-secondary-100 rounded-full mt-3 inline-flex items-center justify-center gap-2 p-2`}
      >
        Donation link has successfully copied
        <RiLinkM />
      </div>
    </>
  );
}
