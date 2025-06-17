import TextAvatar from "@/app/_components/TextAvatar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function ProfileCard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p className="text-red-500">You must be logged in to view this.</p>;
  }

  return (
    <div className="w-64 rounded-xl shadow-lg bg-white overflow-hidden">
      <div className="bg-blue-100 p-3 flex items-center space-x-1">
        <span className="text-gray-600 text-lg">Hi,</span>
        <span
          className="font-bold text-gray-900 text-lg truncate"
          title={session?.user?.name}
        >
          {session?.user?.name}
        </span>
        <span className="text-lg">👋</span>
      </div>
      <div className="relative p-3 size-64">
        <TextAvatar
          name={session?.user?.name || ""}
          className="size-full text-8xl font-black text-white bg-gray-500"
        />
      </div>
    </div>
  );
}
