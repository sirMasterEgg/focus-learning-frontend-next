"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { GetDonationsResponse } from "@/app/types/type";
import DonationCard from "@/app/_components/DonationCard";
import { useMemo } from "react";
import { useInfiniteObserver } from "@/hooks/use-infinite-observer";

type DonationsSearchParams = {
  size?: number;
  page?: number;
};

const GetDonations = async (params: DonationsSearchParams) => {
  const response = await axios.get<GetDonationsResponse>("/api/donations", {
    params,
  });
  return response.data;
};

const useDonationQuery = () => {
  return useInfiniteQuery<GetDonationsResponse>({
    queryKey: ["donations"],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => GetDonations({ page: pageParam as number }),
    getNextPageParam: (lastPage) => {
      return lastPage.meta.current_page === lastPage.meta.last_page
        ? null
        : lastPage.meta.current_page + 1;
    },
    staleTime: Infinity,
  });
};

const useDonationInfiniteScroll = () => {
  const { data, error, fetchNextPage, hasNextPage, isFetching, isLoading } =
    useDonationQuery();

  const lastElement = useInfiniteObserver({
    fetchNextPage,
    isLoading,
    hasNextPage,
    isFetching,
  });

  const flatData = useMemo(
    () => (data ? data?.pages.flatMap((item) => item.data) : []),
    [data]
  );

  return { data: flatData, error, lastElement, isLoading, isFetching };
};

export default function DonationList() {
  const { data, isLoading, lastElement, isFetching } =
    useDonationInfiniteScroll();

  return (
    <>
      {isLoading
        ? Array.from({ length: 12 }).map((_, i) => {
            return <DonationCard isLoading={true} key={i} />;
          })
        : data.map((donation, i) => (
            <DonationCard
              ref={data.length === i + 1 ? lastElement : null}
              title={donation.title}
              target={donation.target}
              current_donation={donation.current_donation}
              thumbnail={donation.thumbnail}
              key={donation.id}
              id={donation.human_readable_id}
            />
          ))}
      {isFetching &&
        Array.from({ length: 6 }).map((_, i) => (
          <DonationCard isLoading={true} key={i} />
        ))}
    </>
  );
}
