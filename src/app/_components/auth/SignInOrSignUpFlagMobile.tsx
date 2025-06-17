"use client";
import TextAvatar from "@/app/_components/TextAvatar";
import SignOutButton from "@/app/_components/client-components/auth/SignOutButton";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function SignInOrSignUpFlagMobile() {
  const { data: session } = useSession();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="block lg:hidden">
      {session ? (
        <>
          <div
            className={`w-full bg-card-1 px-6 py-3 rounded-t-3xl text-neutral-100 z-40 group transition-all duration-500 min-w-52 ${
              open ? "translate-y-0" : "translate-y-20"
            }`}
            onClick={() => setOpen((prev) => !prev)}
          >
            <div className="inline-flex flex-row justify-center items-center gap-2 px-1">
              <TextAvatar name={session.user?.name ?? ""} />
              <div className="font-bold">{session.user?.name}</div>
            </div>
            <ul
              className={`transition-all duration-500 overflow-y-hidden ${
                open ? "max-h-60 pt-2" : "max-h-0"
              } flex flex-col gap-1`}
            >
              <li>
                <Link
                  href="/account/profile"
                  className="w-full h-full block hover:bg-gray-500/20 rounded-lg px-3 py-1 transition duration-500"
                >
                  My Account
                </Link>
              </li>
              <hr className="h-[1px] border-t-0 bg-white/25" />
              <li>
                <SignOutButton />
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <Link
            href="/auth/login"
            className="w-full mt-20 bg-card-1 px-6 py-3 rounded-t-3xl inline-flex justify-center items-center text-neutral-100 gap-1"
          >
            <div className="font-bold">
              Sign In <span className="font-normal">or</span> Create Account
            </div>
          </Link>
        </>
      )}
    </div>
  );
}
