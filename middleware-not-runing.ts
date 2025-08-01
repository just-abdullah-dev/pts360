import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if user is authenticated (you can enhance this with JWT tokens)
  const isAuthenticated = request.cookies.get('auth-token')?.value || false;
  
  // Public routes that don't require authentication
  const publicRoutes = ['/login'];
  
  // If trying to access protected routes without authentication
  if (!publicRoutes.includes(pathname) && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // If authenticated user tries to access login page, redirect to dashboard
  if (pathname === '/login' && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};