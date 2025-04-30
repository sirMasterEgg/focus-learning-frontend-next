import { TbClockHour4 } from "react-icons/tb";
import { useCountdown } from "@/hooks/use-countdown-timer";

type CountdownTimerProps = {
  target: string;
};

export default function CountdownTimer(props: CountdownTimerProps) {
  const [, , minutes, seconds] = useCountdown(props.target);

  if (minutes < 0 && seconds < 0) {
    return <span className="text-red-500 font-bold">QRIS Expired</span>;
  }

  return (
    <span className="inline-flex flex-row gap-2 items-center text-gray-400">
      <TbClockHour4 className="size-5" />
      {minutes}
      {minutes !== 1 ? " mins " : " min "}
      {seconds}
      {seconds !== 1 ? " secs " : " sec "}
    </span>
  );
}
