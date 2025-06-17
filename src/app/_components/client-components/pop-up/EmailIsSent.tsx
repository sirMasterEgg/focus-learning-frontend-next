"use client";

import { forwardRef } from "react";
import { BiX } from "react-icons/bi";
import { FaRegCheckCircle } from "react-icons/fa";

const EmailIsSent = forwardRef<HTMLDialogElement, NonNullable<unknown>>(
  (_, ref) => {
    return (
      <dialog ref={ref} className="dialog">
        <div className="bg-white w-[calc(100vw-20rem)] rounded-xl flex flex-col gap-10 p-10 relative shadow-2xl">
          <button className="absolute right-2 top-2 rounded-full p-1 text-gray-400 hover:bg-gray-200 transition duration-300">
            <BiX className="size-6" />
          </button>
          <div className="inline-flex flex-col items-center justify-center w-full gap-3 text-secondary-100">
            <FaRegCheckCircle className="size-16" />
            <span className="text-3xl font-bold">E-mail is sent!</span>
            <span className="text-center max-w-[80%] text-black mt-3">
              The password reset link has been sent to your email address.
              Please check your inbox for the email and follow the instructions
              to reset your password.
            </span>
          </div>
        </div>
      </dialog>
    );
  }
);
EmailIsSent.displayName = "EmailIsSent";
export default EmailIsSent;
