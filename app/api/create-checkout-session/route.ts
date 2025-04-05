import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-03-31.basil",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { priceId, email, imageCount } = body;

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      customer_email: email,
      metadata: {
        imageCount: imageCount.toString(),
        customerEmail: email,
      },
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Error creating checkout session:", err);
    return NextResponse.json(
      { error: { message: err.message } },
      { status: err.statusCode || 500 }
    );
  }
}
