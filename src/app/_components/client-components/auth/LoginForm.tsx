"use client";

import { FaCheck, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { googleIcon } from "@/app/assets/others";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await signIn("credentials", {
      redirect: false,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      callbackUrl: "/",
    });
  };

  return (
    <>
      <form
        method="post"
        onSubmit={onSubmit}
        className="mt-8 flex flex-col gap-3"
      >
        <label className="flex flex-col gap-1">
          <span className="font-bold">Email Address</span>
          <input
            className="border rounded p-2 ring-0 outline-1 outline-gray-400 h-10"
            placeholder="Enter Your Email Address"
            type="email"
            inputMode="email"
            name="email"
          />
        </label>
        <label className="flex flex-col gap-1 relative">
          <span className="font-bold">Password</span>
          <input
            className="border rounded p-2 ring-0 outline-1 outline-gray-400 h-10"
            placeholder="Enter Your Password"
            type={`${showPassword ? "text" : "password"}`}
            name="password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 translate-y-0.5 top-1/2 text-gray-400"
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
        <div className="inline-flex flex-row">
          <label className="inline-flex items-center relative">
            <input
              type="checkbox"
              className="w-4 h-4 appearance-none border-2 border-black rounded checked:bg-blue-500 checked:border-transparent focus:outline-offset-4"
            />
            <span className="absolute left-2 text-white top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <FaCheck className="w-3 h-3" />
            </span>
            <span className="ml-2 ">Keep me logged in</span>
          </label>

          <a href="/auth/forgot-password" className="ml-auto text-blue-500">
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full bg-secondary-100 rounded-lg h-12 font-bold text-white"
        >
          Sign In
        </button>
      </form>
      <span className="separator my-5">or</span>
      <button
        type="button"
        onClick={() => signIn("google")}
        className="w-full bg-white border border-gray-300 rounded-lg h-12 font-bold inline-flex flex-row items-center justify-center gap-2"
      >
        Sign in with Google
        <Image src={googleIcon} alt={"Icon google"} className="w-7 h-7" />
      </button>
    </>
  );
}
