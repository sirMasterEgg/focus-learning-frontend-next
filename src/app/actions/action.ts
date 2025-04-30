"use server";

import {
  ChargeTransactionType,
  ForgotPasswordType,
  ProfileFormType,
  RegisterUserType,
} from "@/app/types/type";
import AxiosInstance from "@/utils/axiosInstance";
import { revalidatePath } from "next/cache";
import { AxiosError } from "axios";
import { getToken } from "next-auth/jwt";
import {
  cookies,
  headers,
  type UnsafeUnwrappedCookies,
  type UnsafeUnwrappedHeaders,
} from "next/headers";
import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const getSession = () => {
  return Promise.all([
    getServerSession(authOptions),
    getToken({
      req: {
        headers: headers() as unknown as UnsafeUnwrappedHeaders,
        cookies: cookies() as unknown as UnsafeUnwrappedCookies,
      } as unknown as NextRequest,
    }),
  ]);
};

export async function EditProfileAction(data: ProfileFormType) {
  const [session, jwt] = await getSession();

  const updateProfile: Partial<ProfileFormType> = {};

  if (session?.user.name && session?.user.name !== data.name) {
    updateProfile.name = data.name;
  }

  if (session?.user.title && session?.user.title !== data.title) {
    updateProfile.title = data.title;
  }

  if (session?.user.email && session?.user.email !== data.email) {
    updateProfile.email = data.email;
  }

  let setPasswordResult = null,
    updateProfileResult = null,
    changePasswordResult = null;

  if (Object.keys(updateProfile).length > 0) {
    try {
      updateProfileResult = await AxiosInstance.patch(
        "/update-profile",
        updateProfile,
        {
          headers: {
            Authorization: `Bearer ${jwt?.token}`,
          },
        }
      );
    } catch (e) {
      if (e instanceof AxiosError) {
        updateProfileResult = e.response;
      }
    }
  }

  if (
    data.password &&
    data.passwordConfirmation &&
    !session?.user.already_set_password
  ) {
    try {
      setPasswordResult = await AxiosInstance.post(
        "/auth/set-password",
        {
          password: data.password,
          password_confirmation: data.passwordConfirmation,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt?.token}`,
          },
        }
      );
    } catch (e) {
      if (e instanceof AxiosError) {
        setPasswordResult = e.response;
      }
    }
  }

  if (
    data.oldPassword &&
    data.password &&
    data.passwordConfirmation &&
    session?.user.already_set_password
  ) {
    try {
      changePasswordResult = await AxiosInstance.post(
        "/auth/change-password",
        {
          old_password: data.oldPassword,
          password: data.password,
          password_confirmation: data.passwordConfirmation,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt?.token}`,
          },
        }
      );
    } catch (e) {
      if (e instanceof AxiosError) {
        changePasswordResult = e.response;
      }
    }
  }

  revalidatePath("/account/profile");

  return {
    updateProfile: {
      status: updateProfileResult?.status,
      data: updateProfileResult?.data,
    },
    setPasswordResult: {
      status: setPasswordResult?.status,
      data: setPasswordResult?.data,
    },
    changePasswordResult: {
      status: changePasswordResult?.status,
      data: changePasswordResult?.data,
    },
  };
}

export async function ChargeTransaction(
  data: ChargeTransactionType & { donationId: string }
) {
  const [, jwt] = await getSession();

  const payload: Partial<
    Omit<ChargeTransactionType, "id_token"> & { token_id: string }
  > & {
    donation_id: string;
  } = {
    donation_id: data.donationId,
    name: data.name,
    email: data.email,
    amount: data.amount,
    payment_method: data.payment_method,
  };

  if (data.payment_method === "card") {
    payload.token_id = data.id_token;
    payload.save_card = data.save_card;
    payload.customer_details = {
      first_name: data.customer_details?.first_name,
      last_name: data.customer_details?.last_name,
      phone_number: data.customer_details?.phone_number,
    };
  }

  try {
    const response = await AxiosInstance.post("/donate", payload, {
      headers: {
        Authorization: `Bearer ${jwt?.token}`,
      },
    });

    return {
      status: response.status,
      data: response.data.data,
      message: response.data.message,
    };
  } catch (e) {
    if (e instanceof AxiosError) {
      return {
        status: e.response?.status,
        data: e.response?.data,
      };
    }
    throw e;
  }
}

export async function ForgotPassword(data: ForgotPasswordType) {
  try {
    const response = await AxiosInstance.post("/auth/reset-password", {
      email: data.email,
    });

    return {
      status: response.status,
      data: response.data,
    };
  } catch (e) {
    if (e instanceof AxiosError) {
      return {
        status: e.response?.status,
        data: e.response?.data,
      };
    }
    throw e;
  }
}

export async function RegisterUser(data: RegisterUserType) {
  try {
    const response = await AxiosInstance.post("/auth/register", {
      email: data.email,
      name: data.name,
      password: data.password,
      password_confirmation: data.passwordConfirmation,
    });

    return {
      status: response.status,
      data: response.data,
    };
  } catch (e) {
    if (e instanceof AxiosError) {
      return {
        status: e.response?.status,
        data: e.response?.data,
      };
    }
    throw e;
  }
}
