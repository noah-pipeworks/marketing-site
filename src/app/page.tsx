"use client";

import { useActionState } from "react";
import Image from "next/image";
import { joinWaitlist } from "./actions/waitlist";

export default function Home() {
  const [state, formAction, isPending] = useActionState(joinWaitlist, null);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-white">
      {/* Nav */}
      <nav className="flex items-center gap-3 px-6 py-4 sm:px-10">
        <Image
          src="/wizard-logo.png"
          alt="Pipeworks wizard logo"
          width={50}
          height={67}
          className="h-12 w-auto sm:h-14 dark-invert"
        />
        <Image
          src="/pipeworks-wordmark.svg"
          alt="Pipeworks"
          width={160}
          height={28}
          className="h-6 w-auto sm:h-7 dark-invert"
        />
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28 overflow-hidden">
        {/* Background wizard */}
        <Image
          src="/wizard-logo.png"
          alt=""
          width={501}
          height={673}
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-auto opacity-[0.12] select-none sm:h-[600px] lg:h-[700px] dark-invert"
          aria-hidden="true"
        />
        <h1 className="relative font-[family-name:var(--font-druk)] text-4xl uppercase leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Magical
          <br />
          Sales
          <br />
          Tools
        </h1>
        <p className="relative mt-6 max-w-xl text-lg text-gray-600 dark:text-neutral-400 sm:text-xl">
          Focused tools that are built to radically grow your business.
        </p>

        {/* Email Capture */}
        <form
          action={formAction}
          className="relative mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="waitlist-email" className="sr-only">
            Email address
          </label>
          <input
            id="waitlist-email"
            type="email"
            name="email"
            placeholder="you@company.com"
            required
            disabled={isPending}
            className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-black outline-none transition-colors placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-500 dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950"
          />
          <button
            type="submit"
            disabled={isPending}
            className="rounded-lg bg-black px-6 py-3 text-base font-medium text-white transition-all hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] disabled:opacity-50 dark:bg-white dark:text-black"
          >
            {isPending ? "Joining..." : "Get early access"}
          </button>
        </form>

        {state && (
          <p
            className={`relative mt-4 text-sm ${state.success ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
          >
            {state.message}
          </p>
        )}
      </section>

      {/* Products */}
      <section className="px-6 pb-24 sm:px-10">
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 dark:border-neutral-800 dark:bg-neutral-900">
            <h2 className="font-[family-name:var(--font-druk)] text-xl uppercase">
              HVAC Sales Tool
            </h2>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              Build professional HVAC proposals in a revolutionary way. System
              builder, built-in financing options, dynamic presentation
              generator.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 dark:border-neutral-800 dark:bg-neutral-900">
            <h2 className="font-[family-name:var(--font-druk)] text-xl uppercase">
              Plumbing Sales Tool
            </h2>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              Completely change how you approach plumbing estimation with an
              industry defining way to price any job on the spot.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-8 text-center text-sm text-gray-500 dark:border-neutral-800 dark:text-neutral-500">
        &copy; {new Date().getFullYear()} Pipeworks. All rights reserved.
      </footer>
    </div>
  );
}
