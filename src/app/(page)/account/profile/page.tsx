import ProfileCard from "@/app/_components/client-components/account/ProfileCard";
import ProfileForm from "@/app/_components/client-components/account/ProfileForm";
import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import type { Metadata } from "next";
import { withAuthentication } from "@/utils/withAuthentication";

export const metadata: Metadata = {
  title: "Account | Focus Learning Bali",
  description: "",
  icons: "../../assets/icon.svg",
};

async function AccountPage() {
  return (
    <>
      <Navbar />
      <main className="px-6 lg:px-16">
        <div className="mt-10 w-full mb-10">
          <div className="min-h-[calc(100vh_-_122px_-_8rem_-_3rem_-_5rem_-_13.6rem)] flex flex-col lg:flex-row items-center lg:items-start gap-8 justify-between">
            <div className="h-fit">
              <ProfileCard />
            </div>
            <div className="flex-1 h-fit">
              <h1 className="text-3xl font-bold text-center lg:text-left">
                Personal details
              </h1>
              <div className="text-gray-400 text-center lg:text-left">
                Feel free to any of your details below so your account is up to
                date.
              </div>
              <ProfileForm />
            </div>
            {/*<div className="h-fit">
              <button className="inline-flex gap-2 items-center justify-center text-red-600 hover:bg-red-300/20 rounded-lg px-4 py-3 transition duration-500 group">
                Sign Out{" "}
                <PiSignOut className="size-5 group-hover:translate-x-1 transition duration-500" />
              </button>
            </div>*/}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default withAuthentication(AccountPage);
