import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the user token from cookies
  const token = request.cookies.get('user-token')?.value
  
  // Check if the route is admin route
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!token) {
      // Redirect to login if no token
      return NextResponse.redirect(new URL('/login', request.url))
    }
    
    // You can add additional admin role checks here
    // const isAdmin = checkIfAdmin(token)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*'
}