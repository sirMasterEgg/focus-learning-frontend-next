"use client";
import Image from "next/image";
import { FaRegCheckCircle, FaRegCreditCard } from "react-icons/fa";
import { type JSX, useEffect, useRef, useState } from "react";
import WhiteLogo from "@/app/assets/navbar/Main Logo with Name Vector.svg";
import { mastercardLogo, popUp, qris, visaLogo } from "@/app/assets/others";
import CurrencyInput from "@/app/_components/client-components/donation/CurrencyInput";
import { useForm } from "react-hook-form";
import {
  DetailsDonation,
  donationFormSchema,
  DonationFormType,
  GetPaymentNotificationResponse,
} from "@/app/types/type";
import { useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChargeTransaction } from "@/app/actions/action";
import { toast } from "sonner";
import { BiX } from "react-icons/bi";
import CountdownTimer from "@/app/_components/client-components/donate/CountdownTimer";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Script from "next/script";

const buttonDonation = [
  {
    id: 1,
    amount: 100000,
  },
  {
    id: 2,
    amount: 200000,
  },
  {
    id: 3,
    amount: 500000,
  },
  {
    id: 4,
    amount: 1000000,
  },
  {
    id: 5,
    amount: 10000000,
  },
];

type DonationAmountType = {
  withButton: boolean;
  amount: number;
};

type DonationFormProps = {
  donation: DetailsDonation;
};

