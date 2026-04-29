'use server'

import Stripe from 'stripe'
import { redirect } from 'next/navigation'

export async function createCheckoutSession() {

  // Guard: catch missing environment variables and show a clear message
  // instead of a cryptic server crash.
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error(
      'STRIPE_SECRET_KEY is not set. Add it to your Vercel Environment Variables and redeploy.'
    )
  }

  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    throw new Error(
      'NEXT_PUBLIC_BASE_URL is not set. Add it to your Vercel Environment Variables and redeploy.'
    )
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

  // Build absolute URLs for success and cancel redirects.
  // Remove any accidental trailing slash from NEXT_PUBLIC_BASE_URL first.
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL.replace(/\/$/, '')

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          unit_amount: 100, // $1.00 in cents
          product_data: {
            name: 'SwiftCut $1 Test Item',
            description: 'A test payment for demonstration purposes.',
          },
        },
        quantity: 1,
      },
    ],
    success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/cancel`,
  })

  if (!session.url) {
    throw new Error('Stripe did not return a checkout URL. Check your Stripe dashboard.')
  }

  redirect(session.url)
}
