"use client"

import { SignIn, useAuth } from "@clerk/nextjs"
import { useSearchParams, useRouter } from "next/navigation"
import { Suspense, useEffect } from "react"

const SignInContent = () => {
  const searchParams = useSearchParams()
  const intent = searchParams.get("intent")
  const { isSignedIn } = useAuth()
  const router = useRouter()

  // If already signed in, redirect to dashboard immediately
  useEffect(() => {
    if (isSignedIn) {
      router.replace(intent ? `/dashboard?intent=${intent}` : "/dashboard")
    }
  }, [isSignedIn, intent, router])

  if (isSignedIn) {
    return (
      <div className="w-full flex-1 flex items-center justify-center">
        <div className="text-gray-400">Redirecting to dashboard...</div>
      </div>
    )
  }

  return (
    <div className="w-full flex-1 flex items-center justify-center">
      <SignIn
        routing="path"
        path="/sign-in"
        forceRedirectUrl={intent ? `/dashboard?intent=${intent}` : "/dashboard"}
      />
    </div>
  )
}

const Page = () => {
  return (
    <Suspense fallback={
      <div className="w-full flex-1 flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    }>
      <SignInContent />
    </Suspense>
  )
}

export default Page
