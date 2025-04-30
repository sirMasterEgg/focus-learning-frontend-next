import type { Metadata } from "next";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import Image from "next/image";
import { bannerSignIn } from "@/app/assets/others";
import LoginForm from "@/app/_components/client-components/auth/LoginForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | Focus Learning Bali",
  description: "",
};

export default async function Login({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const callbackUrl = searchParams && (searchParams["callbackUrl"] as string);

  return (
    <>
      <Navbar />
      <main className="px-6 lg:px-16">
        <div className="mt-10 w-full mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col lg:px-10">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Sign In</h1>
                <span className="text-gray-400">
                  Please login to continue to your account.
                </span>
              </div>
              <LoginForm callbackUrl={callbackUrl} />
              <span className="inline-flex gap-1 justify-center mt-10 text-gray-400">
                Need an account?
                <Link
                  href="/auth/register"
                  className="text-blue-500 font-bold underline"
                >
                  Create one
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
