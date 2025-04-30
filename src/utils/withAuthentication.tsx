import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export type WithAuthProps = {
  session: Session;
};
export function withAuthentication<P extends WithAuthProps>(
  WrappedComponent: React.ComponentType<P>
) {
  return async function AuthenticatedComponent(
    props: Omit<P, keyof WithAuthProps>
  ) {
    const session = await getServerSession(authOptions);

    if (!session) {
      return redirect("/auth/login");
    }

    return <WrappedComponent {...(props as P)} session={session} />;
  };
}
