import Navbar from "@/app/_components/Navbar";
import Image from "next/image";
import { bannerDonationTop } from "@/app/assets/donations";
import Footer from "@/app/_components/Footer";
import axios from "axios";
import { GetDetailsDonationResponse } from "@/app/types/type";
import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";
import DetailsDonationCard from "@/app/_components/DetailsDonationCard";
import { redirect } from "next/navigation";

const window = new JSDOM("").window;
const purify = DOMPurify(window);

export default async function DetailsDonation(
  props: {
    params: Promise<{
      donateId: string;
    }>;
  }
) {
  const params = await props.params;

  const {
    donateId
  } = params;

  const { data: detailsDonation } = await axios.get<GetDetailsDonationResponse>(
    process.env.NEXT_URL + "/api/donations/" + donateId
  );

  if (!detailsDonation?.data) {
    return redirect("/donate");
  }

  const clean = purify.sanitize(detailsDonation.data.description);

  return (
    <>
      <Navbar />
      <main className="px-6 lg:px-16">
        <div className="mt-10 w-full flex justify-center items-center">
          <Image
            width={1280}
            height={300}
            src={bannerDonationTop}
            className="w-full h-36 lg:h-auto object-cover"
            priority={true}
            alt="Banner Image"
          />
        </div>
        <div className="inline-flex flex-col justify-center items-center w-full my-20 gap-10">
          <div className="inline-flex flex-col items-start justify-center w-full">
            <h1 className="text-3xl font-bold text-gradient">
              {detailsDonation.data.title}
            </h1>
          </div>
          <div className="w-full min-h-[calc(100vh_-_122px_-_8rem_-_3rem_-_5rem_-_0rem)] flex flex-col lg:flex-row gap-5">
            <div className="flex-1">
              <div className="w-full max-h-80">
                <Image
                  src={detailsDonation.data.program_image}
                  alt={detailsDonation.data.title}
                  width={200}
                  height={100}
                  className="mx-auto w-auto h-auto max-h-80 max-w-full object-contain"
                />
              </div>
              <hr className="border border-gray-300 my-10" />
              <article dangerouslySetInnerHTML={{ __html: clean }}></article>
            </div>
            <div className="w-full mt-10 lg:mt-0 lg:w-1/3">
              <DetailsDonationCard detailsDonation={detailsDonation} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
