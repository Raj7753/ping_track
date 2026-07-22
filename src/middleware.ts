import { clerkMiddleware } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Create the Clerk middleware handler
const clerk = clerkMiddleware()

export default async function middleware(req: NextRequest, event: any) {
  try {
    return await clerk(req, event)
  } catch (error) {
    console.error("[Middleware Error]", error)
    // If Clerk middleware crashes (e.g., key mismatch), don't return 500.
    // Let the request through — page-level auth will still protect routes.
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
}
