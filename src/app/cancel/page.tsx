// /cancel — shown when a user exits Stripe checkout without paying.
// No charge was made. We reassure the user and link them back to the homepage.

import Link from 'next/link'

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-lg">

        {/* ── Card container ── */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 text-center shadow-xl">

          {/* X icon in a red circle */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-red-500/10 border-2 border-red-500 flex items-center justify-center">
              <svg
                aria-hidden="true"
                className="w-10 h-10 text-red-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">
            Payment Cancelled
          </h1>

          {/* Required message */}
          <p className="text-gray-400 text-lg mb-8">
            Your transaction was not completed.
          </p>

          {/* Status detail row */}
          <div className="bg-gray-950 border border-gray-800 rounded-xl px-6 py-4 flex justify-between items-center mb-8">
            <span className="text-gray-400 text-sm">Status</span>
            <span className="inline-flex items-center gap-1.5 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" />
              Cancelled
            </span>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            No charge was made to your card. You can return to the homepage and
            try again whenever you&rsquo;re ready.
          </p>

          {/* Return home button */}
          <Link
            href="/"
            className="inline-block w-full bg-red-500 hover:bg-red-400 active:bg-red-600 text-white text-base font-bold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-red-500/20"
          >
            Return to Homepage
          </Link>
        </div>

        {/* Footer note */}
        <p className="text-center text-gray-700 text-xs mt-6">
          SwiftCut Barbershop &middot; KSU netID: 001109198
        </p>

      </div>
    </div>
  )
}
