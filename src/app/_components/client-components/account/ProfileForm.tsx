"use client";

import { useEffect, useState } from "react";
import InputPasswordWithEye from "@/app/_components/client-components/InputPasswordWithEye";
import { useForm } from "react-hook-form";
import CustomSelect from "@/app/_components/client-components/CustomSelect";
import { useSession } from "next-auth/react";
import { ProfileFormType } from "@/app/types/type";
import { EditProfileAction } from "@/app/actions/action";
import { toast } from "sonner";

export default function ProfileForm() {
  const { data: session, status, update } = useSession();

  const [showChangePasswordSection, setShowChangePasswordSection] =
    useState<boolean>(false);

  const { register, handleSubmit, reset } = useForm<ProfileFormType>({
    defaultValues: {
      name: session?.user?.name,
      title: session?.user?.title,
      email: session?.user?.email,
    },
  });

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      reset({
        name: session.user.name || "",
        title: session.user.title || "",
        email: session.user.email || "",
      });
    }
  }, [session, reset]);

  useEffect(() => {
    if (!showChangePasswordSection) {
      reset({
        oldPassword: "",
        password: "",
        passwordConfirmation: "",
      });
    }
  }, [showChangePasswordSection]);

  const handleSubmitForm = async (data: ProfileFormType) => {
    try {
      const response = await EditProfileAction(data);
      if (
        response.updateProfile.status &&
        response.updateProfile.status >= 400
      ) {
        toast.error(response.updateProfile.data.message);
      }
      if (
        response.setPasswordResult.status &&
        response.setPasswordResult.status >= 400
      ) {
        toast.error(response.setPasswordResult.data.message);
      }
      if (
        response.changePasswordResult.status &&
        response.changePasswordResult.status >= 400
      ) {
        toast.error(response.changePasswordResult.data.message);
      }
      if (
        response.updateProfile.status &&
        response.updateProfile.status >= 200 &&
        response.updateProfile.status < 300
      ) {
        await update();
        toast.success("Profile updated successfully");
      }
      if (
        response.setPasswordResult.status &&
        response.setPasswordResult.status >= 200 &&
        response.setPasswordResult.status < 300
      ) {
        await update();
        toast.success("Password set successfully");
        reset({
          password: "",
          passwordConfirmation: "",
        });
      }
      if (
        response.changePasswordResult.status &&
        response.changePasswordResult.status >= 200 &&
        response.changePasswordResult.status < 300
      ) {
        await update();
        toast.success("Password changed successfully");
        reset({
          oldPassword: "",
          password: "",
          passwordConfirmation: "",
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  /*if (status === "loading") {
    return (
      <>
        <div className="mt-8 flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <div className="bg-gray-400 animate-pulse w-20 ml-1 my-2 h-2 rounded-full"></div>
              <div className="input rounded-xl bg-gray-400 animate-pulse"></div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="bg-gray-400 animate-pulse w-20 ml-1 my-2 h-2 rounded-full"></div>
              <div className="input rounded-xl bg-gray-400 animate-pulse"></div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="bg-gray-400 animate-pulse w-20 ml-1 my-2 h-2 rounded-full"></div>
              <div className="input rounded-xl bg-gray-400 animate-pulse"></div>
            </div>
          </div>
          <div className="col-end col-span-2 inline-flex justify-end">
            <div className="w-40 h-8 bg-gray-400 animate-pulse rounded-lg px-2 py-1"></div>
          </div>
        </div>
        <div className="w-full inline-flex justify-end mt-2">
          <div className="w-40 h-12 px-6 py-3 bg-gray-400 rounded-lg animate-pulse"></div>
        </div>
      </>
    );
  }*/

  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="mt-8 flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-4">
            <label className="flex flex-col gap-1">
              <span className="font-bold">Name</span>
              <input
                className="input"
                placeholder="Enter Your Full Name"
                type="text"
                inputMode="text"
                {...register("name")}
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-bold">Title</span>
              <CustomSelect
                {...register("title")}
                options={[
                  {
                    label: "Mr.",
                    value: "Mr.",
                  },
                  {
                    label: "Mrs.",
                    value: "Mrs.",
                  },
                  {
                    label: "Miss.",
                    value: "Miss",
                  },
                ]}
              />
            </label>
            <label className="flex flex-col gap-1 col-span-2 lg:col-span-1">
              <span className="font-bold">Email Address</span>
              <input
                className="input"
                placeholder="Enter Your Email Address"
                type="email"
                inputMode="email"
                disabled
                {...register("email")}
              />
            </label>
          </div>

          <div className="col-end col-span-2 inline-flex justify-end">
            <button
              type="button"
              onClick={() =>
                setShowChangePasswordSection(!showChangePasswordSection)
              }
              className="text-blue-500 font-semibold underline text-right px-2 py-1 hover:bg-gray-500/20 rounded-lg transition duration-500"
            >
              {showChangePasswordSection
                ? "Cancel"
                : session?.user.already_set_password
                ? "Change Password"
                : "Set Password"}
            </button>
          </div>
        </div>
        {showChangePasswordSection && (
          <>
            <h1 className="text-3xl font-bold">Change Password</h1>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3">
              {session?.user.already_set_password ? (
                <InputPasswordWithEye
                  label="Old Password"
                  placeholder="Enter old password"
                  {...register("oldPassword")}
                />
              ) : null}
              <div className="col-start-1">
                <InputPasswordWithEye
                  label="New Password"
                  placeholder="Enter new password"
                  {...register("password")}
                />
              </div>
              <InputPasswordWithEye
                label="Confirm Password"
                placeholder="Enter old password"
                {...register("passwordConfirmation")}
              />
            </div>
          </>
        )}
        <div className="w-full inline-flex justify-end mt-2">
          <div className="gradient-background size-fit rounded-lg">
            <button
              disabled={status === "loading"}
              type="submit"
              className="px-6 py-3 bg-secondary-100 text-white font-semibold transition duration-500 hover:bg-secondary-100/20 rounded-lg"
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
