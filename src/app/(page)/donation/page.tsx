import Navbar from "@/app/_components/Navbar";
import { redirect } from "next/navigation";
import DonationForm from "@/app/_components/client-components/donation/DonationForm";
import Footer from "@/app/_components/Footer";
import Script from "next/script";
import axios from "axios";
import { GetDetailsDonationResponse } from "@/app/types/type";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Donate({
  searchParams,
}: {
  searchParams: { donateId: string };
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect(`/auth/login`);
  }

  if (!searchParams.donateId) {
    return redirect("/donate");
  }

  const { data: detailsDonation } = await axios.get<GetDetailsDonationResponse>(
    process.env.NEXT_URL + "/api/donations/" + searchParams.donateId
  );

  if (!detailsDonation?.data) {
    return redirect("/donate");
  }

  return (
    <>
      <Script
        id="midtrans-script"
        src="https://api.midtrans.com/v2/assets/js/midtrans-new-3ds.min.js"
        data-environment="sandbox"
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
        async
        type="text/javascript"
        strategy="beforeInteractive"
      />
      <Navbar />
      <main className="px-6 lg:px-16 bg-green-50">
        <div className="lg:py-10 w-full bg-green-50">
          <div className="flex justify-center min-h-screen w-full">
            <DonationForm donation={detailsDonation.data} />
          </div>
        </div>
      </main>
      <Footer footerBackgroundColor={"bg-green-50"} />
    </>
  );
}