export default function DonationForm({ donation }: DonationFormProps) {
  const { data: session } = useSession();
  const [selectedAmount, setSelectedAmount] = useState<DonationAmountType>({
    withButton: false,
    amount: 0,
  });
  const router = useRouter();

  const modalRef = useRef<HTMLDialogElement>(null);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const openModal = (content: JSX.Element) => {
    setModalContent(content);
    modalRef.current?.showModal();
  };
  const closeModal = (callback?: () => void) => {
    setModalContent(null);
    modalRef.current?.close();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (callback) {
      callback();
    }
  };
  const openModalWithDuration = (
    content: JSX.Element,
    duration: number,
    callback?: () => void
  ) => {
    setModalContent(content);
    modalRef.current?.showModal();
    timeoutRef.current = setTimeout(() => {
      closeModal(callback);
    }, duration);
  };

  const {
    handleSubmit,
    register,
    setValue,
    reset,
    watch,
    formState: { errors },
    unregister,
  } = useForm<DonationFormType>({
    defaultValues: {
      name: "",
      email: "",
      amount: selectedAmount.amount,
      payment_method: undefined,
    },
    resolver: zodResolver(donationFormSchema),
  });

  useEffect(() => {
    setValue("amount", selectedAmount.amount);
  }, [selectedAmount]);

  useEffect(() => {
    reset({
      name: session?.user?.name,
      email: session?.user?.email,
    });
  }, [session?.user?.name, session?.user?.email]);

  const [pollQrisStatus, setPollQrisStatus] = useState<boolean>(false);
  const [qrisStatusId, setQrisStatusId] = useState<string>("");
  const { data: qrisStatus } = useQuery({
    queryKey: ["qris-status", qrisStatusId],
    queryFn: async ({ queryKey }) => {
      const response = await axios.get<GetPaymentNotificationResponse>(
        `/api/donations/${queryKey[1]}/notifications`
      );
      return response.data;
    },
    enabled: pollQrisStatus && !!qrisStatusId,
    refetchInterval: 3000,
  });

  const handleSubmitDonation = async (data: DonationFormType) => {
    if (data.payment_method === "card" && data.card_cvv) {
      window.MidtransNew3ds.getCardToken(
        {
          card_cvv: data.card_cvv,
          card_number: data.card_number,
          card_exp_month: data.card_expire?.split("/")[0],
          card_exp_year: "20" + data.card_expire?.split("/")[1],
        },
        {
          onSuccess: async (response) => {
            const payment = await ChargeTransaction({
              donationId: donation.human_readable_id,
              name: data.name,
              email: data.email,
              amount: data.amount,
              payment_method: "card",
              id_token: response.token_id,
              save_card: data.save_card,
              customer_details: data.customer_details,
            });

            let popup: Window | null = null;
            window.MidtransNew3ds.authenticate(payment.data.redirect_url, {
              performAuthentication: (redirect_url: string) => {
                popup = window.open(redirect_url, "_blank", "popup");
              },
              onSuccess: () => {
                popup?.close();
                openModalWithDuration(
                  <>
                    <div className="inline-flex flex-row items-center justify-center w-full gap-3 text-secondary-100">
                      <FaRegCheckCircle className="text-3xl" />
                      <span className="text-3xl font-bold">
                        Donation received!
                      </span>
                    </div>
                    <div className="w-full flex justify-center items-center">
                      <Image
                        width={1200}
                        height={300}
                        src={popUp}
                        className="w-full"
                        alt="image"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-3xl text-gradient text-center font-bold max-w-[80%]">
                        Thank you for making a difference in a {"child's"} life!
                      </span>
                    </div>
                  </>,
                  5000,
                  () => {
                    router.push("/");
                  }
                );
              },
              onPending: () => {
                toast.error("Please wait for the payment to be processed.");
                popup?.close();
                router.push("/");
              },
              onFailure: () => {
                toast.error(
                  "We're sorry, but we couldn't complete your payment at this time. Please double-check your card details or try again later."
                );
                popup?.close();
                router.push("/");
              },
            });
          },
          onFailure: () => {
            toast.error(
              "Your payment was declined. Please check your card details or try a different payment method."
            );
          },
        }
      );
    } else if (data.payment_method === "qris") {
      const payment = await ChargeTransaction({
        donationId: donation.human_readable_id,
        name: data.name,
        email: data.email,
        amount: data.amount,
        payment_method: "qris",
      });
      setPollQrisStatus(true);
      setQrisStatusId(payment.data.payment_id);
      openModalWithDuration(
        <>
          <div className="flex flex-col justify-center gap-2 items-center">
            <span className="text-lg max-w-80 text-center">
              Scan the QR code for a quick and easy donation process.
            </span>
            <CountdownTimer target={payment.data.expired_at} />
            <div className="p-5">
              <Image
                src={payment.data.qris_url}
                alt="qris"
                width={630}
                height={630}
                className="size-80"
              />
            </div>
            <span className="font-bold text-xl">
              {Number(payment.data.amount).toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </>,
        new Date(payment.data.expired_at).getTime() - Date.now(),
        () => {
          setPollQrisStatus(false);
          setQrisStatusId("");
        }
      );
    }
  };

  useEffect(() => {
    if (qrisStatus?.data === "success") {
      closeModal(() => {
        setPollQrisStatus(false);
        setQrisStatusId("");
      });

      openModalWithDuration(
        <>
          <div className="inline-flex flex-row items-center justify-center w-full gap-3 text-secondary-100">
            <FaRegCheckCircle className="text-3xl" />
            <span className="text-3xl font-bold">Donation received!</span>
          </div>
          <div className="w-full flex justify-center items-center">
            <Image
              width={1200}
              height={300}
              src={popUp}
              className="w-full"
              alt="image"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl text-gradient text-center font-bold max-w-[80%]">
              Your generosity will make a difference !
            </span>
          </div>
        </>,
        5000,
        () => {
          router.push("/");
        }
      );
    }
  }, [qrisStatus]);

  const expiredDate = watch("card_expire");
  useEffect(() => {
    if (expiredDate) {
      let value = expiredDate.replace(/\D/g, "");

      if (value.length >= 2) {
        let month = value.slice(0, 2);
        const monthNum = parseInt(month, 10);

        if (monthNum > 12) {
          month = "12";
        } else if (monthNum < 1) {
          month = "01";
        } else {
          month = month.padStart(2, "0");
        }

        const year = value.slice(2, 4);

        value = `${month}/${year}`;
      }

      setValue("card_expire", value.slice(0, 5));
    }
  }, [expiredDate, setValue]);

  const cardNumber = watch("card_number");
  useEffect(() => {
    if (cardNumber) {
      const value = cardNumber.replace(/\D/g, "");
      const result = value.match(/\d{1,4}/g);
      if (result?.length) {
        setValue("card_number", result.join(" "));
      } else {
        setValue("card_number", value);
      }
    }
  }, [cardNumber, setValue]);

  const phoneNumber = watch("customer_details.phone_number");
  useEffect(() => {
    if (phoneNumber) {
      const value = phoneNumber.replace(/[^+\d\s()-]+/, "");
      setValue("customer_details.phone_number", value);
    }
  }, [phoneNumber, setValue]);

  const payment = watch("payment_method", undefined);
  const cardPayment = payment === "card";

  useEffect(() => {
    if (!cardPayment) {
      unregister("customer_details.first_name");
      unregister("customer_details.last_name");
      unregister("customer_details.phone_number");
      unregister("card_number");
      unregister("card_expire");
      unregister("card_cvv");
      unregister("save_card");
    }
  }, [payment]);

  useEffect(() => {
    if (errors) {
      if (errors.customer_details?.phone_number)
        toast.error(errors.customer_details.phone_number.message);
      if (errors.customer_details?.last_name)
        toast.error(errors.customer_details.last_name.message);
      if (errors.customer_details?.first_name)
        toast.error(errors.customer_details.first_name.message);
      if (errors.save_card) toast.error(errors.save_card.message);
      if (errors.card_cvv) toast.error(errors.card_cvv.message);
      if (errors.card_expire) toast.error(errors.card_expire.message);
      if (errors.card_number) toast.error(errors.card_number.message);
      if (errors.payment_method) toast.error(errors.payment_method.message);
      if (errors.amount) toast.error(errors.amount.message);
      if (errors.email) toast.error(errors.email.message);
      if (errors.name) toast.error(errors.name.message);
    }
  }, [errors]);

  return (
    <>
      <Script
        id="midtrans-script"
        src="https://api.midtrans.com/v2/assets/js/midtrans-new-3ds.min.js"
        data-environment="sandbox"
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
        async
        type="text/javascript"
        strategy="afterInteractive"
      />
      <div className="py-14 lg:p-14 w-full min-h-screen">
        <div className="w-full flex-1 bg-white shadow-md rounded-sm p-8">
          <div className="flex flex-col lg:flex-row gap-2 items-center">
            <div className="w-2/5 max-h-80">
              <Image
                src={donation.program_image}
                alt={donation.title}
                className="mx-auto w-auto h-auto max-h-80 max-w-full object-contain"
                width={200}
                height={200}
                priority
              />
            </div>
            <div className="flex-1 py-8 lg:p-8 text-center lg:text-left">
              <div className="inline-block text-2xl font-bold align-text-bottom text-center lg:text-left">
                {donation.title}
              </div>
              <hr className="hidden lg:block border-t border-gray-300 mt-6 mb-6" />
              <div className="inline-block text-lg text-gray-400 text-center lg:text-justify">
                Your donation will benefit <b>{donation.recipient}</b>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(handleSubmitDonation)}
            className="mt-8 flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1">
              <div className="font-bold inline-flex flex-row gap-1 mb-3">
                Your Details<span className="text-red-500">*</span>
              </div>
              <label className="flex flex-col gap-1">
                <span className="font-bold">Name</span>
                <input
                  className="input"
                  placeholder="Enter Your Full Name"
                  type="text"
                  {...register("name")}
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="font-bold">Email</span>
                <input
                  className="input"
                  placeholder="Enter Your Email"
                  type="email"
                  inputMode="email"
                  {...register("email")}
                />
              </label>
              <div className="text-right text-sm">
                The invoice email will be sent to this email address.
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold">Enter Your Donation</span>
              <div className="flex flex-wrap items-center justify-center lg:grid lg:grid-cols-5 gap-2">
                {buttonDonation.map((donation) => (
                  <button
                    key={donation.id}
                    type="button"
                    className={`border min-w-36 lg:min-w-min rounded-xl shadow font-bold p-4 ${
                      selectedAmount.withButton &&
                      selectedAmount.amount === donation.amount
                        ? "bg-secondary-100 text-white"
                        : "border-gray-300"
                    }`}
                    onClick={() =>
                      selectedAmount.withButton &&
                      selectedAmount.amount === donation.amount
                        ? setSelectedAmount({
                            withButton: false,
                            amount: 0,
                          })
                        : setSelectedAmount({
                            withButton: true,
                            amount: donation.amount,
                          })
                    }
                  >
                    {donation.amount.toLocaleString("id-ID", {
                      currency: "IDR",
                      style: "currency",
                      maximumFractionDigits: 0,
                    })}
                  </button>
                ))}
              </div>
              <label className="flex flex-col gap-1 relative">
                <span className="absolute left-2 top-[calc(50%-0.75rem)]">
                  Rp
                </span>
                <CurrencyInput
                  name="amount"
                  maxLength={16}
                  onChange={(value) =>
                    setSelectedAmount({
                      withButton: false,
                      amount: Number(value) || 0,
                    })
                  }
                  className="input pl-8"
                  placeholder="Other Amount"
                />
              </label>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold">Payment Method</span>
              <div>
                <label
                  className={`flex items-center justify-between gap-3 p-4 border border-gray-300 has-checked:border-black rounded-lg cursor-pointer shadow-xs peer`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      {...register("payment_method")}
                      value="card"
                      className="w-5 h-5"
                    />
                    <span className="w-8">
                      <FaRegCreditCard className="size-5 mx-auto" />
                    </span>
                    <span>Credit or Debit Card</span>
                  </div>

                  {/* Right Section (Card Logos) */}
                  <div className="flex items-center gap-2">
                    <Image
                      src={mastercardLogo}
                      alt="Mastercard"
                      className="w-8 h-auto"
                    />
                    <Image src={visaLogo} alt="Visa" className="w-8 h-auto" />
                  </div>
                </label>
                <div
                  className={`overflow-hidden transition-all duration-300 max-h-0 opacity-0 peer-has-checked:max-h-[600px] peer-has-checked:opacity-100 ${
                    cardPayment && "peer-has-checked:my-3"
                  }`}
                >
                  {cardPayment && (
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-300 flex flex-col gap-3">
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="input"
                          {...register("customer_details.first_name")}
                        />
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="input"
                          {...register("customer_details.last_name")}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <input
                          className="input"
                          placeholder="Enter Your Phone Number"
                          type="text"
                          inputMode="numeric"
                          {...register("customer_details.phone_number")}
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Card Number"
                        className="input"
                        inputMode="numeric"
                        maxLength={23}
                        {...register("card_number")}
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="input"
                          maxLength={5}
                          inputMode="numeric"
                          {...register("card_expire")}
                        />
                        <input
                          type="password"
                          placeholder="CVV"
                          className="input"
                          maxLength={3}
                          inputMode="numeric"
                          {...register("card_cvv")}
                        />
                      </div>
                      <div className="mt-3 ml-1 flex items-center gap-2">
                        <label className="inline-flex flex-row gap-2 items-center">
                          <input
                            type="checkbox"
                            className="size-4"
                            {...register("save_card")}
                          />
                          Save card for future donations
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <label
                className={`flex items-center gap-3 p-4 border has-checked:border-black border-gray-300 rounded-lg cursor-pointer shadow-xs`}
              >
                <input
                  type="radio"
                  {...register("payment_method")}
                  value="qris"
                  className="w-5 h-5"
                  readOnly
                />
                <Image
                  src={qris}
                  alt="QRIS"
                  className="w-8 h-auto"
                  width={30}
                  height={30}
                />
                <span>QR Payment</span>
              </label>
            </div>
            <hr className="border-t-2 border-gray-300 border-dashed mt-16 mb-8" />
            <div className="flex justify-center">
              <Image
                src={WhiteLogo}
                alt="WhiteLogo"
                width={100}
                height={50}
                className="w-28 h-auto"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div>
                <label className="flex flex-col gap-1">
                  <span className="font-bold">Your Donation</span>
                </label>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-gray-300">
                    <span className="text-red-500 mr-1">*</span>Your Donation
                  </span>
                  <span className="">Total due today</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-gray-300 text-right">
                    Amount Donation
                  </span>
                  <span className="text-right">
                    {watch("amount")
                      ? (watch("amount") || 0).toLocaleString("id-ID", {
                          currency: "IDR",
                          style: "currency",
                          maximumFractionDigits: 0,
                        })
                      : "Amount Donation"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end mt-16">
              <button
                type="submit"
                className="w-40 bg-secondary-100 rounded-full h-12 font-bold text-white"
              >
                Donate Now
              </button>
            </div>

            <div className="flex justify-end mt-8">
              <span className="text-gray-300 text-sm italic text-right">
                <span className="text-red-500 text-base">*</span>Your donation
                will directly support our programs. Please note that your
                donation may be subject to applicable taxes.
              </span>
            </div>
          </form>
        </div>
      </div>
      <dialog
        ref={modalRef}
        className="dialog"
        onCancel={(e) => e.preventDefault()}
      >
        <div className="bg-white w-11/12 lg:w-[calc(100vw-20rem)] rounded-xl flex flex-col gap-10 p-10 relative shadow-2xl">
          <button
            onClick={() => closeModal()}
            className="absolute right-2 top-2 rounded-full p-1 text-gray-400 hover:bg-gray-200 transition duration-300"
          >
            <BiX className="size-6" />
          </button>
          <>{modalContent}</>
        </div>
      </dialog>
    </>
  );
}
