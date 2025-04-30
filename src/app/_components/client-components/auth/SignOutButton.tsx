"use client";

import { signOut } from "next-auth/react";
import { PiSignOut } from "react-icons/pi";

export default function SignOutButton() {
  return (
    <button
      className="w-full h-full inline-flex flex-row justify-between items-center hover:bg-gray-500/20 rounded-lg px-3 py-1 transition duration-500 ring-0 outline-0"
      onClick={() =>
        signOut({
          callbackUrl: "/",
        })
      }
    >
      Sign Out
      <PiSignOut />
    </button>
  );
}
