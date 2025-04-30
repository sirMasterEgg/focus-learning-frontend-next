import ForgotPasswordForm from "@/app/_components/client-components/auth/ForgotPasswordForm";
import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | Focus Learning Bali",
  description: "",
};

export default function ForgotPassword() {
  return (
    <>
      <Navbar />
      <main className="px-6 lg:px-16">
        <div className="mt-10 w-full mb-10">
          <div className="flex items-center justify-center min-h-[calc(100vh_-_122px_-_8rem_-_3rem_-_5rem_-_13.6rem)]">
            <div className="bg-white p-6 lg:p-16 rounded-lg border-2 border-solid">
              <h2 className="text-2xl font-bold text-center">
                Forgot Password
              </h2>
              <p className="text-gray-400 text-center mt-2">
                Enter your email address to get instructions to reset the
                password.
              </p>
              <ForgotPasswordForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
