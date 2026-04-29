'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Do you accept walk-ins?',
    answer:
      'Yes! Walk-ins are always welcome. For guaranteed availability, call or text ahead to reserve your spot.',
  },
  {
    question: 'How long does a typical service take?',
    answer:
      'Most haircuts run 30–45 minutes. Braiding services typically take 2–4 hours depending on the style and length.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept cash, all major cards, and digital payments including Cash App, Venmo, and Zelle.',
  },
  {
    question: 'Can I request a specific barber or stylist?',
    answer:
      "Absolutely — just mention your preferred stylist when you call to book and we'll do our best to accommodate.",
  },
  {
    question: 'Do you cut kids\' hair?',
    answer:
      "Yes. Kids' cuts (12 & under) start at $20 and we're patient and welcoming to younger clients.",
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section aria-labelledby="faq-heading" className="bg-gray-50 py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 id="faq-heading" className="text-2xl font-bold text-gray-900 text-center mb-10">
          Frequently Asked Questions
        </h2>
        <dl className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl bg-white overflow-hidden">
              <dt>
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-500"
                >
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="ml-4 text-xl leading-none select-none text-red-500"
                  >
                    {openIndex === i ? '−' : '+'}
                  </span>
                </button>
              </dt>
              {openIndex === i && (
                <dd className="px-5 pb-5 pt-2 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
