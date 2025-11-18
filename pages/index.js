import { useState } from "react";

async function buy(priceId, customerEmail) {
  try {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId, quantity: 1, customerEmail }),
    });

    const json = await res.json();
    if (json?.url) {
      window.location.href = json.url; // redirect to Stripe Checkout
    } else {
      alert("Checkout failed: " + (json.error || "Unknown error"));
    }
  } catch (err) {
    alert("Error: " + String(err));
  }
}

export default function Home() {
  const [email, setEmail] = useState("");

  // TODO: replace this with your real Stripe Price ID from the Dashboard
  const PRICE_ID = "price_1SUn5gBRrAJYCW5Rs3Nhi3VM";

  const handleBuyClick = () => {
    if (!PRICE_ID || PRICE_ID.includes("REPLACE_ME")) {
      alert("Please set your Stripe Price ID in the code first.");
      return;
    }
    
    buy(PRICE_ID, email);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "Inter, system-ui",
        background:
          "linear-gradient(180deg, #0f172a 0%, #020617 40%, #020617 100%)",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "32px 16px 64px",
        }}
      >
        {/* Top badge */}
        <div
          style={{
            fontSize: 12,
            padding: "4px 10px",
            borderRadius: 999,
            border: "1px solid rgba(148,163,184,0.6)",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 16,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "999px",
              background: "#22c55e",
            }}
          />
          <span>7-Day AI Skills Bootcamp • Beginner-friendly</span>
        </div>

        {/* Hero section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
            gap: 32,
            alignItems: "center",
          }}
        >
          {/* Left: text */}
          <div>
            <h1
              style={{
                fontSize: 36,
                lineHeight: 1.1,
                margin: 0,
                marginBottom: 16,
              }}
            >
              Learn to use AI like a pro in 7 days —{" "}
              <span style={{ color: "#38bdf8" }}>even if you’re not “techy”.</span>
            </h1>
            <p
              style={{
                fontSize: 16,
                color: "#e5e7eb",
                maxWidth: 520,
                marginBottom: 20,
              }}
            >
              A practical online bootcamp that shows you how to use ChatGPT,
              Canva and Notion to save hours, grow your business, and create
              better content in minutes — without feeling overwhelmed.
            </p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                marginBottom: 20,
                color: "#cbd5f5",
                fontSize: 14,
              }}
            >
              <li>✅ 7 days of short, focused lessons</li>
              <li>✅ Copy-paste AI prompts for real client work</li>
              <li>✅ Templates for content, offers, and systems</li>
              <li>✅ WhatsApp support + Q&amp;A</li>
            </ul>

            {/* Email + CTA */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  padding: "10px 12px",
                  borderRadius: 999,
                  border: "1px solid #1f2937",
                  minWidth: 0,
                  flex: 1,
                  backgroundColor: "#020617",
                  color: "white",
                }}
              />
              <button
                onClick={handleBuyClick}
                style={{
                  padding: "10px 18px",
                  borderRadius: 999,
                  border: "none",
                  background:
                    "linear-gradient(135deg,#22c55e,#16a34a,#22c55e)",
                  color: "black",
                  fontWeight: 600,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Join the bootcamp
              </button>
            </div>

            <p style={{ fontSize: 12, color: "#9ca3af" }}>
              Secure checkout via Stripe. You’ll get instant email confirmation
              and access details after payment.
            </p>

            {/* WhatsApp link */}
            <div style={{ marginTop: 16 }}>
              <a
                href="https://wa.me/27633701093?text=Hi%2C%20I%27m%20interested%20in%20the%20AI%20Skills%20Bootcamp"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: 13,
                  color: "#38bdf8",
                  textDecoration: "none",
                }}
              >
                Prefer to chat first? Message me on WhatsApp →
              </a>
            </div>
          </div>

          {/* Right: “what you get” card */}
          <div
            style={{
              background:
                "radial-gradient(circle at top, #1e293b, #020617 60%)",
              borderRadius: 16,
              padding: 20,
              border: "1px solid rgba(148,163,184,0.3)",
            }}
          >
            <h2
              style={{
                fontSize: 18,
                marginTop: 0,
                marginBottom: 8,
              }}
            >
              What you’ll be able to do in 7 days
            </h2>
            <p
              style={{
                fontSize: 13,
                color: "#e5e7eb",
                marginBottom: 12,
              }}
            >
              At the end of this bootcamp you’ll have:
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: 13,
                color: "#cbd5f5",
              }}
            >
              <li style={{ marginBottom: 8 }}>
                • A content system that publishes posts, emails or ads faster
                with AI.
              </li>
              <li style={{ marginBottom: 8 }}>
                • A repeatable ChatGPT workflow for research, outlines and
                drafts.
              </li>
              <li style={{ marginBottom: 8 }}>
                • A Notion dashboard to track ideas, tasks and clients.
              </li>
              <li style={{ marginBottom: 8 }}>
                • Ready-to-use prompts for your business or freelancing niche.
              </li>
            </ul>
            <div
              style={{
                marginTop: 16,
                padding: 10,
                borderRadius: 12,
                backgroundColor: "rgba(15,23,42,0.9)",
                border: "1px solid rgba(148,163,184,0.4)",
                fontSize: 12,
                color: "#e5e7eb",
              }}
            >
              <strong>Beta launch offer:</strong> get lifetime access and all
              future updates at the early-bird price. Prices will go up after
              the first cohort.
            </div>
          </div>
        </div>

        {/* Simple 3-step section */}
        <div
          style={{
            marginTop: 48,
            borderTop: "1px solid rgba(148,163,184,0.3)",
            paddingTop: 24,
          }}
        >
          <h2 style={{ fontSize: 20, marginBottom: 12 }}>
            How the bootcamp works
          </h2>
          <ol
            style={{
              paddingLeft: 16,
              fontSize: 14,
              color: "#e5e7eb",
            }}
          >
            <li style={{ marginBottom: 8 }}>
              <strong>Enroll today</strong> using the secure Stripe checkout.
            </li>
            <li style={{ marginBottom: 8 }}>
              <strong>Get instant access</strong> to the lessons, prompts and
              templates via email.
            </li>
            <li style={{ marginBottom: 8 }}>
              <strong>Follow the 7-day plan</strong> (about 60–90 minutes per
              day) and start using AI in your real work.
            </li>
          </ol>
          <p style={{ fontSize: 12, color: "#9ca3af", marginTop: 12 }}>
            You don’t need to be “good with tech” — if you can use WhatsApp and
            a browser, you can do this.
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: 40,
            fontSize: 11,
            color: "#6b7280",
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} AI Skills Bootcamp. All rights reserved.
        </div>
      </div>
    </div>
  );
} 
