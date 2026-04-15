"use client";

import { useActionState } from "react";
import Image from "next/image";
import { joinWaitlist } from "./actions/waitlist";

function EmailForm({
  id,
  formAction,
  isPending,
  state,
}: {
  id: string;
  formAction: (payload: FormData) => void;
  isPending: boolean;
  state: { success: boolean; message: string } | null;
}) {
  return (
    <>
      <form
        action={formAction}
        className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
      >
        <label htmlFor={id} className="sr-only">
          Email address
        </label>
        <input
          id={id}
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
      <div
        aria-live="polite"
        role="status"
        className="mt-3 min-h-[20px]"
      >
        {state && (
          <p
            className={`text-sm ${state.success ? "text-success" : "text-error"}`}
          >
            {state.message}
          </p>
        )}
      </div>
    </>
  );
}

export default function Home() {
  const [state, formAction, isPending] = useActionState(joinWaitlist, null);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <div className="min-h-screen bg-bg text-ink">
        {/* Nav */}
        <nav className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-10">
            <div className="flex items-center gap-3">
              <Image
                src="/wizard-logo.png"
                alt="Pipeworks wizard logo"
                width={50}
                height={67}
                className="h-10 w-auto sm:h-12"
              />
              <Image
                src="/pipeworks-wordmark.svg"
                alt="Pipeworks"
                width={160}
                height={28}
                className="h-5 w-auto sm:h-6"
              />
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="#products"
                className="hidden text-sm font-medium text-ink-soft transition-colors hover:text-ink sm:block"
              >
                Products
              </a>
              <a
                href="#why"
                className="hidden text-sm font-medium text-ink-soft transition-colors hover:text-ink sm:block"
              >
                Why Pipeworks
              </a>
              <a
                href="#faq"
                className="hidden text-sm font-medium text-ink-soft transition-colors hover:text-ink sm:block"
              >
                FAQ
              </a>
              <a
                href="https://app.pipeworks.io"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Log in (opens in new tab)"
                className="rounded-lg border border-line-strong px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bg-elevated hover:border-ink active:scale-[0.98]"
              >
                Log in
              </a>
            </div>
          </div>
        </nav>

        <main id="main">
          {/* ============ HERO ============ */}
          <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
            <Image
              src="/wizard-logo.png"
              alt=""
              width={501}
              height={673}
              priority
              className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-auto opacity-[0.08] select-none sm:h-[600px] lg:h-[700px]"
              aria-hidden="true"
            />

            <div className="relative">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-bg-elevated px-4 py-1.5 text-xs font-medium tracking-wide text-ink-soft uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-ink-soft" aria-hidden="true" />
                Private beta · HVAC first
              </p>

              <h1 className="font-[family-name:var(--font-druk)] text-5xl uppercase leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
                Magical
                <br />
                Sales
                <br />
                Tools
              </h1>

              <p className="mx-auto mt-6 max-w-lg text-lg text-ink-soft sm:text-xl">
                Sales software for the trades. Quoting, proposals, and follow-up — on any device, at any kitchen table.
              </p>

              <div className="mt-10 flex flex-col items-center">
                <EmailForm
                  id="hero-email"
                  formAction={formAction}
                  isPending={isPending}
                  state={state}
                />
                <p className="mt-1 text-xs text-ink-softer">
                  No spam. We only email when something real ships.
                </p>
              </div>
            </div>
          </section>

          {/* ============ BUILT FOR ============ */}
          <section className="border-y border-line bg-bg-dim">
            <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:gap-12 sm:px-10">
              <p className="shrink-0 text-xs font-semibold tracking-widest text-ink-softer uppercase">
                Built for
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-4">
                <div>
                  <p className="text-sm font-semibold">HVAC contractors</p>
                  <p className="text-xs text-ink-softer">Available now · private beta</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Plumbing contractors</p>
                  <p className="text-xs text-ink-softer">Coming next</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">More trades</p>
                  <p className="text-xs text-ink-softer">Electrical · roofing · more</p>
                </div>
              </div>
            </div>
          </section>

          {/* ============ HVAC PRODUCT ============ */}
          <section id="products" className="px-6 py-20 sm:px-10 sm:py-28">
            <div className="mx-auto max-w-5xl">
              <p className="text-xs font-semibold tracking-widest text-ink-softer uppercase">
                Product 01 · Available now
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-druk)] text-3xl uppercase leading-tight sm:text-4xl md:text-5xl">
                The HVAC Sales Tool.
              </h2>
              <p className="mt-4 max-w-xl text-lg text-ink-soft">
                Build professional HVAC proposals in minutes. Equipment selection, financing, and presentations — all in one place, designed by a real HVAC sales pro.
              </p>

              <div className="mt-12 grid gap-5 sm:grid-cols-3">
                <div className="rounded-xl border border-line bg-bg-elevated p-7">
                  <h3 className="text-base font-bold">System Builder</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    Pick an outdoor unit and we auto-match the indoor equipment. No more flipping through catalogs or checking AHRI sheets by hand.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-bg-elevated p-7">
                  <h3 className="text-base font-bold">Built-in Financing</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    Multiple financing plans right inside the proposal. Customers see monthly payments alongside the system — no separate calculators.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-bg-elevated p-7">
                  <h3 className="text-base font-bold">Dynamic Presentations</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    Beautiful proposals generated on the fly. Present from your tablet at the kitchen table — branded, professional, ready to sign.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ============ PLUMBING TEASER ============ */}
          <section className="border-y border-line bg-bg-dim px-6 py-20 sm:px-10 sm:py-28">
            <div className="mx-auto max-w-5xl">
              <p className="text-xs font-semibold tracking-widest text-ink-softer uppercase">
                Product 02 · Coming next
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-druk)] text-3xl uppercase leading-tight sm:text-4xl md:text-5xl">
                The Plumbing Sales Tool.
              </h2>
              <p className="mt-4 max-w-xl text-lg text-ink-soft">
                Price any plumbing job on the spot. Same approach — tuned for the plumbing trade.
              </p>

              <div className="mt-12 grid gap-5 sm:grid-cols-3">
                <div className="rounded-xl border border-line bg-bg-elevated p-7">
                  <h3 className="text-base font-bold">Spot Pricing</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    Catalog-driven job pricing that matches how real plumbers quote work at the door.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-bg-elevated p-7">
                  <h3 className="text-base font-bold">Service Menus</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    Tiered good/better/best options your tech can walk through without flipping binders.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-bg-elevated p-7">
                  <h3 className="text-base font-bold">On-the-spot Close</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    Sign, collect payment, and schedule the work — all without leaving the app.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ============ WHY PIPEWORKS ============ */}
          <section id="why" className="px-6 py-20 sm:px-10 sm:py-28">
            <div className="mx-auto max-w-5xl">
              <p className="text-xs font-semibold tracking-widest text-ink-softer uppercase">
                Why Pipeworks
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-druk)] text-3xl uppercase leading-tight sm:text-4xl md:text-5xl">
                Built for the people
                <br className="hidden sm:block" />
                {" "}doing the work.
              </h2>

              <div className="mt-14 grid gap-12 sm:grid-cols-3 sm:gap-10">
                <div className="border-t-2 border-ink pt-6">
                  <p className="text-xs font-bold tracking-widest text-ink-softer uppercase">I</p>
                  <h3 className="mt-3 text-xl font-bold">Built by contractors.</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    Pipeworks is built by people who&apos;ve sold HVAC, wrenched on systems, and run the numbers at kitchen tables. The software reflects the trade because it came from it.
                  </p>
                </div>
                <div className="border-t-2 border-ink pt-6">
                  <p className="text-xs font-bold tracking-widest text-ink-softer uppercase">II</p>
                  <h3 className="mt-3 text-xl font-bold">Focused tools, not platforms.</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    Every Pipeworks product solves one problem extremely well. No bloated all-in-one suites. Use what you need — ignore what you don&apos;t.
                  </p>
                </div>
                <div className="border-t-2 border-ink pt-6">
                  <p className="text-xs font-bold tracking-widest text-ink-softer uppercase">III</p>
                  <h3 className="mt-3 text-xl font-bold">Software that feels like magic.</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    The best tools disappear into the work. Ours are fast, quiet, and do the right thing by default — the way good tools should.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ============ TRUST STRIP ============ */}
          <section className="border-y border-ink bg-ink text-bg-elevated">
            <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
              <div>
                <p className="text-sm font-semibold">Independently built. Seriously run.</p>
                <p className="mt-1 text-xs text-ink-softer">Solo-founded. Real contact. Real roadmap.</p>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium tracking-wide text-ink-softer uppercase">
                <span>SSL Encrypted</span>
                <span>Supabase Auth</span>
                <span>Row-Level Security</span>
                <span>US-based</span>
              </div>
              <a
                href="mailto:noah@pipeworks.io"
                className="inline-flex self-start rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-bg-elevated transition-colors hover:bg-bg-elevated hover:text-ink sm:self-auto"
              >
                noah@pipeworks.io
              </a>
            </div>
          </section>

          {/* ============ FAQ ============ */}
          <section id="faq" className="px-6 py-20 sm:px-10 sm:py-28">
            <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-[0.4fr_0.6fr] sm:gap-16">
              <div>
                <p className="text-xs font-semibold tracking-widest text-ink-softer uppercase">
                  Frequently asked
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-druk)] text-3xl uppercase leading-tight sm:text-4xl">
                  Questions,
                  <br />
                  answered.
                </h2>
                <p className="mt-4 text-sm text-ink-soft">
                  Can&apos;t find what you&apos;re looking for?{" "}
                  <a
                    href="mailto:noah@pipeworks.io"
                    className="font-medium text-ink underline underline-offset-2"
                  >
                    Email noah@pipeworks.io
                  </a>{" "}
                  — a real person will reply.
                </p>
              </div>

              <div className="border-t border-line">
                <details className="faq-item border-b border-line py-5" open>
                  <summary className="flex items-center justify-between text-base font-semibold">
                    Who is this for?
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    HVAC contractors and their sales teams who sit across the kitchen table from homeowners and need to present options, prices, and financing. If you&apos;ve ever fumbled with a clipboard, a calculator, and three different binders on a sales call — you&apos;re the target.
                  </p>
                </details>
                <details className="faq-item border-b border-line py-5">
                  <summary className="flex items-center justify-between text-base font-semibold">
                    When can I use it?
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    The HVAC Sales Tool is in private beta today with a small group of contractors. Join the waitlist and we&apos;ll reach out when a spot opens. We&apos;re intentionally onboarding slowly so we can actually help each customer.
                  </p>
                </details>
                <details className="faq-item border-b border-line py-5">
                  <summary className="flex items-center justify-between text-base font-semibold">
                    How much will it cost?
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    Pricing is TBD. We&apos;re talking to beta customers to find a number that&apos;s obviously worth it. Waitlist members get locked-in pricing at launch.
                  </p>
                </details>
                <details className="faq-item border-b border-line py-5">
                  <summary className="flex items-center justify-between text-base font-semibold">
                    Is my data safe?
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    Yes. All traffic is SSL-encrypted. Authentication uses Supabase Auth with row-level security enforced at the database — no client ever sees another customer&apos;s data. No third-party analytics that sell your info. Hosted in the US.
                  </p>
                </details>
                <details className="faq-item border-b border-line py-5">
                  <summary className="flex items-center justify-between text-base font-semibold">
                    Can I influence the roadmap?
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    Yes — that&apos;s the whole point of being early. Beta customers get a direct line to the founder and most features on the roadmap came from contractor feedback. If you want software built around how you actually work, this is the window.
                  </p>
                </details>
              </div>
            </div>
          </section>

          {/* ============ FINAL CTA ============ */}
          <section className="border-t border-line bg-bg-dim px-6 py-20 text-center sm:py-28">
            <div className="mx-auto max-w-2xl">
              <h2 className="font-[family-name:var(--font-druk)] text-3xl uppercase leading-tight sm:text-4xl md:text-5xl">
                Software so good
                <br />
                it feels like magic.
              </h2>
              <p className="mx-auto mt-5 max-w-md text-lg text-ink-soft">
                Join the waitlist. We&apos;ll only email you when something real ships.
              </p>
              <div className="mt-10 flex flex-col items-center">
                <EmailForm
                  id="footer-email"
                  formAction={formAction}
                  isPending={isPending}
                  state={state}
                />
              </div>
            </div>
          </section>
        </main>

        {/* ============ FOOTER ============ */}
        <footer className="border-t border-line px-6 py-12 sm:px-10">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-10 sm:grid-cols-[1.5fr_1fr_1fr_1fr]">
              <div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/wizard-logo.png"
                    alt=""
                    width={50}
                    height={67}
                    className="h-10 w-auto"
                    aria-hidden="true"
                  />
                  <Image
                    src="/pipeworks-wordmark.svg"
                    alt="Pipeworks"
                    width={160}
                    height={28}
                    className="h-5 w-auto"
                  />
                </div>
                <p className="mt-4 max-w-[240px] text-sm leading-relaxed text-ink-softer">
                  Focused software for contractors. Built by contractors, for contractors.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold tracking-widest text-ink uppercase">
                  Products
                </h4>
                <ul className="mt-4 space-y-2.5">
                  <li>
                    <a href="#products" className="text-sm text-ink-softer transition-colors hover:text-ink">
                      HVAC Sales Tool
                    </a>
                  </li>
                  <li>
                    <a href="#products" className="text-sm text-ink-softer transition-colors hover:text-ink">
                      Plumbing Sales Tool
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold tracking-widest text-ink uppercase">
                  Company
                </h4>
                <ul className="mt-4 space-y-2.5">
                  <li>
                    <a href="#why" className="text-sm text-ink-softer transition-colors hover:text-ink">
                      Why Pipeworks
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="text-sm text-ink-softer transition-colors hover:text-ink">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="mailto:noah@pipeworks.io" className="text-sm text-ink-softer transition-colors hover:text-ink">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold tracking-widest text-ink uppercase">
                  Account
                </h4>
                <ul className="mt-4 space-y-2.5">
                  <li>
                    <a
                      href="https://app.pipeworks.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink-softer transition-colors hover:text-ink"
                    >
                      Log in
                    </a>
                  </li>
                  <li>
                    <a href="#main" className="text-sm text-ink-softer transition-colors hover:text-ink">
                      Get early access
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-ink-softer sm:flex-row">
              <p>&copy; {new Date().getFullYear()} Pipeworks. All rights reserved.</p>
              <p>Made in the USA.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
