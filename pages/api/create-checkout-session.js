import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

//
const BASE_URL = "https://ai-skills-course-3itfjuas3-lidonas-chipunzas-projects.vercel.app";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({ error: "Stripe secret key not configured" });
  }

  if (!BASE_URL || BASE_URL.includes("YOUR-PROJECT-NAME")) {
    return res.status(500).json({ error: "BASE_URL not configured in code" });
  }

  try {
    const { priceId, quantity = 1, customerEmail } = req.body;

    if (!priceId) {
      return res.status(400).json({ error: "Missing priceId" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity }],
      mode: "payment",
      success_url: `${BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${BASE_URL}/`,
      customer_email: customerEmail || undefined,
      metadata: { product: "AI Skills Bootcamp" }
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("create-checkout-session error", err);
    return res
      .status(500)
      .json({ error: err.message || "Internal error creating checkout" });
  }
} 
