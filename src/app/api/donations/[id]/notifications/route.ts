import { NextRequest } from "next/server";
import AxiosInstance from "@/utils/axiosInstance";
import { GetPaymentNotificationResponse } from "@/app/types/type";
import { AxiosError } from "axios";
import { getToken } from "next-auth/jwt";
import { cookies, headers } from "next/headers";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const token = await getToken({
    req: {
      headers: headers(),
      cookies: cookies(),
    } as unknown as NextRequest,
  });

  if (!token) {
    return Response.json({
      status: 401,
      message: "Unauthorized",
    });
  }

  try {
    const response = await AxiosInstance.get<GetPaymentNotificationResponse>(
      "/donate/" + id + "/notifications",
      {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
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
