const getInitials = (name: string) => {
  const nameArray = name.split(" ");

  if (nameArray.length === 1) {
    return String(nameArray[0].charAt(0)).toUpperCase();
  }

  return String(
    nameArray[0].charAt(0) + nameArray[nameArray.length - 1].charAt(0)
  ).toUpperCase();
};

type TextAvatarProps = {
  className?: string;
  name: string;
};

export default function TextAvatar({ className, name }: TextAvatarProps) {
  return (
    <>
      <div
        className={`rounded-full bg-avatar-gray inline-flex items-center justify-center ${
          className ?? "size-6 text-xs"
        }`}
      >
        <span className="w-fit h-fit">{getInitials(name)}</span>
      </div>
    </>
  );
}
