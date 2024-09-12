import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge'

export default withMiddlewareAuthRequired()

export const config = {
  // exclude static file path and auth0 login/logout path
  matcher:
    '/((?!icons|_next/static|_next/image|favicon.ico|robots.txt|manifest.json|api/auth/login|api/auth/logout|$).*)',
}
