import AxiosInstance from "@/utils/axiosInstance";
import { GetDonationsResponse } from "@/app/types/type";
import { AxiosError } from "axios";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const response = await AxiosInstance.get<GetDonationsResponse>(
      "/donations",
      {
        params: request.nextUrl.searchParams,
      }
    );
    return Response.json(response.data);
  } catch (e) {
    if (e instanceof AxiosError) {
      return Response.json(e.response?.data);
    }
    return Response.json(e);
  }
}
