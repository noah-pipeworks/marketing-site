"use client";

import { useActionState } from "react";
import Image from "next/image";
import { joinWaitlist } from "./actions/waitlist";

export default function Home() {
  const [state, formAction, isPending] = useActionState(joinWaitlist, null);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <div className="min-h-screen bg-bg text-ink">
        {/* Nav */}
        <nav className="flex items-center justify-between px-6 py-4 sm:px-10">
          <div className="flex items-center gap-3">
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
          </div>
          <a
            href="https://app.pipeworks.io"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Log in (opens in new tab)"
            className="rounded-lg border border-line-strong px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bg-elevated hover:border-ink active:scale-[0.98]"
          >
            Log in
          </a>
        </nav>

        {/* Hero */}
        <main id="main">
          <section className="relative flex flex-col items-center px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28 overflow-hidden">
            {/* Background wizard */}
            <Image
              src="/wizard-logo.png"
              alt=""
              width={501}
              height={673}
              priority
              className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-auto opacity-[0.12] select-none sm:h-[600px] lg:h-[700px]"
              aria-hidden="true"
            />
            <h1 className="relative font-[family-name:var(--font-druk)] text-4xl uppercase leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Magical
              <br />
              Sales
              <br />
              Tools
            </h1>
            <p className="relative mt-6 max-w-xl text-lg text-ink-soft sm:text-xl">
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
                className="flex-1 rounded-lg border border-line-strong bg-bg-elevated px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-ink-softer focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isPending}
                className="rounded-lg bg-ink px-6 py-3 text-base font-medium text-bg-elevated transition-transform hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
              >
                {isPending ? "Joining..." : "Get early access"}
              </button>
            </form>

            <div aria-live="polite" role="status" className="relative mt-4 min-h-[20px]">
              {state && (
                <p
                  className={`text-sm ${state.success ? "text-success" : "text-error"}`}
                >
                  {state.message}
                </p>
              )}
            </div>
          </section>

          {/* Products */}
          <section className="px-6 pb-24 sm:px-10">
            <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-line bg-bg-elevated p-8">
                <h2 className="font-[family-name:var(--font-druk)] text-xl uppercase">
                  HVAC Sales Tool
                </h2>
                <p className="mt-2 text-ink-soft">
                  Build professional HVAC proposals in a revolutionary way. System
                  builder, built-in financing options, dynamic presentation
                  generator.
                </p>
              </div>

              <div className="rounded-xl border border-line bg-bg-elevated p-8">
                <h2 className="font-[family-name:var(--font-druk)] text-xl uppercase">
                  Plumbing Sales Tool
                </h2>
                <p className="mt-2 text-ink-soft">
                  Completely change how you approach plumbing estimation with an
                  industry defining way to price any job on the spot.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-line px-6 py-8 text-center text-sm text-ink-softer">
          &copy; {new Date().getFullYear()} Pipeworks. All rights reserved.
        </footer>
      </div>
    </>
  );
}
