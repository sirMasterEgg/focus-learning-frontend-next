"use client";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { googleIcon } from "@/app/assets/others";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

type LoginFormProps = {
  callbackUrl?: string | undefined;
};

export default function LoginForm({ callbackUrl }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const router = useRouter();
  // const {handleSubmit} = useForm();
  // const loginMutation = useMutation({
  //   mutationFn:
  // })
  // todo
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);

    try {
      const signInResponse = await signIn("credentials", {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        redirect: false,
      });

      if (signInResponse?.ok) {
        router.replace(callbackUrl || "/donate");
      } else {
        toast.error(signInResponse?.error);
      }
    } catch (e) {
      console.error("error", e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      await signIn("google", {
        callbackUrl: callbackUrl || "/donate",
      });
    } catch (e) {
      console.error("error", e);
    }
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
            className="input"
            placeholder="Enter Your Email Address"
            type="email"
            inputMode="email"
            name="email"
          />
        </label>
        <label className="flex flex-col gap-1 relative">
          <span className="font-bold">Password</span>
          <input
            className="input"
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
          {/*<label className="inline-flex items-center relative">
            <input
              type="checkbox"
              className="w-4 h-4 appearance-none border-2 border-black rounded-sm checked:bg-blue-500 checked:border-transparent focus:outline-offset-4"
            />
            <span className="absolute left-2 text-white top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <FaCheck className="w-3 h-3" />
            </span>
            <span className="ml-2 ">Keep me logged in</span>
          </label>*/}

          <Link href="/auth/forgot-password" className="ml-auto text-blue-500">
            Forgot Password?
          </Link>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-secondary-100 rounded-lg h-12 font-bold text-white ${
            isSubmitting ? "bg-secondary-100/60" : ""
          }`}
        >
          {isSubmitting ? "Signing In..." : "Sign In"}
        </button>
      </form>
      <span className="separator my-5">or</span>
      <button
        type="button"
        onClick={() => handleLoginWithGoogle()}
        className={`w-full bg-white border border-gray-300 rounded-lg h-12 font-bold inline-flex flex-row items-center justify-center gap-2 active:bg-black/30`}
      >
        Sign in with Google
        <Image src={googleIcon} alt={"Icon google"} className="w-7 h-7" />
      </button>
    </>
  );
}
