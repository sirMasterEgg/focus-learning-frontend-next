import AxiosInstance from "@/utils/axiosInstance";
import { GetDetailsDonationResponse } from "@/app/types/type";
import { AxiosError } from "axios";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const response = await AxiosInstance.get<GetDetailsDonationResponse>(
      "/donations/" + id
    );
    return Response.json(response.data);
  } catch (e) {
    if (e instanceof AxiosError) {
      return Response.json(e.response?.data);
    }
    return Response.json(e);
  }
}
