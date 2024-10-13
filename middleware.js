import { auth } from "./auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const { pathname } = req.nextUrl

  if (pathname.startsWith("/signin") && isLoggedIn) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  if (!isLoggedIn && pathname !== "/signin") {
    return NextResponse.redirect(new URL("/signin", req.url))
  }
})

export const config = {
  matcher: ['/checkout/:path*','/my-orders/:path*','/my-profile/:path*','/add-to-cart/:path*','/orders-details/:path*','/wishlist/:path*'],
}
