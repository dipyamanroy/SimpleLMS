import {
  clerkMiddleware,
  createRouteMatcher,
  authMiddleware,
} from '@clerk/nextjs/server';

/*
const isProtectedRoute = createRouteMatcher([
  '/(*)',
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});
*/

export default authMiddleware({});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};