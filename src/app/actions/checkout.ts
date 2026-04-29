'use server'
// 'use server' tells Next.js this file only runs on the server.
// This means your secret Stripe key is NEVER sent to the browser.

import Stripe from 'stripe'
import { redirect } from 'next/navigation'

// This is a Server Action — a function that runs on the server when a form is submitted.
// The homepage <form action={createCheckoutSession}> calls this automatically.
export async function createCheckoutSession() {

  // Initialize Stripe INSIDE the function so it only runs at request time,
  // not at build time. Moving it outside caused Vercel's build to crash
  // because environment variables are not available during the build step.
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

  // Ask Stripe to create a Checkout Session.
  // A Session represents one attempt to complete a purchase.
  const session = await stripe.checkout.sessions.create({
    // Only accept card payments for simplicity.
    payment_method_types: ['card'],

    // 'payment' mode = one-time charge (as opposed to 'subscription').
    mode: 'payment',

    // What the customer is buying.
    line_items: [
      {
        price_data: {
          currency: 'usd',
          // unit_amount is in CENTS. $1.00 = 100 cents.
          unit_amount: 100,
          product_data: {
            name: 'SwiftCut $1 Test Item',
            description: 'A test payment for demonstration purposes.',
          },
        },
        quantity: 1,
      },
    ],

    // Where to send the customer after a SUCCESSFUL payment.
    // Stripe automatically replaces {CHECKOUT_SESSION_ID} with the real session ID.
    // We pass it along so the success page can display a confirmation reference.
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,

    // Where to send the customer if they click "Back" on the Stripe checkout page.
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
  })

  // Redirect the user's browser to Stripe's hosted payment page.
  // session.url is the full Stripe URL (e.g. https://checkout.stripe.com/...)
  // The "!" asserts that session.url will not be null here.
  redirect(session.url!)
}
