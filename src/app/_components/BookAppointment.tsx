import LinkWithGradientBackground from "@/app/_components/LinkWithGradientBackground";

export default function BookAppointment() {
  return (
    <div className="px-16 mt-10">
      <div className="w-full flex flex-row items-center justify-end gap-3">
        <span className="font-bold">Ready to Take the Next Step?</span>
        <LinkWithGradientBackground className="px-5 py-3.5" href="/contact">
          Book Appointment
        </LinkWithGradientBackground>
      </div>
    </div>
  );
}
