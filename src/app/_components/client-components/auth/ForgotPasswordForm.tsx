"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema, ForgotPasswordType } from "@/app/types/type";
import { ForgotPassword } from "@/app/actions/action";
import { toast } from "sonner";
import EmailIsSent from "@/app/_components/client-components/pop-up/EmailIsSent";
import { useRef } from "react";

export default function ForgotPasswordForm() {
  const modalRef = useRef<HTMLDialogElement>(null);

  const onSubmit = async (data: ForgotPasswordType) => {
    const response = await ForgotPassword({
      email: data.email,
    });

    if (response.status && response.status >= 400) {
      return toast.error(response.data.message);
    }

    modalRef.current?.showModal();
    setTimeout(() => {
      modalRef.current?.close();
    }, 5000);
  };

  const { handleSubmit, register } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(forgotPasswordSchema),
  });

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 flex flex-col gap-3"
      >
        <input
          type="email"
          placeholder="Email"
          className="input"
          {...register("email")}
        />
        <button
          type="submit"
          className="w-full bg-secondary-100 rounded-lg h-12 font-bold text-white"
        >
          Submit
        </button>
      </form>
      <EmailIsSent ref={modalRef} />
    </>
  );
}
