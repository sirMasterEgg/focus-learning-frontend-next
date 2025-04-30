import withAuth, { NextRequestWithAuth } from "next-auth/middleware";

export default withAuth(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function middleware(req: NextRequestWithAuth) {
    //
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);
export const config = {
  matcher: ["/account/profile", "/donation"],
};
