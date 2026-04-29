// /success — shown after a completed Stripe payment.
// Stripe redirects here with ?session_id=cs_test_... appended to the URL.
// We display it as a confirmation reference so a professor can verify the transaction.

import Link from 'next/link'

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string }
}) {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-lg">

        {/* ── Card container ── */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 text-center shadow-xl">

          {/* Green checkmark icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500 flex items-center justify-center">
              <svg
                aria-hidden="true"
                className="w-10 h-10 text-green-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">
            Payment Successful
          </h1>
          <p className="text-gray-400 text-base mb-10">
            Your test transaction was completed successfully.
          </p>

          {/* ── Payment details table ── */}
          <div className="bg-gray-950 border border-gray-800 rounded-xl overflow-hidden mb-8 text-left">

            {/* Item purchased */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
              <span className="text-gray-400 text-sm">Item Purchased</span>
              <span className="text-white font-semibold">SwiftCut Test Item</span>
            </div>

            {/* Amount */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
              <span className="text-gray-400 text-sm">Amount Charged</span>
              <span className="text-green-400 font-bold text-lg">$1.00</span>
            </div>

            {/* Payment status */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
              <span className="text-gray-400 text-sm">Status</span>
              <span className="inline-flex items-center gap-1.5 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Paid
              </span>
            </div>

            {/* Payment processor */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
              <span className="text-gray-400 text-sm">Processor</span>
              <span className="text-white font-semibold">Stripe (Test Mode)</span>
            </div>

            {/* Stripe session ID — only shown when Stripe passes it in the URL */}
            {searchParams.session_id && (
              <div className="px-6 py-4">
                <p className="text-gray-400 text-sm mb-1">Confirmation ID</p>
                <p className="text-gray-300 font-mono text-xs break-all">
                  {searchParams.session_id}
                </p>
              </div>
            )}
          </div>

          {/* Confirmation message */}
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            This was a <span className="text-white font-semibold">test payment</span> processed
            through Stripe. No real money was charged. The transaction can be verified in
            the&nbsp;Stripe dashboard under <span className="text-white font-semibold">Payments → Test mode</span>.
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
