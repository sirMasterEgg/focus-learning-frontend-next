"use client";
import TextAvatar from "@/app/_components/TextAvatar";
import SignOutButton from "@/app/_components/client-components/auth/SignOutButton";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function SignInOrSignUpFlagMobile() {
  const { data: session } = useSession();

  return (
    <div className="block lg:hidden">
      {session ? (
        <>
          <div className="w-full bg-card-1 px-6 py-3 rounded-t-3xl text-neutral-100 z-40 group translate-y-20 hover:translate-y-0 transition-all duration-500 min-w-52">
            <div className="inline-flex flex-row justify-center items-center gap-2 px-1">
              <TextAvatar name={session.user?.name ?? ""} />
              <div className="font-bold">{session.user?.name}</div>
            </div>
            <ul className="transition-all duration-500 max-h-0 overflow-y-hidden group-hover:max-h-60 group-hover:pt-2 flex flex-col gap-1">
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
            className="w-full bg-card-1 px-6 py-3 rounded-t-3xl inline-flex justify-center items-center text-neutral-100 gap-1"
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
