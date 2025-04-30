import { atob } from "node:buffer";
import axios from "axios";
import { redirect } from "next/navigation";

export default async function VerifyPage({
  searchParams,
}: {
  searchParams: { redirect: string };
}) {
  const redirectUrl = atob(searchParams.redirect);

  try {
    const response = await axios.get(redirectUrl);
    if (response.status < 300 && response.status >= 200) {
      return redirect("/");
    }
  } catch (e) {
    console.log(e);
    if (axios.isAxiosError(e)) {
      const status = e.response?.status;
      if (status === 401) {
        return redirect("/auth/login");
      }
    }
    return redirect("/auth/login");
  }
}
