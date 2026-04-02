"use client";

import { useActionState } from "react";
import Image from "next/image";
import { joinWaitlist } from "./actions/waitlist";

export default function Home() {
  const [state, formAction, isPending] = useActionState(joinWaitlist, null);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Nav */}
      <nav className="flex items-center gap-3 px-6 py-4 sm:px-10">
        <Image
          src="/wizard-logo.png"
          alt="Pipeworks wizard logo"
          width={50}
          height={67}
          className="h-12 w-auto sm:h-14"
        />
        <Image
          src="/pipeworks-wordmark.svg"
          alt="Pipeworks"
          width={160}
          height={28}
          className="h-6 w-auto sm:h-7"
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
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-auto opacity-[0.04] select-none sm:h-[600px] lg:h-[700px]"
          aria-hidden="true"
        />
        <h1 className="relative font-[family-name:var(--font-druk)] text-4xl uppercase leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Software so good
          <br />
          it feels like magic
        </h1>
        <p className="relative mt-6 max-w-xl text-lg text-gray-600 sm:text-xl">
          Construction software designed by contractors, for contractors.
          Focused tools that solve one problem at a time.
        </p>

        {/* Email Capture */}
        <form
          action={formAction}
          className="relative mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            name="email"
            placeholder="you@company.com"
            required
            disabled={isPending}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-base outline-none transition-colors placeholder:text-gray-400 focus:border-black disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isPending}
            className="rounded-lg bg-black px-6 py-3 text-base font-medium text-white transition-opacity hover:opacity-80 disabled:opacity-50"
          >
            {isPending ? "Joining..." : "Get early access"}
          </button>
        </form>

        {state && (
          <p
            className={`relative mt-4 text-sm ${state.success ? "text-green-600" : "text-red-600"}`}
          >
            {state.message}
          </p>
        )}
      </section>

      {/* Products */}
      <section className="px-6 pb-24 sm:px-10">
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-8">
            <span className="inline-block rounded-full bg-black px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
              Coming Soon
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-druk)] text-xl uppercase tracking-tight">
              HVAC Sales Tool
            </h2>
            <p className="mt-2 text-gray-600">
              Build professional HVAC proposals in minutes. Equipment selection,
              pricing, financing — all in one place.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-8">
            <span className="inline-block rounded-full bg-black px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
              Coming Soon
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-druk)] text-xl uppercase tracking-tight">
              Plumbing Sales Tool
            </h2>
            <p className="mt-2 text-gray-600">
              Streamline plumbing estimates and proposals. Purpose-built for
              plumbing contractors who want tools that actually work.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Pipeworks. All rights reserved.
      </footer>
    </div>
  );
}
