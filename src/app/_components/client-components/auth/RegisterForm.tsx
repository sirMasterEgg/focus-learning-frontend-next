"use client";

import { googleIcon } from "@/app/assets/others";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUserSchema, RegisterUserType } from "@/app/types/type";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { RegisterUser } from "@/app/actions/action";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const router = useRouter();

  const registerMutation = useMutation({
    mutationFn: RegisterUser,
  });

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(registerUserSchema),
  });

  const onSubmit = (data: RegisterUserType) => {
    registerMutation.mutate(data, {
      onSuccess: (success) => {
        if (success.status && success.status >= 400) {
          toast.error(success.data.message);
          return;
        }

        toast.success(
          "Account created successfully, please check your email to verify your account"
        );
        router.push("/auth/login");
      },
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 flex flex-col gap-3"
      >
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
          <span className="font-bold">Email Address</span>
          <input
            className="input"
            placeholder="Enter Your Email Address"
            type="email"
            inputMode="email"
            {...register("email")}
          />
        </label>
        <label className="flex flex-col gap-1 relative">
          <span className="font-bold">Password</span>
          <input
            className="input"
            placeholder="Enter Your Password"
            type={`${showPassword ? "text" : "password"}`}
            {...register("password")}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 translate-y-0.5 top-1/2 text-gray-400"
            tabIndex={-1}
          >
            {showPassword ? (
              <>
                <FaRegEye className="w-6 h-6" />
              </>
            ) : (
              <>
                <FaRegEyeSlash className="w-6 h-6" />
              </>
            )}
          </button>
        </label>
        <label className="flex flex-col gap-1 relative">
          <span className="font-bold">Confirm Password</span>
          <input
            className="input"
            placeholder="Confirm Your Password"
            type={`${showConfirmPassword ? "text" : "password"}`}
            {...register("passwordConfirmation")}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 translate-y-0.5 top-1/2 text-gray-400"
            tabIndex={-1}
          >
            {showConfirmPassword ? (
              <>
                <FaRegEye className="w-6 h-6" />
              </>
            ) : (
              <>
                <FaRegEyeSlash className="w-6 h-6" />
              </>
            )}
          </button>
        </label>
        <button
          type="submit"
          disabled={registerMutation.isPending}
          className={`w-full bg-secondary-100 rounded-lg h-12 font-bold text-white ${
            registerMutation.isPending ? "bg-secondary-100/60" : ""
          }`}
        >
          {registerMutation.isPending ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      <span className="separator my-5">or</span>
      <button
        type="button"
        onClick={() => signIn("google")}
        className="w-full bg-white border border-gray-300 rounded-lg h-12 font-bold inline-flex flex-row items-center justify-center gap-2"
      >
        Continue with Google
        <Image src={googleIcon} alt={"Icon google"} className="w-7 h-7" />
      </button>
    </>
  );
}
