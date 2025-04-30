export default function Progress({
  maxValue,
  value,
}: {
  maxValue: number;
  value: number;
}) {
  const percentage = (value / maxValue) * 100;

  if (percentage >= 100) {
    return (
      <>
        <div className="w-full bg-progress-back rounded-full h-2.5">
          <div
            className="bg-progress h-2.5 rounded-full"
            style={{
              width: "100%",
            }}
          ></div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-full bg-progress-back rounded-full h-2.5">
        <div
          className="bg-progress h-2.5 rounded-full"
          style={{
            width: `${percentage}%`,
          }}
        ></div>
      </div>
    </>
  );
}
