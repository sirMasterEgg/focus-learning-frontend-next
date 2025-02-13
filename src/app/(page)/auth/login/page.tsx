import type { Metadata } from "next";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import Image from "next/image";
import { bannerSignIn } from "@/app/assets/others";
import LoginForm from "@/app/_components/client-components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Login | Focus Learning Bali",
  description: "",
  icons: "../../../assets/icon.svg",
};

export default function Login() {
  return (
    <>
      <Navbar />
      <main className="px-16">
        <div className="mt-10 w-full mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col px-10">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Sign In</h1>
                <span className="text-gray-400">
                  Please login to continue to your account.
                </span>
              </div>
              <LoginForm />
              <span className="inline-flex gap-1 justify-center mt-10 text-gray-400">
                Need an account?
                <a
                  href="/auth/register"
                  className="text-blue-500 font-bold underline"
                >
                  Create one
                </a>
              </span>
            </div>
            <Image
              src={bannerSignIn}
              alt={"banner"}
              className="rounded-lg hidden lg:block"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
