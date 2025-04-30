import RegisterForm from "@/app/_components/client-components/auth/RegisterForm";
import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import { bannerSignIn } from "@/app/assets/others";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Focus Learning Bali",
  description: "",
};

export default function Register() {
  return (
    <>
      <Navbar />
      <main className="px-6 lg:px-16">
        <div className="mt-10 w-full mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col lg:px-10">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Sign Up</h1>
                <span className="text-gray-400">
                  Join our community and make a difference.
                </span>
              </div>
              <RegisterForm />
              <span className="inline-flex gap-1 justify-center mt-10 text-gray-400">
                Have an account?
                <Link
                  href="/auth/login"
                  className="text-blue-500 font-bold underline"
                >
                  Sign in
                </Link>
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
