import LinkWithGradientBackground from "@/app/_components/LinkWithGradientBackground";

type BookAppointmentProps = {
  className?: string;
};

export default function BookAppointment({
  className = "",
}: BookAppointmentProps) {
  return (
    <div className={`px-6 lg:px-16 mt-10 ${className}`}>
      <div className="w-full flex flex-row items-center justify-end gap-3">
        <span className="font-bold">Ready to Take the Next Step?</span>
        <LinkWithGradientBackground
          className="px-5 py-3.5 text-center"
          href="/contact"
        >
          Book Appointment
        </LinkWithGradientBackground>
      </div>
    </div>
  );
}
