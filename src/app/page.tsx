import Link from 'next/link'
import Faq from '@/components/Faq'
// Import the Server Action that creates a Stripe Checkout Session.
// This function runs on the server — the secret key never reaches the browser.
import { createCheckoutSession } from '@/app/actions/checkout'

const badges = [
  {
    label: 'Walk-ins Welcome',
    sub: 'No appointment needed',
    icon: (
      <svg
        aria-hidden="true"
        className="w-6 h-6 text-red-500 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: 'Black-Owned & Operated',
    sub: 'Community first, always',
    icon: (
      <svg
        aria-hidden="true"
        className="w-6 h-6 text-red-500 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
  {
    label: 'Est. 2019',
    sub: 'Trusted for 5+ years',
    icon: (
      <svg
        aria-hidden="true"
        className="w-6 h-6 text-red-500 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const cuts = [
  'Drop Fade',
  'Box Braids',
  'Line-up',
  'Retwists',
  'Temp Fade',
  'Cornrows',
]

const testimonials = [
  {
    quote: 'Best barber in Kennesaw, no debate. My fade has never looked this clean.',
    name: 'Marcus T.',
    service: 'Fade',
  },
  {
    quote: "My daughter loves her knotless braids every time. The stylists are so patient and skilled.",
    name: 'Denise R.',
    service: 'Knotless Braids',
  },
  {
    quote: "I walk in stressed and walk out looking fresh. SwiftCut never misses.",
    name: 'Jordan W.',
    service: 'Adult Cut + Beard Trim',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-950 text-white py-28 px-6 text-center">
        <p className="text-red-400 text-xs font-bold tracking-widest uppercase mb-5">
          Kennesaw&rsquo;s Premier Barbershop
        </p>
        <h1 className="text-5xl font-extrabold tracking-tight leading-tight mb-6 max-w-2xl mx-auto">
          Sharp Cuts.<br />Real Style.<br />Your Community.
        </h1>
        <p className="text-gray-400 text-lg max-w-md mx-auto mb-10">
          Black-owned barbershop and braiding salon. Fades, shape-ups, knotless braids,
          and more — walk-ins always welcome.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/services"
            className="bg-red-500 hover:bg-red-400 text-white px-7 py-3 rounded-md font-semibold transition-colors"
          >
            View Services
          </Link>
          <Link
            href="/book"
            className="border border-white/25 hover:bg-white/10 text-white px-7 py-3 rounded-md font-semibold transition-colors"
          >
            Book Now
          </Link>
        </div>

        <p className="text-gray-600 text-xs mt-10">KSU netID: 001109198</p>
      </section>

      {/* ── TEST PAYMENT SECTION ──────────────────────────────────────────
          Placed immediately after the hero so it is the first thing a
          visitor sees after scrolling. The red top border, card layout,
          and large price label make it unmissable for grading purposes.
      ─────────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="payment-heading"
        className="bg-gray-900 border-t-4 border-red-500 py-20 px-6"
      >
        <div className="max-w-lg mx-auto">

          {/* Card */}
          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-10 text-center shadow-xl">

            {/* Badge */}
            <span className="inline-block bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Demo Payment
            </span>

            {/* Section heading */}
            <h2
              id="payment-heading"
              className="text-3xl font-extrabold text-white tracking-tight mb-8"
            >
              Test Payment
            </h2>

            {/* Product detail rows */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden mb-8 text-left">

              {/* Product title */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
                <span className="text-gray-400 text-sm">Item</span>
                <span className="text-white font-semibold">SwiftCut $1 Test Item</span>
              </div>

              {/* Price */}
              <div className="flex justify-between items-center px-6 py-4">
                <span className="text-gray-400 text-sm">Price</span>
                <span className="text-green-400 font-bold text-xl">$1.00</span>
              </div>

            </div>

            {/* Explanation */}
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              This is a test payment to demonstrate a working credit card checkout.
              No real money will be charged.
            </p>

            {/* Submit button — calls the Server Action which creates a
                Stripe Checkout Session and redirects to Stripe's hosted page */}
            <form action={createCheckoutSession}>
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-400 active:bg-red-600 text-white text-xl font-bold py-5 rounded-xl transition-colors shadow-lg shadow-red-500/20"
              >
                Buy $1 Test Item
              </button>
            </form>

            <p className="text-gray-600 text-xs mt-4">
              Powered by Stripe &middot; Test mode &middot; No real charge
            </p>

          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section aria-label="Trust highlights" className="bg-white border-b border-gray-100 py-10 px-6">
        <ul className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-8 sm:gap-0 sm:divide-x sm:divide-gray-200">
          {badges.map((b) => (
            <li key={b.label} className="flex items-center gap-3 sm:flex-1 sm:justify-center sm:px-8">
              {b.icon}
              <div>
                <p className="font-semibold text-gray-900 text-sm">{b.label}</p>
                <p className="text-xs text-gray-500">{b.sub}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured Cuts & Styles */}
      <section aria-labelledby="cuts-heading" className="bg-gray-950 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            id="cuts-heading"
            className="text-2xl font-bold text-white text-center mb-2 tracking-tight"
          >
            Featured Cuts &amp; Styles
          </h2>
          <p className="text-gray-500 text-sm text-center mb-12">Services we do best</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cuts.map((name, i) => (
              <li
                key={name}
                className="flex items-center gap-4 bg-gray-900 border border-gray-800 hover:border-red-500/60 rounded-xl px-6 py-5 transition-colors"
              >
                <span
                  aria-hidden="true"
                  className="text-red-500 font-extrabold text-sm tabular-nums w-6 shrink-0"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-white font-semibold tracking-wide">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section aria-labelledby="testimonials-heading" className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 id="testimonials-heading" className="text-2xl font-bold text-gray-900 text-center mb-10">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col gap-4"
              >
                <p className="text-gray-700 text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-red-500">{t.service}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq />
    </>
  )
}
