"use client"

import { Heading } from "@/components/heading"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { client } from "@/lib/client"
import { useUser } from "@clerk/nextjs"
import { useMutation } from "@tanstack/react-query"
import { CheckIcon } from "lucide-react"
import { useRouter } from "next/navigation"

const Page = () => {
  const { user } = useUser()
  const router = useRouter()

  const INCLUDED_FEATURES = [
    "10,000 real-time events per month",
    "10 event categories",
    "Advanced analytics and insights",
    "Priority support",
  ]

  const FREE_FEATURES = [
    "100 events per month",
    "3 event categories",
    "Basic Discord notifications",
    "Community support",
  ]

  const { mutate: createCheckoutSession } = useMutation({
    mutationFn: async () => {
      const res = await client.payment.createCheckoutSession.$post()
      return await res.json()
    },
    onSuccess: ({ url }) => {
      if (url) router.push(url)
    },
  })

  const handleGetAccess = () => {
    if (user) {
      createCheckoutSession()
    } else {
      router.push("/sign-in?intent=upgrade")
    }
  }

  return (
    <div className="bg-brand-25 py-24 sm:py-32 dark:bg-dark-background">
      <MaxWidthWrapper>
        <div className="mx-auto max-w-2xl sm:text-center">
          <Heading className="text-center">Simple no-tricks pricing</Heading>
          <p className="mt-6 text-base/7 text-gray-600 max-w-prose text-center text-pretty dark:text-zinc-400">
            We hate subscriptions. And chances are, you do too. That&apos;s why we
            offer lifetime access to PingTrack for a one-time payment.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Free Plan */}
            <div className="bg-white rounded-3xl ring-1 ring-gray-200 p-8 sm:p-10 dark:bg-[#202225] dark:ring-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-zinc-300 flex items-center gap-2">
                <Icons.zap className="size-5 text-gray-400" />
                Free
              </h3>
              <p className="mt-4 text-sm/6 text-gray-600 dark:text-zinc-400">
                Perfect for getting started and exploring what PingTrack can do for your SaaS.
              </p>
              <p className="mt-6 flex items-baseline gap-x-2">
                <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-zinc-200">
                  $0
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-zinc-400">
                  forever
                </span>
              </p>

              <ul className="mt-8 space-y-3 text-sm/6 text-gray-600 dark:text-zinc-400">
                {FREE_FEATURES.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <CheckIcon className="h-6 w-5 flex-none text-gray-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                className="mt-8 w-full"
                onClick={() => router.push("/sign-up")}
              >
                Get Started Free
              </Button>
            </div>

            {/* Pro Plan */}
            <div className="relative bg-white rounded-3xl ring-2 ring-brand-600 p-8 sm:p-10 dark:bg-[#202225]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 whitespace-nowrap">
                <Icons.sparkles className="size-3.5" />
                MOST POPULAR
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-zinc-300 flex items-center gap-2">
                <Icons.infinity className="size-5 text-brand-600" />
                Lifetime Access
              </h3>
              <p className="mt-4 text-sm/6 text-gray-600 dark:text-zinc-400">
                Invest once in PingTrack and transform how you monitor your SaaS
                forever. Get instant alerts, track critical metrics and never miss
                a beat.
              </p>
              <p className="mt-6 flex items-baseline gap-x-2">
                <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-zinc-200">
                  $49
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-zinc-400">
                  one-time
                </span>
              </p>

              <ul className="mt-8 space-y-3 text-sm/6 text-gray-600 dark:text-zinc-400">
                {INCLUDED_FEATURES.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <CheckIcon className="h-6 w-5 flex-none text-brand-700 dark:text-brand-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button onClick={handleGetAccess} className="mt-8 w-full">
                Get PingTrack
              </Button>
              <p className="mt-4 text-xs leading-5 text-gray-600 text-center dark:text-zinc-500 flex items-center justify-center gap-1">
                <Icons.lock className="size-3" />
                Secure payment. Start monitoring in minutes.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default Page
